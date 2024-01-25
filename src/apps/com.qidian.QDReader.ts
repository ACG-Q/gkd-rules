import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2024-01-25 15:21:01',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
          matches: 'ToggleButton[text="关闭"] -3 View > View[text^="已观看"]',
          exampleUrls: 'https://m.gkd.li/47310744/f597c71e-a9b2-4766-b422-7f50180468c7',
          snapshotUrls: 'https://i.gkd.li/import/14048150',
        },
      ],
    },
  ],
});