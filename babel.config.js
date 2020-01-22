/**
 * @Descripttion: 多路径映射
 * @param {
 * * rootPathSuffix 指定路径
 * * rootPathPrefix 映射名称
 * } 
 * @Author: longyzw
 * @return: ------------已配置-------------
 * 1、@images      (图片目录别名)
 * 2、@pages       (页面目录别名)
 * 3、@style       (样式目录别名)
 * 4、@i18n        (国际化目录别名)
 * 5、@api         (接口管理别名)
 * 6、@Com         (方法库目录别名)
 * 7、@components  (组件库目录别名)
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathSuffix": "./view/resource/images",
            "rootPathPrefix": "@images"
          },
          {
            "rootPathSuffix": "./view/pages",
            "rootPathPrefix": "@pages"
          },
          {
            "rootPathSuffix": "./view/config/style",
            "rootPathPrefix": "@style"
          },
          {
            "rootPathSuffix": "./view/config/i18n",
            "rootPathPrefix": "@i18n"
          },
          {
            "rootPathSuffix": "./view/config/fetch",
            "rootPathPrefix": "@api"
          },
          {
            "rootPathSuffix": "./view/config/methods",
            "rootPathPrefix": "@Com"
          },
          {
            "rootPathSuffix": "./view/components",
            "rootPathPrefix": "@components"
          },
        ]
      }
      
    ]
  ]
};