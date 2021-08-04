import Test  from "./Test";

export default {
    install(app) {
        app.component('TestComponent',Test),
        app.provide('testInfo',{
            a:1,
            b:2
        })
    }
}