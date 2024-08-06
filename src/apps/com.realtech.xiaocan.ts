import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 1,
      name: '功能类',
      desc: '是否允许跳转微信，仅限本次，防止点击"始终允许"',
      rules: [
        {
          activityIds: 'com.jason.videocat.ui.activity.WelcomeActivity',
          matches: 'Button[desc="仅限本次"]',
          snapshotUrls: 'https://i.gkd.li/i/16504721',
        },
      ],
    },
  ],
});