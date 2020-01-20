import React from 'react';
import { Text, ScrollView, StatusBar, View } from 'react-native'
const { RNStatusBar } = require('@components/components')

const L = (...val) => $L.I(`home.index.${val[0]}`, val[1] || '')

export default class Home extends React.Component {
    static navigationOptions = () => {
        return {
            headerTitle: '标题',
            headerRight: (<View style={{ height: 80, width: 80 }}> 1234 </View>),
        };
    };
    render() {
        return (
        <ScrollView>
            <RNStatusBar backgroundColor='blue' barStyle='default' hidden={false} showHead={false} leftButton={require('@images/bottomTabs/Home.png')} />
            <Text onPress={() => this.props.navigation.navigate('P1')}>{L('title', { page: 'ok', num: 'hh' })}</Text>
        </ScrollView>
        )
    }
}