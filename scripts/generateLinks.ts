import fs from 'fs';
import path from 'path';
import packageJson from '../package.json';
const config: AcceleratorConfig = packageJson.proxyLink;

interface AcceleratorConfig {
    /**
     * 加速链接
     */
    accelerators: string[],
    /**
     * 原始链接
     */
    originalLink: string,
    /**
     * 超时时间
     * 单位：毫秒
     * 默认：5000
     */
    timeout: number,
    /**
     * 重试次数
     * 默认：3
     */
    retries: number,
    /**
     * 重试延迟
     * 单位：毫秒
     * 默认：1000
     */
    retryDelay: number
}

interface LinkCheckResult {
    link: string;
    available: boolean;
}

function validateConfig(config: unknown): asserts config is AcceleratorConfig {
    if (!config || typeof config !== 'object') {
        throw new Error('Invalid config format');
    }
    const requiredFields = ['accelerators', 'originalLink', 'retries', 'timeout', 'retryDelay'];
    requiredFields.forEach(field => {
        if (!(field in (config as Record<string, unknown>))) {
            throw new Error(`Missing required field: ${field}`);
        }
    });
}

// 检测链接是否可用
async function checkLink(link: string, config: AcceleratorConfig): Promise<boolean> {
    let attempt = 0;
    while (attempt <= config.retries) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), config.timeout);
            const response = await fetch(link, {
                method: 'HEAD',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            return response.ok;
        } catch (error: unknown) {
            if (attempt === config.retries) {
                console.error(`请求失败: ${link}，错误: ${error instanceof Error ? error.message : 'Unknown error'}`);
                return false;
            }
            console.log(`第${attempt + 1}次重试...`);
            await new Promise(resolve => setTimeout(resolve, config.retryDelay));
            attempt++;
        }
    }
    return false;
}

// 生成加速链接
async function generateAcceleratedLinks(
    accelerators: string[],
    originalLink: string,
    config: AcceleratorConfig
): Promise<string[]> {
    const checkPromises = accelerators.map(async (accelerator) => {
        const acceleratedLink = `${accelerator}${originalLink}`;
        console.log(`正在检测加速链接: ${acceleratedLink}`);
        const isAvailable = await checkLink(acceleratedLink, config);
        if (isAvailable) {
            console.log(`√ 可用加速链接: ${acceleratedLink}`);
        } else {
            console.log(`× 不可用加速链接: ${acceleratedLink}`);
        }
        return { link: acceleratedLink, available: isAvailable } as LinkCheckResult;
    });

    const results = await Promise.all(checkPromises);
    return results.filter(r => r.available).map(r => r.link);
}

// 更新 README.md 文件
async function updateReadme(
  templatePath: string,
  outputPath: string,
  originalLink: string,
  availableLinks: string[]
): Promise<void> {
  try {
    // 读取模板文件内容
    const templateContent = await fs.promises.readFile(templatePath, 'utf-8');

    // 添加分类注释
    const generateSubscriptionLinks = () => {
        const timestamp = new Date().toLocaleDateString('zh-CN');
        const timestamp_ = new Date().getTime();
        return `
### 🌐 GitHub 原始链接

\`\`\`
${originalLink}
\`\`\`

### 🚀 国内加速链接

${availableLinks.map((link, index) => `${index + 1}. 加速连接${index + 1} \n\`\`\`\n${link}\n\`\`\`\n`).join('\n')}
    
> **🕒 最后更新**：**${timestamp}** ${timestamp_}`;
    };

    // 替换订阅链接占位符
    const updatedContent = templateContent.replace(
      '__SUB_LINK__',
      generateSubscriptionLinks()
    );

    // 写入生成后的README文件
    await fs.promises.writeFile(outputPath, updatedContent, 'utf-8');
    console.log('README 生成成功');
  } catch (error) {
    console.error('更新 README 失败:', error instanceof Error ? error.message : error);
    throw error;
  }
}

(async ()=>{
    validateConfig(config);
    const availableLinks = await generateAcceleratedLinks(
        config.accelerators,
        config.originalLink,
        config
    );
    await updateReadme(
        path.join(process.cwd(), 'README-T.md'),
        path.join(process.cwd(), 'README.md'),
        config.originalLink,
        availableLinks
    );
})()
