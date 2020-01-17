import React from "react"
import { Image } from 'react-native';
import { bottomTabBar } from '@style/moduleStyle'
import { BottomTab, PageRouter } from './routers'
const { tabBarOptions } = bottomTabBar

// 底部导航项
const BottomTabNavigator = getBottomTab(BottomTab)

// 单个页面路由
const PageRoute = getPageRouter(PageRouter)

// 底部导航参数配置
const BottomTabOptions = { tabBarOptions }

// 渲染icon
/**
 * @Descripttion: 返回icon图标渲染
 * @param {
 * * icon 图标资源路径
 * * tabIcon 普通图标样式
 * * centerIcon 中间大图标样式
 * } 
 * @return: 
 * @Author: longyzw
 */
class ImageView extends React.Component {
    render() {
        return (
            <Image style={[bottomTabBar[this.props.style], { tintColor: this.props.tintColor }]} source={this.props.icon} />
        )
    }
}

// 处理底部导航渲染
/**
 * @Descripttion: 传入底部导航必要参数
 * @param {
 * * * routeName, 路由名称
 * * * path, 路由路径
 * * * title, 底部展示标题
 * * * icon, 底部导航图标
 * } 
 * @return: 
 * @Author: longyzw
 */
function getBottomTab(BottomTab) {
    let BottomTabObj = {}
    // 遍历生成底部导航
    BottomTab.forEach(item => {
        BottomTabObj[item.routeName] = {
            screen: item.path,
            navigationOptions: () => ({
                tabBarLabel: item.title || ' ',
                tabBarIcon: ({ focused, tintColor }) => <ImageView tintColor={tintColor} icon={item.icon} style={item.style} />,
            }),
        }
    })
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