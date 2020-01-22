import { StyleSheet } from 'react-native';
import { wh, fz } from '@Com/ScreenUtil';
import C from '@style/appColor.json'
import Common, { commons } from '@style/Common/common'

export default StyleSheet.create({
    ...Common,
    background: {
        backgroundColor: C.color3
    },
    personal: {
        flexDirection: 'row',
        alignItems: 'center',
        height: wh(200),
        paddingHorizontal: commons.paddingHorizontal,
        backgroundColor: C.color1
    },
    personalHeadImg: {
        width: wh(120),
        height: wh(120),
        marginRight: wh(40),
    },
    themeList: {
        marginTop: wh(20),
        paddingHorizontal: commons.paddingHorizontal,
        backgroundColor: C.color1
    },
    logout: {
        alignSelf: 'center',
        width: wh(650),
        marginTop: wh(80),
    }
})


