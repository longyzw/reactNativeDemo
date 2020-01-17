import AsyncStorage from '@react-native-community/async-storage';

/**
 * 数据持久化类
 */
/**
 * 保存本地数据
 * @param key key
 * @param items value
 * @param callback  回调函数
 */
export const saveLocalRepository = (key, items, callback) => {
    if (!items || !key) return;
    AsyncStorage.setItem(key, JSON.stringify(items), callback);
}

/**
 * 获取本地的数据
 * @param key
 * @returns {Promise}
 */
export const fetchLocalRepository = key => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key, (error, result) => {
            if (!error) {
                try {
                    resolve(JSON.parse(result));
                } catch (e) {
                    reject(e);
                }
            } else {
                reject(error);
            }
        })
    })
}

/**
 * 移除本地存存的key
 * @param key
 * @returns {*}
 */
export const removeLocalRepository = (key, callback) => {
    if (!key) return;
    AsyncStorage.removeItem(key, callback);
}

/**
 * 移除本地存存的keys
 * @param keys
 * @returns {*}
 */
export const removeMultiLocalRepository = (keys, callback) => {
    if (!keys) return;
    AsyncStorage.multiRemove(keys, callback);
}