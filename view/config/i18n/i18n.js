import I18n, { getLanguages } from 'react-native-i18n'
// import DataRepository from '@Com/storage'
import en from './locales/en'
import zh from './locales/zh'

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    en,
    zh
};

// let sysLang = ''

// getLanguages().then(res => {
//     sysLang = res[0]
// })

// new DataRepository().fetchLocalRepository('localLanguage')
//     .then((res) => {
//         if(res){
//             saveLanguage(res)
//         }else{
//             if(sysLang === 'zh-CN') {
//                 saveLanguage('zh')
//             };
//             if(sysLang === 'en-US') {
//                 saveLanguage('en')
//             };
//         }
//     })
//     .catch((error) => {
//         I18n.locale = I18n.defaultLocale
//     });
 
// function saveLanguage(val){
//     I18n.locale = val
//     new DataRepository().saveLocalRepository('localLanguage', val, (res) => {
//         if (res) {
//             console.log("language",res);
//             console.log('���Դ洢ʧ��');
//         }
//     })
// }

export { I18n, getLanguages };