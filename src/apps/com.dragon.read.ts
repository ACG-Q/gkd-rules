import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '功能类-视频广告',
      desc: '看视频领取金币',
      rules: [
        {
          matches: ['@TextView[text="关闭广告"]'],
          snapshotUrls: ['https://i.gkd.li/import/13463084'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-奖励弹窗',
      desc: '恭喜你获得 xx 金币',
      rules: [
        {
          quickFind: true,
          matches: '[id="com.dragon.read:id/ady"]',
          exampleUrls:
            'https://m.gkd.li/47310744/b8742ea0-5537-4c3e-a7e7-9a36585f5c34',
          snapshotUrls: 'https://i.gkd.li/i/14047985',
        },
        {
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: '@UIView -2 UIComponent',
          exampleUrls:
            'https://m.gkd.li/47310744/57f1f752-617f-43c5-a177-e04ddd3286d1',
          snapshotUrls: 'https://i.gkd.li/i/14532015',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-听书广告',
      desc: '听书页面 👆 广告',
      rules: [
        {
          activityIds: 'com.dragon.read.reader.speech.page.AudioPlayActivity',
          matches: '[id="com.dragon.read:id/bl5"][text="关闭"]',
          exampleUrls:
            'https://m.gkd.li/47310744/6c47b5c7-6521-4302-ba17-e9585822cbc5',
          snapshotUrls: 'https://i.gkd.li/import/14047928',
        },
      ],
    },
    {
      key: 4,
      name: '开屏广告-启动页广告',
      desc: '最近双11才出现的启动页广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.dragon.read.pages.splash.SplashActivity',
          matches: 'FrameLayout[id="com.dragon.read:id/bau"]',
          exampleUrls: 'https://e.gkd.li/undefined',
        },
      ],
    },
  ],
});
