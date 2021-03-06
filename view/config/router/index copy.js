import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomTabNavigator, BottomTabOptions, PageRoute } from './config' // 引入路由配置文件

// 生成底部导航，传入（底部导航路由配置和样式配置）
const Main = createBottomTabNavigator(BottomTabNavigator, BottomTabOptions)
// 生成APP整体路由
const AppNavigator = createAppContainer(createStackNavigator(
    {
        Main: { screen: Main },
        ...PageRoute
    },
    {
        mode: 'card',
        headerMode: 'none',
    }
))

export default AppNavigator