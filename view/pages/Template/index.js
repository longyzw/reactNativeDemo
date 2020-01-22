import React from 'react';
import { Text, ScrollView, View } from 'react-native'
import { RNStatusBar } from '@components/components'

const L = (...val) => $L.I(`template.index.${val[0]}`, val[1] || '')

export default class Mine extends React.Component {
    render() {
        return (
            <ScrollView>
                <RNStatusBar barStyle='default' showHead={false} />
                <Text onPress={() => this.props.navigation.navigate('P1')}>{L('title')}</Text>
            </ScrollView>
        )
    }
}