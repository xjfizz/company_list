<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index" @click="goOrder()">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
                <h1 class="header_title">{{item.title}}</h1>
                <p class="header_content">{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!-- 大数据管理系统 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/img1.png" alt="大数据管理系统">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">
           江苏二四优递生活服务有限公司
            <small>/ 24ud</small>
          </h2>
          <p>江苏二四优递打造以身边百货、汽配、商超、鲜花、蛋糕、服饰、服务等为主营的网上购物交易、线下实体店配货、同城速递于一体的简单购物、快递收货的综合电子商务平台。我们就是您手中的百货市场。</p>
          <p>江苏二四优递生活服务有限公司成立以来发展迅速，适应现代化的消费习惯和不断提高快递服务体验，让每一个人在高效快捷的生活节奏中保持一份愉悦的生活态度，使“二四优递”成为中国同城服务第一品牌。</p>
          <h2 class="bigData-device">电商服务/配送服务/仓储服务 &nbsp; OUR SERVICE</h2>
          <a @click="goAbout()" class="btn btn-lg btn-block btn-info">联系我们</a>
        </div>
      </div>
    </div>
    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>您身边的物流专家</h1>
        <h3>7x24小时提供出色的物流对接服务</h3>
        <button
          @click="goAbout()"
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >联系我们</button>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">合作伙伴</p>
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item,index) in customerList"
              :key="index"
            >
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao.png" alt="引号">
              </div>
              <div class="customer-content1">
                <small>{{item.content}}</small>
              </div>
              <div class="customer-content2">{{item.title}}</div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="row visible-xs customer-block">
          <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo">
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号">
            </div>
            <div class="customer-content1">
              <small>{{item.content}}</small>
            </div>
            <div class="customer-content2">
              <small>{{item.title}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们的服务</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#6D45FD';this.style.borderColor='#6D45FD'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#6D45FD'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
import API from '../api/index'
export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        // {
        //   img: require("@/assets/img/banner1.png"),
        //   path: "",
        //   title: '您身边的IT专家1',
        //   content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        // },
        // {
        //   img: require("@/assets/img/banner2.jpg"),
        //   path: "",
        //   title: '您身边的IT专家2',
        //   content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        // },
        // {
        //   img: require("@/assets/img/banner1.png"),
        //   path: "",
        //   title: '您身边的IT专家3',
        //   content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        // },
        // {
        //   img: require("@/assets/img/banner2.jpg"),
        //   path: "",
        //   title: '您身边的IT专家4',
        //   content: '宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介宣传简介',
        // }
      ],
      customerList: [
        {
          logo: require("@/assets/img/logo_shentong.png"),
          title:
            "申通快递",
          content:
            "申通快递在提供传统快递服务的同时，开拓新兴业务，为客户提供仓储、配送、系统、客服等B2C一站式物流服务、代收货款、贵重物品通道、冷链运输等服务等，致力成为专业的第三方仓储物流供应链服务商"
        },
        {
          logo: require("@/assets/img/logo_shunfeng.png"),
          title:
            "顺丰快递",
          content:
            "顺丰是国内的快递物流综合服务商,为客户提供一体化综合物流解决方案的能力，不仅提供配送端的物流服务，还延伸至价值链前端的产、供、销、配等环节，为客户提供仓储管理、销售预测、大数据分析等解决方案"
        },
        {
          logo: require("@/assets/img/logo_zhongtong.png"),
          title:
            "中通快递",
          content:
            "中通快递坚持“同建共享、信任责任、创新与企业家精神”的核心价值观，运用新科技，投入新装备，拓展产业链，构建生态圈，不断转型升级，从“大”向“大而强”高质量发展，努力打造成为全球一流的综合物流服务商。"
        },
        // {
        //   logo: require("@/assets/img/logo_huawei.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_albb.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_24ud.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_huawei.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_albb.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_24ud.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_albb.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_huawei.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // },
        // {
        //   logo: require("@/assets/img/logo_albb.png"),
        //   title:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。",
        //   content:
        //     "您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。"
        // }
      ],
      serverList: [
        {
          logo: require("@/assets/img/tel.png"),
          title: "核心优势1",
          content: "<p>由专业客服提供人工服务</p>负责疑难问题和故障受理"
        },
        {
          logo: require("@/assets/img/computer.png"),
          title: "核心优势2",
          content: "<p>利用远程视频工具，提供协助</p>帮助客户进行调试、解决故障"
        },
        {
          logo: require("@/assets/img/qq.png"),
          title: "核心优势3",
          content: "<p>利用企业QQ提供在线解答</p>帮助企业快速准确解决问题和故障"
        },
        {
          logo: require("@/assets/img/skill.png"),
          title: "核心优势4",
          content: "<p>由技术支持工程师，负责问题解答</p>需求受理及故障受理"
        }
      ],
      url:  'http://manage.24ud.cn/',
    };
  },
  mounted() {
    // 获取轮播图
     this.getLunBoList()

     setTimeout(() => {
        /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
     },500)

   
  },
  methods:{
    // 获取轮播列表
    getLunBoList() {
        const params = {
        state: 1 || ''
      }
      API.lunbo.getLunBoList(params).then(res => {
        if (res.code === 200) {
            console.log('res', res)
            this.swiperList = res.data.rows
        }
     })
    },
    // 联系我们
    goAbout() {
        this.$router.push({
                name: 'contactus',
                // params: {
                //     id: id
                // }
            })
    },
    goOrder() {
       window.open(this.url, '_blank')
    }
  }
};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  /* height: 600px; */
  height: calc(80vh);
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide{
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  /* background: rgba(51, 51, 51, 0); */
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1{
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p{
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}
#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/twitter.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}
#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}
#customer .customer-block {
  background: #fff;
  padding: 30px;
}
#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}
#customer .customer-content2 {
  padding-top: 20px;
}
/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}
#whyChooseUs .server-block img {
  width: 48px;
  height: 48px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}
/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }
}
.header_title{
    -webkit-animation: anLoca 2s;
    -webkit-animation-iteration-count: 10000;
  -webkit-animation-direction: alternate;
}

 @-webkit-keyframes anLoca {
    from {
        -webkit-transform: scale3d(1.2, 1.2, 1.2);
    }
    to {
        -webkit-transform: scale3d(0.9, 0.9, 0.9);
    }
 }
 .swiper-button-prev{
   left: 0px;
 }
  .swiper-button-next{
   right: 0px;
 }



</style>

