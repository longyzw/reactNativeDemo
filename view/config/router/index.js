import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { bottomTabBar } from '@style/moduleStyle'
import I18n from 'react-native-i18n'

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


// 生成底部路由导航
const Main = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarLabel: I18n.t('home.title'),
                tabBarIcon: ({ focused, tintColor }) => <Image style={[ bottomTabBar.simple, {tintColor: tintColor }]} source={require('@images/bottomTabs/Home.png')} />
            }),

        },
        Template: {
            screen: Template,
            navigationOptions: () => ({
                tabBarLabel: I18n.t('template.title'),
                tabBarIcon: ({ focused, tintColor }) => <Image style={[ bottomTabBar.simple, {tintColor: tintColor }]} source={require('@images/bottomTabs/center.png')} />
            }),
        },
        Mine: {
            screen: Mine,
            resetOnBlur: true,
            navigationOptions: () => ({
                tabBarLabel: I18n.t('mine.title'),
                tabBarIcon: ({ focused, tintColor }) => <Image style={[ bottomTabBar.simple, {tintColor: tintColor }]} source={require('@images/bottomTabs/My.png')} />
            }),
        }
    },
    {
        tabBarOptions: bottomTabBar.tabBarOptions
    }
)

// 生成全部路由导航
const AppNavigator = createAppContainer(createStackNavigator(
    {
        Main: { screen: Main },
        /* ------------------------------登录/注册------------------------------ */
        Login: { screen: Login },
        /* ------------------------------个人中心模块------------------------------ */
        Settings: { screen: Settings },
    },
    {
        mode: 'card',
        headerMode: 'none',
    }))



export default class MainPage extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}
