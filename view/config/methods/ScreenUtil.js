import { Dimensions, Platform, StatusBar } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
export const fontScale = Dimensions.get('window').fontScale;    //设备的高度

const defaultPixel = 2;                           //iphone6的像素密度
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(deviceWidth < deviceHeight ? (deviceWidth / w2) : (deviceHeight / h2));   //获取缩放比例

// 像素适配
export function wh(size: number) {
    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
}
// 字体适配
export function fz(size: number) {
    size = Math.round((size * scale + 0.5) / fontScale);
    return size / defaultPixel;
}

export const DEFAULT_DENSITY = 2;
const defaultWidth = 375;

export function isIphoneX() {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    return Platform.OS == 'ios' && (deviceHeight == X_HEIGHT && defaultWidth == X_WIDTH);
}

export const StatusBarHeight = () => {
    if (Platform.OS == 'android') return StatusBar.currentHeight;
    if (isIphoneX()) return 44
    return 20
}