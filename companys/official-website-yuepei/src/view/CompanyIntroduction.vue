<!--
 * @Author: your name
 * @Date: 2020-01-02 09:15:59
 * @LastEditTime : 2020-01-08 16:00:52
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
                    <h3>江苏玥配物流有限公司</h3>
                    <p class=".text-justify">江苏玥配物流有限公司成立于2016年，湖南玥配有限公司注册资金1000万。</p>
                    <p class=".text-justify">公司专业从事道路普通货经营，货物仓储，城市配送。</p>
                    <p class=".text-justify">江苏玥配物流有限公司致力于同城物流配送管理一体化服务。公司力求更好的发展物流产业，自由及合同车辆100多辆。</p>
                    <p class=".text-justify">公司力求做到“珍惜所托，件件真情”，绝对体现“顾客第一，质量第一，服务第一，信誉第一”的服务宗旨。在行业领域内具备了成熟的服务能力和体系，优越的地理和便捷的交通为您提供完善的配送环境,公司本着优质高效，安全，快捷，信用经济的物流服务，秉承“诚信专业，客户为本”的服务宗旨。</p>

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

