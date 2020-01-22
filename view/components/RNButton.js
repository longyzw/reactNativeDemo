/**
 * created by yls   2019-10-26
 * 封装的 Button 按钮
 * 传递参数：
 * @title 按钮显示文字（默认为空）
 * @onPress 自定义事件（默认父组件）
 * @disabled 是否禁止点击（默认可点击，禁止点击时传入true）
 * 
 * @style 通用样式
 * -- backgroundColor - 背景色(默认红色)
 * -- color - 字体颜色(默认白色)
 * -- width - 宽(默认270)
 * -- height - 高(默认70)
 * -- borderRadius - 圆角(默认35)
 * -- fontSize - 字体大小(默认32)
 * -- 其余样式直接继承
 * 
 * >>> -- 引用方式
 * >> import Button from "当前组件路径"
 * > <Button title='按钮显示文字' style={{ width: 宽, height: 高, borderRadius: 圆角, fontSize: 字体, marginBottom: 自定义style }} onPress={父组件的事件} />
 */


import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { wh, fz } from '@Com/ScreenUtil'

export default class RNButton extends Component {
    state = {
        status: 1
    };
    onPress = () => {
        const { onPress } = this.props;
        onPress ? onPress() : "";
    };
    render() {
        let { title, style, disabled } = this.props;
        style = style ? style : {}
        if (style.constructor === Array) {
            let obj = {}
            style.forEach(item => {
                obj = { ...obj, ...item }
            })
            style = obj
        }
        const styles = StyleSheet.create({
            button: {
                ...style,
                width: style.width ? style.width : wh(270),
                height: style.height ? style.height : wh(70),
                borderRadius: style.borderRadius ? style.borderRadius : wh(35),
                backgroundColor: style.backgroundColor ? style.backgroundColor : '#A70B00',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            },
            textButton: {
                fontSize: style.fontSize ? style.fontSize : fz(32),
                color: style.color ? style.color : '#FFFFFF',
                textAlign: 'center'
            }
        });
        return (
            <TouchableOpacity
                disabled={disabled ? true : false}
                activeOpacity={0.75}
                style={[styles.button, disabled ? { backgroundColor: '#DCDCDC' } : null]}
                onPress={this.onPress}>
                <View>
                    <Text style={[styles.textButton, disabled ? { color: '#939292' } : null]}>{title ? title : ""}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}