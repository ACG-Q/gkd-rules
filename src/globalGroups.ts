import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
    {
        key: 0,
        name: '开屏广告',
        actionMaximum: 2,
        matchTime: 10000,
        resetMatch: 'app',
        actionCdKey: 0,
        actionMaximumKey: 0,
        rules: [
            {
                key: 0,
                quickFind: true,
                matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
            },
            {
                key: -1,
                matches:
                '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
            },
        ],
        apps: [
            {
                // 通知栏界面
                id: 'com.android.systemui',
                enable: false
            },
            {
                // 系统设置
                id: 'com.android.settings',
                enable: false
            },
            {
                // miui 锁屏界面
                id: 'com.miui.aod',
                enable: false
            },
            {
                // miui 状态栏界面
                id: 'miui.systemui.plugin',
                enable: false
            },
            {
                // gkd本体
                id: "li.songe.gkd",
                enable: false
            },

            // https://github.com/gkd-kit/gkd/issues/451
            // 开启全局规则后，会导致无内核的浏览器卡顿
            {
                id: 'mark.via',
                enable: false
            },
            {
                id: 'com.mycompany.app.soulbrowser',
                enable: false
            },
            {
                id: 'com.mmbox.xbrowser',
                enable: false
            },
        ]
    }
]);