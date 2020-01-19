import C from './appColor.json'
import { wh, fz } from '@Com/ScreenUtil'

// 底部导航样式配置
export const bottomTabBar = {
    // 底部导航样式
    tabBarOptions: {
        activeFeaturedTintColor: C.color1,
        inactiveFeatureTintColor: C.color1,
        showLabel: true,
        activeTintColor: C.color5,
        inactiveTintColor: C.color4,
        style: {
            height: wh(100),
            backgroundColor: C.color1,
            borderTopWidth: wh(2),
            borderTopColor: C.color3
        }
    },
    simple: {
        width: wh(40),
        height: wh(40)
    },
    center: {
        width: wh(60),
        height: wh(60),
        marginTop: wh(-60)
    }
}