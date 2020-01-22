import I18n from 'react-native-i18n'
import { saveData, getData } from '@Com/storage'
import en from './locales/en'
import zh from './locales/zh'

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    'en': en,
    'en-US': en,
    'zh': zh,
    'zh-CN': zh
};
// 复写 t 方法，支持动态传多个参数
I18n.I = (...val) => {
    let result = I18n.t(val[0])
    if(val.length > 1) {
        Object.keys(val[1]).forEach(item => {
            result = result.replace(`{${item}}`,val[1][item] || `{${item}}`)
        })
    }
    return result
}

getData('language').then(res => {
    console.log('getDate:', res)
    console.log('lang-result:',res)
    if(res) {
        I18n.locale = res
    }else {
        setLanguage()
    }
    global.$L = I18n
    console.log('language-i18n:',I18n.locale)
}).catch(err => {
    console.log('getErr',err)
    setLanguage()
})

const setLanguage = () => {
    let locale = I18n.locale
    if(locale.indexOf('en') > -1) locale = 'en'
    else if(locale.indexOf('zh') > -1) locale = 'zh'
    else locale = 'en'
    saveData('language', locale, (res) => {
        console.log('存储',res)
    })
}
global.$L = I18n

export default I18n