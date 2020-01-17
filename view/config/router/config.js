import React from "react"
import { Image } from 'react-native';
import ROUTERS from './routers'
const {
    BottomTab,
    PageRouter
} = ROUTERS

// 底部导航项
const BottomTabNavigator = getBottomTab(BottomTab)

// 单个页面路由
const PageRoute = getPageRouter(PageRouter)

// 底部导航参数配置
const BottomTabOptions = {
    tabBarOptions: {
        activeFeaturedTintColor: '#FFFFFF',
        inactiveFeatureTintColor: '#FFFFFF',
        showLabel: true,
        activeTintColor: '#b31f15',
        inactiveTintColor: '#cdcdcd',
        style: {
            height: 50,
            backgroundColor: '#FFFFFF',
            borderTopWidth: 1,
            borderTopColor: '#F2F3EF'
        },
    },
}

// 渲染icon
class ImageView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Image style={{ width: 20, height: 20, tintColor: this.props.tintColor }} source={this.props.icon} />
        )
    }
}

// 处理底部导航渲染
function getBottomTab(BottomTab) {
    let BottomTabObj = {}
    // 遍历生成底部导航
    BottomTab.forEach(item => {
        BottomTabObj[item.routeName] = {
            screen: item.path,
            navigationOptions: () => ({
                tabBarLabel: item.title || ' ',
                tabBarIcon: ({ focused, tintColor }) => <ImageView tintColor={tintColor} icon={item.icon} />,
            }),
        }
    })
    console.log(BottomTabObj);
    return BottomTabObj
}

// 处理单个页面路由渲染
function getPageRouter(PageRouter) {
    let PageRouterObj = {}
    Object.keys(PageRouter).forEach(item => {
        PageRouterObj[item] = { screen: PageRouter[item] }
    })
    return PageRouterObj
}

export default {
    BottomTabNavigator,
    BottomTabOptions,
    PageRoute
}