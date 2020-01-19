<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">相关服务</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>特色服务</p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              <small>/ {{item.eng_title}}</small>
            </h2>
            <div v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "ServiceDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "蜗活电商"
        },
        {
          id: "section-2",
          title: "蜗活直播"
        },
        {
          id: "section-3",
          title: "蜗活小超"
        },
        {
          id: "section-4",
          title: "自营物流"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "蜗活电商",
          eng_title: "Woho electric business",
          content:
            "<h3>主要方向</h3><p>建立农业电子商务平台帮助农村农产品走向城镇市场解决农民“卖菜难，菜价贱”以及城市居民“买菜难，买菜贵”的问题</p>"
        },
        {
          id: "section-2",
          title: "蜗活直播",
          eng_title: "Live broadcast of woho",
          content:
            "<h3>主要方向</h3><p>商家可以通过蜗活直播展示当地的特色产品，大大提高产品的知名度，让当地产品走到更多的人群当中，普通用户可以通过直播了解并购买当地的特产。</p>"
        },
        {
          id: "section-3",
          title: "蜗活小超",
          eng_title: "Small alive",
          content:
            "<h3>主要方向</h3><p>汇聚当地最具特色的产品，方便人们购买特色产品的同时，也展示当地的风土内涵</p>"
        },
        {
          id: "section-4",
          title: "自营物流",
          eng_title: "Self-support Logistics",
          content:
            "<h3>主要方向</h3><p>拥有配套的自营物流二四优递，从买家购买商品，到卖家发货，物流配送以及买家收货，拥有一整套流程，极大提高了买家的用户体验。</p>"
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
      }
    });
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
</style>
