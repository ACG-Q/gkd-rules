import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wn.app.np',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击 跳过',
      rules: [
        {
          quickFind: true,
          activityIds: 'player.normal.np.activity.SplashActivity',
          matches: '@TextView[text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/47310744/8004ff60-325d-4001-b5cc-1cb0ce9d454a',
          snapshotUrls: 'https://i.gkd.li/i/14532036',
        },
      ],
    },
  ],
});
