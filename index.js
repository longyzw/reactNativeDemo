import {AppRegistry} from 'react-native';
import { name as appName } from './app.json';
import App from './view/App'; // 开发入口

AppRegistry.registerComponent(appName, () => App );