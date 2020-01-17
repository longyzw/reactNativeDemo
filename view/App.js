import React from 'react';
import { I18n } from '@i18n/i18n'
import AppNavigator from './config/router/index'; //路由配置文件

console.log(I18n);
React.$L = I18n

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
