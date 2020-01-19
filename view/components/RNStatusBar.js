import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, DeviceEventEmitter, TouchableOpacity } from 'react-native';
import { wh, fz, deviceWidth, StatusBarHeight } from '@Com/ScreenUtil'

export default class RNStatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('key', this.props.Refresh)
    }
    componentWillUnmount() {
        this.subscription.remove();

    }
    render() {
        const background_C = this.props.backgroundColor || "transparent"
        let content = <View style={this.props.showLeftButton ? { marginTop: wh(70), marginLeft: wh(73) } : null}>
            <StatusBar
                animated={true}
                hidden={this.props.hidden}
                backgroundColor={background_C}
                translucent={true}
                barStyle={this.props.barStyle}
                showHideTransition={'fade'}
                networkActivityIndicatorVisible={true} />
            <View style={{ height: wh(20), paddingTop: wh(5) }} />
            {this.props.showLeftButton ?
                <View>
                    <TouchableOpacity
                        style={{
                            height: wh(40), width: wh(40), flexDirection: 'row',
                            alignItems: 'center'
                        }} onPress={this.props.onLeftClick}>
                        <Image
                            resizeMode='contain'
                            source={require('../images/wowoo/leftArrow.png')}
                            style={[this.props.ArrowStyle, this.props.colorStyle ? { width: wh(43), height: wh(28), tintColor: '#ffffff' } : { width: wh(43), height: wh(28), tintColor: '#000000' }]} />
                    </TouchableOpacity>
                </View>
                :
                null
            }
            <View style={{ marginTop: wh(20), flexDirection: 'row', justifyContent: 'space-between', width: deviceWidth, alignItems: 'center' }}>
                {
                    this.props.txtShow ?
                        <Text style={this.props.colorStyle ? { color: '#fff', fontSize: fz(40) } : { color: '#000', fontSize: fz(40) }}>{this.props.title}</Text>
                        :
                        null
                }

                {this.props.showRightButton ?
                    <Text onPress={this.props.onRightClick} style={{ fontSize: fz(26), color: '#4082ff', marginRight: wh(30) }}>
                        {this.props.rightText}
                    </Text>
                    :
                    null
                }
            </View>
        </View>
        return (<View>
            {content}
        </View>)
    }
}
