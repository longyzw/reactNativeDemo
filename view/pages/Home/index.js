import React from 'react';
import { Text, ScrollView, View } from 'react-native'
import { RNStatusBar } from '@components/components'

const L = (...val) => $L.I(`home.index.${val[0]}`, val[1] || '')

export default class Home extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            time: Date.now()
        }
    }
    
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            this.setState({
                time: Date.now()
            })
        })
        // 进入页面立即刷新，解决底部导航渲染时语言先读取本机完成渲染再读到到异步本地语言不再渲染问题
        setTimeout(() => {
            this.props.navigation.navigate('Home', { name: '??' })
        }, 0)
    }

    render() {
        return (
        <ScrollView>
            <RNStatusBar barStyle='default' showHead={false} />
            <Text onPress={() => this.props.navigation.navigate('P1')}>{L('title')}</Text>
        </ScrollView>
        )
    }
}