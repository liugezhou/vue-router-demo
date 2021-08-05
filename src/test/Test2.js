import { defineComponent,h } from 'vue'
// import  Home from '../pages/Home';
 const TestComponent2 = defineComponent({
    name:'TestComponent2',
    props:{},
    setup(props, {slots} ){
        return ()=> {
            return h('div',{
                class:'test-component2',
                onClick(){
                    alert('click')
                }
            },slots.default())
        }
        // return () =>{
        //     return h(Home,{
        //         onClick(){
        //             alert('You Clicked the Home Component!')
        //         }
        //     })
        // }
    }
 })

 export default TestComponent2