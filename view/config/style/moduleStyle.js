import C from './appColor.json'

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
            height: 50,
            backgroundColor: C.color1,
            borderTopWidth: 1,
            borderTopColor: C.color3
        }
    },
    simple: {
        width: 20,
        height: 20
    },
    center: {
        width: 30,
        height: 30,
        marginTop: -30
    }
}