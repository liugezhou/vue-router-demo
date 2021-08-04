<template>
  <div>{{data}}</div>
</template>

<script>
import { inject,provide } from 'vue'
export default {
    setup(){
          // eslint-disable-next-line no-debugger
          debugger
        provide('testInfo',{
            c:3,d:4
        })
        const data = inject('testInfo')
        console.log(data)
        return {
            data
        }
    }
}
</script>

<style>

</style>