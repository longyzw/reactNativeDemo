// list 组件
/**
 * @Descripttion: 列表组件
 * @param {
    * * title 标题
    * * borderStyle 下划线样式（ style / false）
    * } 
* @return: 
* @Author: longyzw
*/

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { wh, fz } from '@Com/ScreenUtil'


export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderStyle: this.props.borderStyle,
            rightStyle: this.props.rightStyle,
            title: this.props.title || ''
        }
    }

    componentWillReceiveProps(nextProps,nextContext) {
        if(nextProps.title !== this.state.title) {
            this.setState({
                title: this.props.title || ''
            })
        }
    }


    render() {
        let { borderStyle, rightStyle, title } = this.state
        let border = borderStyle === false ? '' : [styles.borderStyle, borderStyle]
        let right = rightStyle === false ? '' : [styles.rightIcon, rightStyle]
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => ((this.props).hasOwnProperty('onPress')) ? this.props.onPress() : ''} style={[styles.itemBox, ...border]}>
                <Text>{title}</Text>
                <Text style={[styles.rightIcon, ...right]}>&#62;</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    itemBox: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row', //组件水平显示
        height: wh(100)
    },
    borderStyle: {
        borderBottomWidth: wh(2),
        borderBottomColor: '#e2e2e2'
    },
    rightIcon: {
        transform: [{scaleY: 1.8}, {scaleX: 1.2}],
        color: '#999'
    }
})