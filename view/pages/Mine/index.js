import React from 'react';
import { ScrollView, View, Text, DeviceEventEmitter, Image } from 'react-native'
import { RNStatusBar, ItemList, RNButton } from '@components/components'
import styles from '@style/Mine'

export default class Mine extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            time: '---00'
        }
    }
    
    componentDidMount() {
        console.log($L.locale)
        DeviceEventEmitter.addListener('Mine', (a) => {
            this.Refresh();
        })
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            this.setState({
                time: Date.now()
            })
        })
    }

    Refresh = () => {
        this.setState({
            time: Date.now()
        })
    }

    logout = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View>
                <RNStatusBar showHead={false} />
                <ScrollView style={[styles.tabBarBg, styles.background]}>
                    <View style={styles.personal}>
                        <Image source={require('@images/common/logo.jpg')} style={styles.personalHeadImg} />
                        <Text onPress={() => this.props.navigation.navigate('Login')}>{$L.I('loginFirst')}</Text>
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
                    <RNButton title={$L.t('logout')} onPress={this.logout} style={styles.logout} />
                </ScrollView>
            </View>
        )
    }
}