#### vue-router 4.0.0 源码调试 demo项目。
> 在架构克第28周内容加餐部分，主要讲解的内容为：前端路由模式原理和 vue-router 源码讲解.
> 
> 主要解决的问题有：
> vue-router常见问题：
> + history和hash模式的区别是什么（涉及vue-router路由模式和前端发布原理）   
> + Vue dev模式下为什么不需要配置history fallback(涉及webpack-dev-server配置) 
> + 我们没有定义router-link和router-view，为什么代码里能直接使用(涉及vue-router初始化流程和Vue插件)
> + 浏览器如何实现URL变化但页面不刷新(涉及vue-router history模式核心实现原理)
> + vue-router如何实现路由匹配(涉及 vue-router Matcher 实现原理)
> + router-view如何实现组件动态渲染？(涉及Vue动态组件)
> 
> 此代码为测试代码，文档版整理至语雀。


#### Plugin Demo
> 该项目还添加了有关Plugin的demo，新建了test文件夹，并在main.js中调用了 app.user(TestPlugin)