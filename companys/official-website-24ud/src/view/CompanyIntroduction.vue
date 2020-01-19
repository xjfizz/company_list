<!--
 * @Author: your name
 * @Date: 2020-01-02 09:15:59
 * @LastEditTime : 2020-01-07 14:39:39
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
                    <h3>江苏二四优递生活服务有限公司</h3>
                    <p class=".text-justify">江苏二四优递生活服务有限公司成立于2014年10月，前期由香港科因特科技有限公司注资五个亿。</p>
                    <p class=".text-justify">以打造物联网同城购物平台、物流仓储、同城配送为一体的综合性公司。</p>
                    <p class=".text-justify">公司已投入巨资打造专属同城互联网展示、销售平台和对应的快递服务系统。巨龙行业精英，秉承“诚信、优质、高效、创新”的服务理念，打造的同城综合服务体系。</p>
                    <p class=".text-justify">未来，二四优递互联网购物平台将覆盖全国两千多个区、县、同三位一体仓同步建设发展，旨在解决同城大、中、小型商家互联网上销售展、售后服务等一系列问题。。</p>
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

