import '@i18n/i18n'
import I18n from 'react-native-i18n'
console.log('88888888888888', $L.locale, $L.t('mine.settings.title'))
console.log('7777777777', I18n.locale, I18n.t('mine.settings.title'))
//引入页面
/* --------------------------------------------------------------------------------------------- */
import Login from '@pages/Login'; // 登录
/* --------------------------------------------------------------------------------------------- */
import Home from '@pages/Home'; // 首页
/* --------------------------------------------------------------------------------------------- */
import Template from '@pages/Template'; // 模板
/* --------------------------------------------------------------------------------------------- */
import Mine from '@pages/Mine'; // 个人中心
import Settings from '@pages/Mine/Settings'; // 设置模块
/* --------------------------------------------------------------------------------------------- */

// import P2 from '@pages/P2'; // 子页面二
// import P3 from '@pages/P3'; // 子页面三

// 全局路由
export const PageRouter = {
    /* ------------------------------登录/注册------------------------------ */
    Login, 
    /* ------------------------------个人中心模块------------------------------ */
    Settings, 
}

// 底部导航基础参数（style传入 simple - 普通样式 或 center - 特殊样式）
export const BottomTab = [
    {
        routeName: 'Home',
        title: I18n.t('home.title'),
        path: Home,
        style: 'simple',
        icon: require('@images/bottomTabs/Home.png')
    },
    {
        routeName: 'Template',
        title: I18n.t('template.title'),
        path: Template,
        style: 'simple',
        icon: require('@images/bottomTabs/center.png')
    },
    {
        routeName: 'Mine',
        title: I18n.t('mine.title'),
        path: Mine,
        style: 'simple',
        icon: require('@images/bottomTabs/My.png')
    }
]

export default {
    BottomTab,
    PageRouter
}