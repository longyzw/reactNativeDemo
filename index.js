import {AppRegistry} from 'react-native';
import { name as appName } from './app.json';
import App from './view/App'; // 开发入口

// 关闭手机上全部黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App );