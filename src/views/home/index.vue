<template>
  <div class="con">
      <!-- 顶部 -->
   <!--  <div :class="backTop==true ? 'backTo':''"><i class="iconfont icon-fanhuidingbu"></i></div> -->
    <div class="header"  :class="navBarFixed == true ? 'navBarWrap' :''">
        <!-- <div>上新</div> -->
    </div>
    <div class="top" :style="style">
      <div class="search">
        <i class="iconfont icon-8"></i>
        <div class="input">5LUX.COM</div>
      </div>
      <i class="iconfont icon-bao1">
        <i class="s">1</i>
      </i>
    </div>
  
    <div class="warp" >
    <!-- 轮播图 -->
        <div class="swiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item ,index) in banners" :key="index">
                <img :src="item.silde_original" />
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    <!-- 上新 -->
        <div class="fun_nav">
            <ul>
              <!--  :to="'/sea/'+item.ad_link" -->
                <router-link  v-for="(item,index) in this.funNavs" :key="index"
                 tag="li" to="/sea"
                
                 >
                    <!-- <i>{{item.ad_code}}</i> -->
                    <img :src="item.ad_code">
                    <span>{{item.ad_name}}</span>
                </router-link>
            </ul>
        </div> 
    <!-- Burberry -->
        <div class="adv">
            <ul>
               <!--  <router-link to="/detail" tag="li" v-for="(item,index) in dataa" :key="index">
                    <img :src="item.ad_code">
                </router-link> -->
                 <li  v-for="(item,index) in dataa" 
                 :key="index"
                 @click="hanleToDetail(item,ad_name)"
                 >
                    <img :src="item.ad_code">
                 </li>
            
            </ul>
        </div>

        <!-- 新人特权 -->
        <!--  v-for="(item,index) in register" :key="index" -->
        <div class="content" >
            <div class="new_register" v-for="(item,index) in register.new_register" :key="index">
               <img :src="item.ad_code">
            </div>
            <div class="new_register">
            <!-- <div class="new_register" v-for="(item,index) in register.vip_member" :key="index"> -->
              <!-- <img :src="item.ad_code"> -->
                <img src="http://img550.5lux.com.cn/2019/07/04/ab/156220549787_750x586.jpg">
                <div class="resgister_new">
                    <ul>
                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>
                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>
                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>

                        <li>
                            <img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="new_register">
                <img src="http://img550.5lux.com.cn/2019/07/04/hi/156220549519_750x586.jpg">
            </div>

            <div class="hook"  v-for="(item,index) in register.article_list" :key="index">
                <div>
                  <img :src="item.ads_info.ad_code">
                    <!-- <img src="http://img550.5lux.com.cn/2019/08/02/qr/156474033256_750x586.jpg"> -->
                </div>
                <div>
                    <strong>{{item.ads_info.ad_name}}</strong>
                    <p>{{item.ads_info.ad_title}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {index_button_api,columu_recommend_api,index_slider_api,other_advert_api} from 'api/home'
import JSONP from "jsonp"

import Swiper from "swiper";
import _ from 'lodash';
import "../../../node_modules/swiper/dist/css/swiper.min.css";
import axios from "axios";
import BScroll from 'better-scroll'
export default {
  name: "Home",
  data() {
    return {
      daL:{},
      banners: [],
      dataa:[],
      register:[],
      funNavs:[],
      style: {},
      opacity: 0,
      offsetTop:0,
      str:""
      // list:["上新","海外馆",'闪购',"品牌","专柜自提"]
    };
  },

  methods: {
     hanleToDetail(item,ad_name){
    
      /*   for(let i =0;i<this.dataa[i].length;i++){
           alert(this.dataa[i].ad_link.split("/")[5])
       } */
    
      //  let url=` https://apim.restful.5lux.com.cn/good/brand_detail/?id=1091&cata_id=${0}&jsonpCallback=__jp10`
        
      //      JSONP(url,{param:"jsonpCallback"},(err,res)=>{
      //     console.log(this.dataa[item.sort_order])
      //     this.daL=res
        

      // })
      let link_id = item.ad_link.split("/")[5];
      console.log(link_id)
      let url = `/api/good/brand_detail/?id=${link_id}&cata_id=0`
      axios.get(url)
      .then((res)=>{
        console.log(res)
        this.daL=res
           this.$router.push({name:"detail",params:{daL:this.daL}})
      })
        
    
      
      },
    initBanner() {
      new Swiper(".swiper-container", {
        autoplay: {
          delay: 800
        }, //可选选
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
    handleScroll:_.throttle( function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 49) {
          this.backTop = true
          this.navBarFixed = true
        }else{
          this.backTop = false
          this.navBarFixed = false
        }
        this.opacity = Math.abs(Math.round(scrollTop)) / 250;
        this.style = {background: `rgba(0, 0, 0,${this.opacity})`}
      },100),
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll); // 离开页面 关闭监听 不然会报错
      },
     
      // hidemenu() {
      //   let scrollTop =
      //     window.pageYOffset ||
      //     document.documentElement.scrollTop ||
      //     document.body.scrollTop;
      //   //当滚动超过50时，实现吸顶效果（导航高度为50）
      //   if (scrollTop > 49) {
      //     this.navBarFixed = true
      //   }else{
      //     this.navBarFixed = false
      //   }
      // },



  },
  async created() {
    // console.log(this);
      let data2 = await index_button_api()
      this.funNavs = data2.data.list
   
      let data1 = await index_slider_api()
      this.banners = data1.data;
      this.$nextTick(() => {
          this.initBanner();
      });

  
     let data = await columu_recommend_api()
     this.dataa = data.data


    for(let i =0;i<this.dataa.length;i++){
       

       this.dataa[i].ad_link.split("/")[5]
       console.log(this.dataa[i].ad_link.split("/")[5])
     

     }
    
    
     let data3 = await other_advert_api()
     this.register = data3.data
  },
  mounted(){
      this.offsetTop = document.querySelector('.top').offsetTop;
      // 开启滚动监听
      window.addEventListener('scroll', this.handleScroll);
     
  }
};
</script>

<style>

.navBarWrap {
  width: 100%;
  height: 0.39rem;;
    position: fixed;
    top: 0.44rem;
    z-index: 999;
    background: #fff;
   
  }

.top {
  width: 100%;
  height: 0.44rem;
  /* background: #ccc; */
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top > .search {
  width: 3rem;
  height: 0.3rem;
  background-color: hsla(0, 0%, 100%, 0.25);
  /* background: red; */
  border-radius: 0.04rem;
  margin-left: 17px;
  margin-right: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top > .search i {
  width: 0.13rem;
  height: 13px;
  margin: 0 0.08rem;
  color: #fff;
  line-height: 0.13rem;
  font-size: 16px;
}
.top > .search > .input {
  width: 0.75rem;
  height: 0.12rem;
  color: #ccc;
  font-size: 14px;
  line-height: 0.12rem;
}
.top i {
  width: 0.22rem;
  height: 0.24rem;
  margin-right: 0.17rem;
  position: relative;
  font-size: 20px;
  color: #fff;
}
.top > i > .s {
  position: absolute;
  width: 0.15rem;
  height: 0.15rem;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  background: #f33;
  color: #fff;
  font-size: 10px;
  text-align: center;
  line-height: 0.15rem;
  left: 0.12rem;
  top: -0.03rem;
}
.warp{
    padding-bottom: 0.5rem;
}
.warp .swiper-container {
  /* top:0.44rem; */
  width: 100%;
  height: 4.12rem;
}
.warp .swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.warp .swiper-slide > img {
  width: 100%;
  height: 4.12rem;
  display: block;
}
.warp .fun_nav {
  width: 100%;
  height: 0.70rem;
  background: #fff;
}
.warp .fun_nav ul li{
     width: 100%;
    height: 100%
}
.warp .fun_nav ul{
    display: flex;
}
.warp .fun_nav ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #ccc;
    margin-top: 0.15rem;
}
.warp .fun_nav ul li span{
    color: #7e8c8d;
    margin-top: 0.05rem;
}

.warp .fun_nav ul li img{
    width: 30%;
    height: 30%;
}

.warp .adv{
   
}
.warp .adv ul{
     width: 100%;
    height: 2.74rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}
.warp .adv li{
    width: 49%;
    margin-bottom: 7px;
    float: left;
}
.warp .adv li img{
    width: 100%;
}
.warp .content{

}
.warp .content .new_register{
    margin-bottom: 10px;
    position: relative
}
.warp .content .new_register img{
        width: 100%;
    vertical-align: top;
}
.warp .content .new_register .resgister_new{
    width: 100%;
    padding: 10px 3.5px;
    background: #fff;
}
.warp .content .new_register .resgister_new ul{
    width: 100%;
    display: flex;
     flex-direction: row;
    justify-content: space-between;
}
.warp .content .new_register .resgister_new ul li{
   
     display: flex;
     flex-direction: row;
    justify-content: space-between;
        
}
.warp .content .new_register .resgister_new ul li img{
        width: 0.85rem;
        height: 0.85rem;
}
.warp .content .hook{
    width: 100%;
    height: 4rem;
    /* background: #ccc; */
}
.warp .content .hook img{
    width: 100%;
    height: 2.93rem;
}
.warp .content .hook div:nth-child(2){
    width: 100%;
    height: 1.07rem;
    background: #fff;
    padding: 18px 20px 20px;
    
}
.warp .content .hook div:nth-child(2) strong{
    font-family: \\9ED1\4F53;
    font-weight: 700;
    display: block;
    font-size: 14px;
    color: #333;
    height: 0.18rem;
    line-height: 0.18rem;
    padding-bottom: 0.30rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.warp .content .hook div:nth-child(2) p{
    font-family: \\9ED1\4F53;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    color: #999;
    height: 34px;
    line-height: 18px;
}
</style>
