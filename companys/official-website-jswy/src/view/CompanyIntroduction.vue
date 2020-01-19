<!--
 * @Author: your name
 * @Date: 2020-01-02 09:15:59
 * @LastEditTime : 2020-01-08 14:50:40
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
                    <h3>上海简适物业服务有限公司</h3>
                     <p class=".text-justify">上海简适物业服务有限公司成立于2015-06-30，注册资本50万人民币</p>
                    <p class=".text-justify"></p>上海简适物业服务有限公司位于上海市崇明区横沙乡富民支路58号A1-3506室，是一家以物业服务为主的民营公司。</p>
                    <p class=".text-justify">公司主要经营物业管理,园林绿化工程,水电安装工程,市政工程,自有房屋租赁,花卉租赁,清洁服务,会务服务,展览展示服务,园林绿化养护服务等。</p>
                    <p class=".text-justify">此外，上海简适物业服务有限公司期待您的咨询，Tel:18905647472。</p>
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

