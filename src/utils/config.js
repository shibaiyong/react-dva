module.exports = {
    name: '在线办卡',
    logo: '/logo.svg',
    footerText: '版权所有 © 深圳瑞银信信息技术有限公司 · 粤ICP备14092427号-1 · 粤公网安备 44030402000095号',
    openPages: ['/login'],
    api: {
        user: '/api/auth/user',
        users: '/api/users',
        usersRoles: '/api/users/roles',
        signin: '/api/auth/signin',
        signout: '/api/auth/signout',
        roles: '/api/roles',
        rolesAll: '/api/roles/all',
        rolesResources: '/api/roles/resources',
        resources: '/api/resources',
        resourcesChildren: '/api/resources/children',
        isShowView:'/api/market/isShowView',

        // app
        imgdownload: '/api/upload/downloadLogo?filename=',
        cityListUrl: '/api/market/cityList',
        marketUrl: '/api/market/index',
        cardFiltersUrl: '/api/market/listAllCondition',
        cardListUrl: '/api/market/listAllCard',
        listProcessBankUrl: '/api/market/listProcessBank',
        listThemeExtUrl: '/api/market/listThemeExt'

    },
    icons: [
        'area-chart',
        'bar-chart',
        'setting',
        'code-o'
    ],
    defaultIcon: 'folder',
    tokenKey: 'Authorization'
}