import React from 'react';
import { View, Text } from 'react-native'
const { RNStatusBar } = require('@components/components')
import styles from '@style/Mine'

const L = val => $L.t(val)

export default class Settings extends React.Component {
    render() {
        return (
            <View>
                <RNStatusBar props={this.props} title={$L.t('mine.settings.title')} />
            </View>
        )
    }
}