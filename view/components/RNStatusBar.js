// 处理状态栏渲染
/**
 * @Descripttion: 设置状态栏和导航
 * @param {
    * * * backgroundColor, 状态栏背景颜色（任何颜色值）
    * * * barStyle, 状态栏文本的颜色（'default', 'light-content', 'dark-content'）
    * * * hidden, 是否隐藏状态栏（true / false）
    * * * showHead, 是否显示导航头（false / 不传）
    * * * leftButton, 导航栏左侧（图片路径 / false / 不传）
    * * * rightButton, 导航栏右侧侧（组件）
    * } 
* @return: 
* @Author: longyzw
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, Image, DeviceEventEmitter, TouchableOpacity } from 'react-native';
import { wh, fz, deviceWidth, StatusBarHeight } from '@Com/ScreenUtil'

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;

export default class RNStatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: this.props.backgroundColor || '',
            barStyle: this.props.barStyle || 'default',
            hidden: this.props.hidden || false,
            showHead: this.props.showHead === false ? false : true,
            leftButton: this.props.leftButton === false ? false : (this.props.leftButton ? this.props.leftButton : require('@images/common/leftBack.png'))
        }
    }

    renderButton(leftButton){
        return (
            leftButton !== false ? <TouchableOpacity onPress={() => this.doPress()}>
                <Image source={leftButton} style={[styles.myImage, this.props.leftStyle]}/>
            </TouchableOpacity> : <Text></Text>
        )
    }

    // 执行事件
    doPress = () => {
        console.log('=-==',this.props.navigation )
        // this.props.navigation.goBack()
    }

    render() {
        const { backgroundColor, barStyle, hidden, leftButton, showHead } = this.state
        //如果有给出titleView的值就用这个值，反之就使用title的值为标题
        let titleView = this.props.titleView ? this.props.titleView : <Text>{this.props.title}</Text>
        let content = <View style={styles.navBar}>
            {/* {this.props.leftButton} */}
            {this.renderButton(leftButton)}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton ? this.props.rightButton : <Text>==</Text>}
        </View>

        return (<View>
            <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} hidden={hidden} />
            {
                showHead ? content: null
            }
        </View>)
    }
}

const styles = StyleSheet.create({
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'IOS' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row' //组件水平显示
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',//水平
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    myImage:{
        width:22,
        height:22,
        margin:5
    }
})