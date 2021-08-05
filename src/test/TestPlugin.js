import Test  from "./Test";
import Test2 from "./Test2"

export default {
    install(app) {
        app.component('TestComponent',Test),
        app.component('TestComponent2',Test2),
        app.provide('testInfo',{
            a:1,
            b:2
        })
    }
}