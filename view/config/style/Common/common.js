// 处理公共样式
/**
 * @Descripttion: 
 * 页面使用：
 * import Common, { commons } from '@style/Common/common'
* @Author: longyzw
*/
import { StyleSheet, Dimensions } from 'react-native';
import { wh, fz, StatusBarHeight } from '@Com/ScreenUtil';
import C from '@style/appColor.json'

// 页面公用参数(零散的配置)
export const commons = {
    paddingHorizontal: wh(25), // 页面内容 padding
    availableHeight: Dimensions.get('window').height - StatusBarHeight(), // 页面可用高度，除去状态栏高度
    flexRowBetweenCenter: { // 水平方向两端对齐
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}
// 页面全局样式（公用的配置，如页面高度）
export default StyleSheet.create({
    tabBarBg: {
        height: commons.availableHeight - wh(100),
        backgroundColor: C.color1,
        overflow: 'scroll'
    },
    pageBg: {
        height: commons.availableHeight,
        backgroundColor: C.color1,
        overflow: 'scroll'
    }
})
