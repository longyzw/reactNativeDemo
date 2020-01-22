import {AppRegistry} from 'react-native';
import I18n from 'react-native-i18n'
import '@i18n/i18n'
import { getData } from '@Com/storage'
import { name as appName } from './app.json';
import App from './view/App'; // 开发入口

getData('language').then(res => {
    console.log('getDate:', res)
    console.log('lang-result:',res)
    if(res) {
        I18n.locale = res
    }
})

global.$L = I18n

// 关闭手机上全部黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App );