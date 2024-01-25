import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '局部广告',
      desc: '看视频领取福利',
      rules: [
        {
          activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
          matches: 'ToggleButton[text="关闭"] -3 View > View[text^="已观看"]',
          exampleUrls:
            'https://m.gkd.li/47310744/f597c71e-a9b2-4766-b422-7f50180468c7',
          snapshotUrls: 'https://i.gkd.li/import/14048150',
        },
      ],
    },
  ],
});
