import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      name: '功能类',
      key: 0,
      desc: '看视频领取金币',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['FrameLayout @ImageView[index=1]'],
          snapshotUrls: ['https://i.gkd.li/import/13463084'],
          exampleUrls: [
            'https://m.gkd.li/47310744/8133d231-2601-4fa1-999c-a744eb2eff99',
          ],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      name: '功能类',
      key: 1,
      desc: '看视频领取金币',
      rules: [
        {
          matches: ['@TextView[text="关闭广告"]'],
          snapshotUrls: ['https://i.gkd.li/import/13463084'],
          exampleUrls: [
            'https://m.gkd.li/47310744/8133d231-2601-4fa1-999c-a744eb2eff99',
          ],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      name: '功能类',
      key: 2,
      desc: '开宝箱得金币',
      rules: [
        {
          matches: [
            '@UIView +18 FlattenUIText[text=\'开宝箱得金币\']',
            '@UIView +8 FlattenUIText[text=\'开宝箱得金币\']',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13482949'],
          exampleUrls: [
            'https://m.gkd.li/47310744/bb683458-2006-45ae-95d2-1f2d8bbd63a7',
          ],
          activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
        },
        {
          matches: ['[text=\'恭喜你获得\'] +92 @UIView'],
          snapshotUrls: ['https://i.gkd.li/import/13463118'],
          exampleUrls: [
            'https://m.gkd.li/47310744/e12816b5-d8cf-48da-ae57-22c152fd67eb',
          ],
          activityIds: ['com.dragon.read.pages.main.MainFragmentActivity'],
        },
      ],
    },
  ],
});
