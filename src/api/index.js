import http from "utils/http.js"
/*  export const aa = (id=12,cata_id=0)=>http("get","/api/good/brand_detail/",{id,cata_id}) */

/*export const bb=()=>http("get","/api/index/columu_recommend",{}) */


/* 上新 */
export const index_button_api = ()=>http("get","/api/index/index_button",{})
/* https://apim.restful.5lux.com.cn//index/index_button */

/* 轮播图 */
export const index_slider_api = ()=>http("get","api/index/index_slider",{})
/* https://apim.restful.5lux.com.cn/index/index_slider */

/* Burbbery */
export const columu_recommend_api = ()=>http("get","/api/index/columu_recommend",{})

/* 新人特权 */
export const other_advert_api = ()=>http("get","api/index/other_advert",{})
/* https://apim.restful.5lux.com.cn/index/other_advert */
