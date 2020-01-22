import React from 'react';
import { ScrollView, View, Text } from 'react-native'
const { RNStatusBar, ItemList } = require('@components/components')
import styles from '@style/Mine'

export default class Mine extends React.Component {
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
    }

    set() {
        console.log('-----')
    }

    logout = () => {
        console.log("登出")
    }

    render() {
        const { time } = this.state
        return (
            <View>
                <RNStatusBar showHead={false} />
                <ScrollView  style={[styles.tabBarBg, styles.background]}>
                    <View style={styles.personal}>
                        <Text onPress={() => this.props.navigation.navigate('Login')}>登录{time}</Text>
                    </View>
                    <View style={styles.themeList}>
                        <ItemList title={$L.t('mine.settings.title')} onPress={() => this.props.navigation.navigate('Settings')} />
                        <ItemList title="@_@。。" />
                        <ItemList title="(^_^)" />
                        <ItemList title="/v_v\" borderStyle={false} />
                    </View>
                    <View style={styles.themeList}>
                        <ItemList title="@_@。。" />
                        <ItemList title="(^_^)" />
                        <ItemList title="/v_v\" borderStyle={false} />
                    </View>
                    <Text onPress={this.logout}>退出</Text>
                </ScrollView>
            </View>
        )
    }
}