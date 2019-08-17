<template>
    <div>
         <div class="detail">
                <i class="iconfont icon-forward" @click="handle"></i>
            <div>
				<!-- {{ad_name}}1111 -->
            </div>
        </div>
        <div class="tab">
            <ul>
                <li>
                    综合
                    <i class="iconfont icon-lower-triangle"></i>
                </li>
                <li>
                    分类
                </li>
                <li>
                    筛选
                    <i class="iconfont icon-lower-triangle"></i>
                </li>
                
            </ul>
            
        </div>
        <div class="goods_list">
            <ul>
                <router-link  v-for="(item,index) in goodsList" :key="index" to="/detailpage" tag="li">
                    <div>
                        <img :src="item.big_thumb">
                    </div>
                    <div>
                        <div class="ms">
                            <p>{{item.brand_enname}}</p>
                            <p>{{item.brand_cnname}}</p>
                            <p>
                                <i>￥{{item.promote_price}}</i>
                                <em>￥{{item.market_price}}</em>
                               
                            </p>
                        </div>
                    </div>
                </router-link>
                
                
            </ul>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
import { constants } from 'crypto';
/* import {aa,bb} from "api/home" */

export default {
    name:"Detail",
  /*   props:["ad_id","ad_name"], */
    methods:{
        handle(){
            this.$router.go(-1) 
        }
    },
    data(){
        return{
            goodsList:[],
           
        }
    },
    /* async */
    created(){
       
    //    axios.get("https://apim.restful.5lux.com.cn/good/brand_detail/?id=12&cata_id=0")
    //    .then((data)=>{
    //        this.goodsList = data.data.data.goods_list
    //        console.log(data.data.data.goods_list)
    //    })

    //    axios.get("https://apim.restful.5lux.com.cn/good/brand_detail")
    //    .then((data)=>{
    //     //    this.goodsList = data.data.data.goods_list
    //        console.log(data)
    //    })
       /*  let data = await aa() */
        //console.log(data)
       /*  let datab = await bb()
        console.log(datab.data[1].ad_link)
         */
        
    },
    mounted() {
     
   
      this.goodsList = this.$route.params.daL.data.data.goods_list
         console.log( this.goodsList)
},
   /*  data(){
        return{
            listb:[]
        }
    } */
}
</script>
<style>
.detail{
    width: 100%;
    height: 0.44rem;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 2;
    border-bottom: 1px solid #f5f5f5;
}
.detail>i{
    display: inline;
    width: 20%;
    height: 0.44rem;
    float: left;
    font-size: 24px;
    color: #ccc;
    line-height: 0.44rem;
    padding-left: 0.15rem;
}

.detail>div:nth-child(2){
    display: inline;
    width: 80%;
    height: 0.44rem;
    float: right;
     line-height: 0.44rem;
    font-weight: 400;
    font-size: 16px;
    color: #000
   
}
.tab{
    width: 100%;
    height: 0.39rem;
    background: #fff;
    margin-top: 0.44rem;
    position: fixed;
    z-index: 2;
}
.tab ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;

}
.tab ul>li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 0.39rem;
    margin:0 0.35rem 0 0.355rem;
}

.goods_list{
    /* margin-top: 0.83rem; */
    padding-top: 0.83rem;
    background: #f3f3f3;
    padding-bottom: 0.5rem;
   
    
}
.goods_list ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.goods_list ul li{
    float: left;
    width: 49.8%;
    /* border-bottom: 1px solid #ccc; */
    margin-bottom: 0.01rem;
    height: 2.87rem;
    background: #fff;
}
.goods_list ul li div:nth-child(1){
    width: 1.86rem;
    height: 1.86rem;
    /* display: inline-block;
    vertical-align: middle */
    position: relative;
}
.goods_list ul li div:nth-child(1) img{
    width: 1.46rem;
    height: 1.46rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.goods_list ul li div:nth-child(2){
    width: 1.86rem;
    height: 1.01rem;
    position: relative;

}
.goods_list ul li div:nth-child(2) .ms{
    width: 1.57rem;
    height: 0.6rem;
     position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.goods_list ul li div:nth-child(2) .ms p:nth-child(1){
    font-size: 13px;
    color: #333;
    padding-bottom: 6px;
    text-align: center
}

.goods_list ul li div:nth-child(2) .ms p:nth-child(2){
    font-size: 12px;
    color: #999;
    padding-bottom: 8px;
    text-align: center
}
.goods_list ul li div:nth-child(2) .ms p:nth-child(3){
    font-size: 12px;
    width: 1.57rem;
    height: 0.12rem;
    /* background: #000;
    color: #9b885f; */
    text-align: center;
}
.goods_list ul li div:nth-child(2) .ms p:nth-child(3) i{
    font-size: 12px;
    color: #9b885f;
}
.goods_list ul li div:nth-child(2) .ms p:nth-child(3) em{
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
}
  
</style>
