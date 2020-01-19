import '@i18n/i18n'
//引入页面
import Home from '@pages/Home'; // 首页
import Template from '@pages/Template'; // 模板
import Mine from '@pages/Mine'; // 我的
import P1 from '@pages/P1/index'; // 子页面一
import P2 from '@pages/P2/index'; // 子页面二
import P3 from '@pages/P3/index'; // 子页面三
import P4 from '@pages/P4/index'; // 子页面四

// 全局路由
export const PageRouter = {
    P1, P2, P3, P4
}

// 底部导航基础参数
export const BottomTab = [
    {
        routeName: 'Home',
        title: $L.t('home.title'),
        path: Home,
        style: 'simple',
        icon: require('@images/bottomTabs/Home.png')
    },
    {
        routeName: 'Template',
        title: $L.t('template.title'),
        path: Template,
        style: 'center',
        icon: require('@images/bottomTabs/center.png')
    },
    {
        routeName: 'Mine',
        title: $L.t('mine.title'),
        path: Mine,
        style: 'simple',
        icon: require('@images/bottomTabs/My.png')
    }
]

export default {
    BottomTab,
    PageRouter
}