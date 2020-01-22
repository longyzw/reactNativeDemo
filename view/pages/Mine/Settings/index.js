import React from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native'
import I18n from 'react-native-i18n'
import { saveData } from '@Com/storage'
import { RNStatusBar } from '@components/components'
import styles from '@style/Mine'

const L = val => $L.t(val)

export default class Settings extends React.Component {
    setLanguage = lang => {
        I18n.locale = lang
        $L.locale = lang
        saveData('language', lang, (res) => {
            DeviceEventEmitter.emit('Mine')
            this.props.navigation.navigate('Mine', { name: '??' })
        })
    }
    render() {
        return (
            <View>
                <RNStatusBar title={L('mine.settings.title')} />
                <Text style={{lineHeight: 60}} onPress={() => this.setLanguage('zh')}>设置中文</Text>
                <Text style={{lineHeight: 60}} onPress={() => this.setLanguage('en')}>设置英文</Text>
            </View>
        )
    }
}