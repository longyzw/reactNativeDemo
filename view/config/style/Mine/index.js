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
        ...commons.flexRowBetweenCenter,
        height: wh(200),
        paddingHorizontal: commons.paddingHorizontal,
        backgroundColor: C.color1
    },
    themeList: {
        marginTop: wh(20),
        paddingHorizontal: commons.paddingHorizontal,
        backgroundColor: C.color1
    }
})


