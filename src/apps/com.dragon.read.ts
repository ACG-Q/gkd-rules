import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '功能类',
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
      key: 2,
      name: '功能类',
      desc: '恭喜你获得 xx 金币',
      rules: [
        {
          quickFind: true,
          matches: '[id="com.dragon.read:id/ady"]',
          exampleUrls: 'https://m.gkd.li/47310744/b8742ea0-5537-4c3e-a7e7-9a36585f5c34',
          snapshotUrls: 'https://i.gkd.li/import/14047985',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
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
  ],
});
