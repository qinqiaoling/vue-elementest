<template>
    <div id="app" class="app">
        <router-view></router-view>
    </div>
</template>

<script>
//./这是相对路径的意思。
// @/这是webpack设置的路径别名。一般代表src文件夹路径
export default {
    name: 'App',
    data () {
        return {
            
        }
    },
    components:{
        
    },
    mounted:function() { 
        
    }, 
    methods:{
        
    },
    watch:{
        $route(to, from) {
            //监听路由变化
            // to , from 分别表示从哪跳转到哪，都是一个对象
            // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
            if(to.path){
            }
            console.log(to);
            console.log(from);
        }
    }
}
</script>

<style type="text/css" lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
