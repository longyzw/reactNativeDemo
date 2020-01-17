//引入页面
import P1 from '@pages/P1/index'; // 首页
import P2 from '@pages/P2/index'; // 行情
import P3 from '@pages/P3/index'; // 子页面一
import P4 from '@pages/P4/index'; // 子页面二

// 全局路由
export const PageRouter = {
    P3, P4
}

// 底部导航基础参数
export const BottomTab = [
    {
        routeName: 'P1',
        title: 'aa',
        path: P1,
        style: 'simple',
        icon: require('@images/bottomTabs/Home.png')
    },
    {
        routeName: 'P2',
        path: P2,
        style: 'center',
        icon: require('@images/bottomTabs/My.png')
    },
    {
        routeName: 'P3',
        title: 'cc',
        path: P3,
        style: 'simple',
        icon: require('@images/bottomTabs/My.png')
    }
]

export default {
    BottomTab,
    PageRouter
}