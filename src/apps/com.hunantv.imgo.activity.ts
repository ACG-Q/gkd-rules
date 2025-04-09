import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '悬浮广告按钮',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.hunantv.imgo.activity.MainActivity',
          matches: '[vid="btnClose"]',
          exampleUrls:
            'https://m.gkd.li/47310744/590e8d61-57bf-405a-8700-8e88abce0945',
          snapshotUrls: 'https://i.gkd.li/i/14549036',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '点击 跳过',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mgtv.ui.ad.AdHotSplashActivity',
          matches: '[text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/47310744/47fd901c-3331-4578-af34-cdef96f5f96d',
          snapshotUrls: 'https://i.gkd.li/i/14549041',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-暂停广告①',
      desc: '播放器暂停时出现的广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mgtv.ui.videoplay.MGVideoPlayActivity',
          matches: '[text="关闭广告"]',
          exampleUrls:
            'https://m.gkd.li/47310744/8567e244-9974-4959-9b67-0627379fd1ff',
        },
      ],
    },
    {
      key: 4,
      name: '局部广告-播放广告①',
      desc: '播放器 播放过程中的广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.mgtv.ui.videoplay.MGVideoPlayActivity',
          matches: '[vid="closeAdIcon"]',
          exampleUrls:
            'https://m.gkd.li/47310744/aa2623d7-2555-4340-a3b3-bbbd37d09238',
        },
      ],
    },
  ],
});
