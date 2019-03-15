<template>
    <div class="content">
        <Swiper :swiper="swiperdata"></Swiper>
        <div class="Redemption">
            <div class="navbarTopMain">
                <div>
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                </div>
                <div class="exchangeList">
                    <div class="exchangeList_wrap clearfix">
                        <ul class="exchangeList_left clearfix">
                            <li v-for="i in exchangeList.detail.slice(0,4)">
                                <div class="xpsd">
                                    <img :src="i.picUrl">
                                    <span>
                                        <b>{{i.price}}</b>
                                    </span>
                                    <p>{{i.title}}</p>
                                    <a :href="i.link">
                                        <button type="button">{{i.btn}}</button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <ul class="exchangeList_right">
                            <li v-for="i in exchangeList_r.detail.slice(0,2)">
                                <a :href='i.link'>
                                    <img :src='i.picUrl'>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {sendAjax_no,sendAjax} from '@/assets/js/public.js'
// import Swiper from '@/assets/js/swiper.js'
import Swiper from '@/template/Swiper/swiper'//轮播组件
// import '@/assets/js/content.js'
export default {
    name: 'Content',
    data () {
        return {
            swiperdata:[],
            tokenId:localStorage.setItem('tokenId','1'),
            gettokenid:localStorage.getItem('tokenId'),
            href:'',
            exchangeList:{
                detail:[]
            },
            exchangeList_r:{
                detail:[]
            },
            RotList:{
                detail:[],
                RotList_r:[]
            },
        }
    },
    components:{
        Swiper
    },
    mounted:function() { 
        //首页数据加载
        // this.login()
    }, 
    methods:{
        login(){
            let params={'tocken':this.gettokenid,'type':'3'}
            this.$http.post_request('/app/plat/login',params).then(res=>{
                if(res.code==0){
                    if(res.data.token){
                        if(res.data.id){
                            localStorage.setItem('usr_id',res.data.id);//data返回用户信息,id
                        }else{
                            localStorage.setItem('usr_id','');//data返回用户信息,id
                        }
                        if(res.data.token){
                            localStorage.setItem('usr_tocken',res.data.token);//data返回用户信息,token
                        }else{
                            localStorage.setItem('usr_tocken','');//data返回用户信息,token
                        }
                        if(res.data.headUrl){
                            localStorage.setItem('headUrl',res.data.headUrl);//用户头像
                        }else{
                            localStorage.setItem('headUrl','');//用户头像
                        }
                        if(res.data.nickName){
                            localStorage.setItem('nickName',res.data.nickName);//用户名
                        }else{
                            localStorage.setItem('nickName','');//用户名
                        }
                        if(res.data.userName){
                            localStorage.setItem('userName',res.data.userName);//扶贫商
                        }else{
                            localStorage.setItem('userName','');//扶贫商
                        }
                    }else{
                        location.href = '/404';
                    }
                    this.integral();
                    this.getdatalist();
                }
            })
        },
        integral(){
            let params={type:'3'}
            this.$http.post_request('/app/donate/syncUserIntegral',params,this.GLOBAL.headers).then(data=>{
                if(data.code==0){
                    if(data.data){
                        localStorage.setItem('Integral',data.data);//data返回用户信息,integral
                        $('.navbarBot_topright_jf a').html("我的积分："+data.data);
                    }else{
                        $('.navbarBot_topright_jf a').html("登陆查看积分");
                    }
                }else{
                    $('.navbarBot_topright_jf a').html("登陆查看积分");
                }
            })
        },
        getdatalist(){
            let _this=this;
            this.$http.post_request('/web/queryModuleList').then(res=>{
                if(res.code==0&&res.data){
                    this.$nextTick(() => {
                        if(res.data[0]){
                            let datalist=res.data[0].detail;
                            _this.swiperdata=datalist;
                            for(let i in datalist){
                                this.link(datalist[i].link,datalist[i].moduleType,datalist[i].typeId,datalist[i].id);
                                this.$set(_this.swiperdata[i],'link',this.href);
                            }
                        }
                        if(res.data[2]){
                            let datalist=res.data[2].detail;
                            _this.exchangeList=res.data[2];
                            console.log(_this.exchangeList,_this.exchangeList.detail)
                            for(let i in datalist){
                                this.link(datalist[i].link,datalist[i].moduleType,datalist[i].typeId,datalist[i].id);
                                this.$set(_this.exchangeList.detail[i],'link',this.href);
                                this.$set(_this.exchangeList.detail[i],'btn','立即兑换');
                            }
                        }
                        if(res.data[3]){
                            let datalist=res.data[3].detail;
                            _this.RotList=res.data[3];
                            console.log(_this.RotList,_this.RotList.detail)
                            for(let i in datalist){
                                this.link(datalist[i].link,datalist[i].moduleType,datalist[i].typeId,datalist[i].id);
                                this.$set(_this.RotList.detail[i],'link',this.href);
                                this.$set(_this.RotList.detail[i],'btn','立即兑换');
                            }
                        }
                    });
                }
            })
        },
        link(a,b,c,d){
            // res.data[0].detail[i].link ->a
            // res.data[0].detail[i].moduleType ->b
            // res.data[0].detail[i].typeId ->c
            // res.data[0].detail[i].id ->d
            if(a){
                this.href=a;
            }else{
                if(b=='1'){
                    this.href='/shooplist/product?typeId='+c+'&tocken='+this.gettokenid;
                }else if(b=='2'){
                    this.href='/lotto/lottodetails?activityId='+d+'&tocken='+this.gettokenid;
                }else if(b=='3'){
                    this.href='/donate/donatedetails?typeId='+d+'&tocken='+this.gettokenid;
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/css/content.css'
</style>
