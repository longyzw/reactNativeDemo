import I18n, { getLanguages } from 'react-native-i18n'
import en from './locales/en'
import zh from './locales/zh'

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    en,
    zh
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
global.$L = I18n
export default I18n