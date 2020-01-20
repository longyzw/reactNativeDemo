import React from 'react';
import { View, Text } from 'react-native'
const { RNStatusBar } = require('@components/components')

export default class P4 extends React.Component {
    render() {
        const rightButton = (
            <Text onPress={() => console.log('----')}>haha</Text>
        )
        return (
            <View>
                <RNStatusBar backgroundColor='green' barStyle='default' leftStyle={{backgroundColor:'red'}} rightButton={rightButton} />
                <Text>子页面二</Text>
            </View>
        )
    }
}