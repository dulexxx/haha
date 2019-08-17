<template>
    <div>
        <div class="hea">
                <i class="iconfont icon-forward" @click="handle"></i>
            <div>
                海外购
            </div>
        </div>
        <div class="con">
            <div class="s">
                <div class="text">
                    <p>MORE BRANDS</p>
                    <p></p>
                    <p>全球潮流品牌</p>
                </div>
                <img src="http://img550.5lux.com.cn/2017/07/07/qr/149940647718_750x320.jpg">  
            </div>

            <div class="kindof">
                <ul>
                    <li v-for="(item,index) in this.list[1].list" :key="index">
                        <img :src="item.ad_code">
                        <p>{{item.ad_name}}</p>
                    </li>
                
                </ul>
            </div>


            <div class="TOP100">
                <div class="text">
                    <p>MORE BRANDS</p>
                    <p></p>
                    <p>全球潮流品牌</p>
                </div>
                <img src="http://img550.5lux.com.cn/2017/07/28/de/150122727058_750x421.jpg">  

                <ul class="good_list_warpper">
                    <li class="goods_list" v-for="(item,index) in this.list[6].list" :key="index">
                        <a>
                            <div class="top">
                                <img :src="item.recommend_pic">
                            </div>
                            <p class="name">{{item.brand_name}}</p>
                            <p class="kind">{{item.sku_title}}</p>
                            <p class="price">￥{{item.market_price}}</p>
                        </a>
                    </li>
                   
                </ul>
            </div>

           <div class="fashion">
                   <span></span>
                   <span>正在流行</span>
                   <span>
                       <img src="../../../public/more.png">
                   </span>
           </div>
           <div class="chaoliu">
               <div class="top">
                   <span></span>
                   <span>正在流行</span>
                   <span>
                       <img src="../../../public/more.png">
                   </span>
               </div>
               <a href="http://m.5lux.com/promote/special/2521">
               <img src="http://img550.5lux.com.cn/2017/07/07/ij/149940786287_750x370.jpg"></a>
           </div>
           
           <div class="remai">
               <div class="top">
                   <span></span>
                   <span>正在流行</span>
                   <span>
                       <img src="../../../public/more.png">
                   </span>
               </div>
               <ul>
                   <router-link to="/detail" tag="li" v-for="(item,index) in this.list[5].list" :key="index">
                       <img :src="item.ad_code">
                   </router-link>
               </ul>
           </div>


        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Sea",
    data(){
        return{
            list:[],
        }
    },
    methods:{
        handle(){
            this.$router.go(-1)
        }
    },
    created(){
        axios.get("https://apim.restful.5lux.com.cn/oversea/home_allinfo")
        .then(data=>data.data)
        .then(data=>{
            this.list = data.data
            // console.log(this.list[1].list)
            // this.list = data.data[1].list
            //  console.log(data.data)
        })
    }
}
</script>
<style>
.hea{
    width: 100%;
    height: 0.44rem;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 2;
}
.hea>i{
    display: inline;
    width: 45%;
    height: 0.44rem;
    float: left;
    font-size: 24px;
    color: #ccc;
    line-height: 0.44rem;
    padding-left: 0.15rem;
}

.hea>div:nth-child(2){
    display: inline;
    width: 55%;
    height: 0.44rem;
    float: right;
     line-height: 0.44rem;
    font-weight: 400;
    font-size: 16px;
    color: #000
   
}
.con{
    padding-bottom: 0.5rem;
}
.con .s{
    width: 100%;
    height: 1.6rem;
    margin-top: 0.44rem;
}
.con .s .text{
    position: relative;
}
.con .s .text p:nth-child(1){
    font-family: \\65B9\6B63\5170\4EAD\5927\9ED1_GBK;
    font-size: 24px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    margin-top: 13.065%;
    text-shadow: 0 0 5px #000;
}
.con .s .text p:nth-child(2){
        position: absolute;
    display: flex;
    width: 10%;
    margin: 0 45%;
    border-top: 2px solid #fff;
    background: #fff;
    margin-top: 21.86%;
}
.con .s .text p:nth-child(3){
     margin-top: 24.5%;
    font-family: \\65B9\6B63\5170\4EAD\5927\9ED1_GBK;
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    text-shadow: 0 0 5px #000;
}
   
.con .s>img{
    width: 100%;
    height: 1.7rem;
}
.con .kindof{
    margin-bottom: 10px;
    
}
.con .kindof ul{
    width: 100%;
    height: 2.22rem;
    background: #ccc;
    overflow: hidden;
}
.con .kindof ul li{
    width: 25%;
    padding: 10px 6.5px;
    float: left;
    background: #fff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-left: none;
    border-top: none
}
.con .kindof ul li img{
    width: 0.7475rem;
    height: 0.7475rem;
    vertical-align: top;

}
.con .kindof ul p{
    font-size: 16px;
    vertical-align: baseline;
    color: #7e8c8d;
    text-align: center;
}


.con .TOP100{
    width: 100%;
    /* height: 2.1rem; */
    margin-bottom: 0.1rem;
}
.con .TOP100 .text{
    position: relative;
}
.con .TOP100 .text p:nth-child(1){
    font-family: \\65B9\6B63\5170\4EAD\5927\9ED1_GBK;
    font-size: 24px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    margin-top: 13.065%;
    text-shadow: 0 0 5px #000;
}
.con .TOP100 .text p:nth-child(2){
        position: absolute;
    display: flex;
    width: 10%;
    margin: 0 45%;
    border-top: 2px solid #fff;
    background: #fff;
    margin-top: 21.86%;
}
.con .TOP100 .text p:nth-child(3){
     margin-top: 24.5%;
    font-family: \\65B9\6B63\5170\4EAD\5927\9ED1_GBK;
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    text-shadow: 0 0 5px #000;
}
   
.con .TOP100>img{
    width: 100%;
    height: 1.7rem;
}
.con .TOP100 .good_list_warpper{
    overflow:hidden;
    background: #fff;
    /* height: 2.176rem; */
}
.con .TOP100 .good_list_warpper .goods_list{
    float: left;
    padding: 0.1rem 0;
    width: 33.33333%;
    position: relative;
    height: 2.76rem;
}
.con .TOP100 .good_list_warpper .goods_list:after{
    display: inline-block;
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-right: 1px solid #e5e5e5;
    transform: rotate(10deg);

}
    
.con .TOP100 .good_list_warpper .goods_list a .top{
    position: relative;
    margin: 0.1rem 0.22rem;
    margin-top: 0;
    text-align: center;
}
.con .TOP100 .good_list_warpper .goods_list a .top img{
    width: 1.17rem;
    height: 2rem;
    vertical-align: top;
}
.con .TOP100 .good_list_warpper .goods_list a .name{
    font-size: 12px;
    font-family: Arial;
    font-weight: 400;
    color: #333;
    padding: 0 0.06rem 0 0.12rem;
    margin-bottom: 0.03rem;
    text-align: center;

}
.con .TOP100 .good_list_warpper .goods_list a .kind{
     font-size: 12px;
    font-family: Arial;
    text-align: center;
     /*    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
    margin-bottom: 7px;
}
.con .TOP100 .good_list_warpper .goods_list a .price{
     font-size: 12px;
    font-family: Arial;
    text-align: center;
    color: #ccc;
}

.con .fashion{
    width: 100%;
    height: 0.36rem;
    /* background: #ccc; */
    margin-bottom: 0.1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.con .fashion span:nth-child(1){
    width: 3px;
    height: 22px;
    margin: 7px 0;
    background: #9b885f;
    display: inline-block;
}
.con .fashion span:nth-child(2){
    width: 50%;
    font-family: \\9ED1\4F53;
    font-size: 14px;
    color: #333;
    margin-left: 1px;
    display: inline-block;
    vertical-align: top;
    height: 36px;
    line-height: 36px;
    
}
.con .fashion span:nth-child(3){
    width: 36%;

}
.con .fashion span:nth-child(3) img{
    width: 90%;
    height: 0.36rem;
    margin-right: 0.2rem;
}
.con .chaoliu{
    width: 100%;
    height: 2.22rem;
    /* background: skyblue */
}


.con .chaoliu img{
    width: 100%;
    height: 1.86rem;
}
.con .chaoliu .top{
    width: 100%;
    height: 0.36rem;
    /* background: salmon; */
     display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.con .chaoliu .top span:nth-child(1){
    width: 3px;
    height: 22px;
    margin: 7px 0;
    background: #9b885f;
    display: inline-block;
}
.con .chaoliu .top span:nth-child(2){
    width: 50%;
    font-family: \\9ED1\4F53;
    font-size: 14px;
    color: #333;
    margin-left: 1px;
    display: inline-block;
    vertical-align: top;
    height: 36px;
    line-height: 36px;
    
}
.con .chaoliu .top span:nth-child(3){
    width: 36%;

}
.con .chaoliu .top span:nth-child(3) img{
    width: 90%;
    height: 0.36rem;
    margin-right: 0.2rem;
}

.con .remai{
    margin-top: 0.1rem;
    width: 100%;
    
}
.con .remai .top{
    width: 100%;
    height: 0.36rem;
    /* background: #ccc; */
     display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.con .remai .top span:nth-child(1){
    width: 3px;
    height: 22px;
    margin: 7px 0;
    background: #9b885f;
    display: inline-block;
}
.con .remai .top span:nth-child(2){
    width: 50%;
    font-family: \\9ED1\4F53;
    font-size: 14px;
    color: #333;
    margin-left: 1px;
    display: inline-block;
    vertical-align: top;
    height: 36px;
    line-height: 36px;
    
}
.con .remai .top span:nth-child(3){
    width: 36%;

}
.con .remai .top span:nth-child(3) img{
    width: 90%;
    height: 0.36rem;
    margin-right: 0.2rem;
}
.con .remai ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between

}
.con .remai ul li{
    float: left;
    width: 49.8%;
    border-bottom: 1px solid #ccc;
}
.con .remai ul li img{
   /*  width: 1.85rem;
    height: 1.5rem; */
    width: 100%;

}
</style>
