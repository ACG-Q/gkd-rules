# gkd-rules

个人的GKD规则

> 通过fork [gkd-kit/subscription: GKD 默认订阅规则](https://github.com/gkd-kit/subscription/) 完成搭建
>
> 根据个人的需求，删除Github Action的部分功能

## 订阅连接

```
https://raw.githubusercontent.com/ACG-Q/gkd-rules/main/dist/gkd.json5
https://ghproxy.net/https://raw.githubusercontent.com/ACG-Q/gkd-rules/main/dist/gkd.json5
```

## 配置

### 允许机器人推送代码

1. 点击[Settings](/settings)
2. 展开 Actions
3. 点击 General
4. 找到 `Workflow permissions`
5. 选择 `Read and write permissions`
6. 选择 `Allow GitHub Actions to create and approve pull requests`
7. 点击 `Save`

### 配置订阅连接

1. 打开`src/config.ts`

   ```typescript
   import categories from './categories';
   import globalGroups from './globalGroups';
   import apps from './rawApps';
   import type { RawSubscription } from './types';

   const subsConfig: RawSubscription = {
     id: 0,
     version: 0,
     name: '默认订阅',
     author: 'lisonge',
     supportUri: 'https://github.com/gkd-kit/subscription',
     updateUrl:
       'https://registry.npmmirror.com/@gkd-kit/subscription/latest/files',
     checkUpdateUrl:
       'https://registry.npmmirror.com/@gkd-kit/subscription/latest/files/dist/gkd.version.json',
     globalGroups,
     categories,
     apps,
   };

   export default subsConfig;
   ```

2. 修改`id`、`name`、`author`、`supportUri`、`updateUrl`、`checkUpdateUrl`

## 当前分类

| key | name       | description                                                                                                  |
| --- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| 0   | 开屏广告   |                                                                                                              |
| 1   | 青少年模式 |                                                                                                              |
| 2   | 更新提示   |                                                                                                              |
| 3   | 评价提示   |                                                                                                              |
| 4   | 通知提示   |                                                                                                              |
| 5   | 定位提示   |                                                                                                              |
| -1  | 权限提示   |                                                                                                              |
| 6   | 局部广告   | 不影响使用的广告, 所有的广告卡片及悬浮广告按钮                                                               |
| 7   | 全屏广告   | 不关闭广告就无法进行其它操作的广告弹窗, 它阻碍用户操作, 一般是刚进入APP时显示的全屏弹窗                      |
| 8   | 分段广告   | 如微信朋友圈广告/酷安帖子广告/贴吧帖子广告, 需要分阶段多步操作才能关闭, 会造成屏幕略微闪烁, 稍微影响用户体验 |
| 9   | 功能类     | 非广告, 点击某些功能按钮                                                                                     |

## 维护

[CONTRIBUTING.md](CONTRIBUTING.md)
