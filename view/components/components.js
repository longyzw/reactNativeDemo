// 处理组件
/**
 * @Descripttion: 组件导入和使用方法
 * 引入对应组件  --> import 组件名 from '对应组件'  （引入）
 * -----------------------------------------------------
 * 页面使用：
 * import { 抛出时命名的组件名1， 抛出时命名的组件名2 } from '@components/components'
 * ----------------------------或----------------------------
 * import components from '@components/components'
 * const { 抛出时命名的组件名1， 抛出时命名的组件名2 } = components
* @Author: longyzw
*/

// 引入对应组件
import RNStatusBarTemp from './RNStatusBar'; // 状态栏组件
import ItemListTemp from './ItemList'; // 列表组件
import RNButtonTemp from './RNButton'; // 列表组件

// 抛出按需加载组件
export const RNStatusBar = RNStatusBarTemp
export const ItemList = ItemListTemp
export const RNButton = RNButtonTemp

// 抛出整体
export default {
    RNStatusBar,
    ItemList,
    RNButton
}
