<!--
 * @Author: your name
 * @Date: 2020-01-02 09:15:59
 * @LastEditTime : 2020-01-07 15:56:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\view\CompanyIntroduction.vue
 -->
<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/about_img1.png">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>江苏蜗活电子商务有限公司</h3>
                    <p class=".text-justify">江苏蜗活电子商务有限公司成立于2015年，江苏蜗活电子商务有限公司注册资金1000万。</p>
                    <p class=".text-justify">江苏蜗活电子商务有限公司是一家基于电子商务平台，运用“农村电商”的新模式的公司</p>
                    <p class=".text-justify">响应国家“十二五”农业信息化发展规划，旨在中国广大乡镇和城镇之间建立农业电子商务平台。</p>
                    <p class=".text-justify">帮助农村农产品走向城镇市场解决农民“卖菜难，菜价贱”以及城市居民“买菜难，买菜贵”的问题，促进社会主义新农村建设，提高居民生活水平实现中国村。</p>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
    data(){
        return{

        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>
.banner{
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url('../assets/img/banner1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}
</style>

