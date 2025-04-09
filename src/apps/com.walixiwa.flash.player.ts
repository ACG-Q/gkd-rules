import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.walixiwa.flash.player',
  name: '资源猫',
  groups: [
    {
      key: 1,
      name: '开屏广告-启动广告',
      desc: '点击 跳过',
      rules: [
        {
          activityIds: 'com.jason.videocat.ui.activity.WelcomeActivity',
          matches: '[id="com.walixiwa.flash.player:id/content"] >3 View',
        },
        {
          quickFind: true,
          activityIds: 'com.jason.videocat.ui.activity.WelcomeActivity',
          matches: '[text^="跳过"]',
        },
      ],
    },
  ],
});
