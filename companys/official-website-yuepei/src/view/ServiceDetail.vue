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
          title: "道路普通货经营"
        },
        {
          id: "section-2",
          title: "货物仓储"
        },
        {
          id: "section-3",
          title: "城市配送"
        },
        {
          id: "section-4",
          title: "装卸搬运"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "道路普通货经营",
          eng_title: "Road common goods operation",
          content:
            "<h3>主要方向</h3><p>致力于普通货物的运输，普通货物主要指通常运输中的货物，不需要特别保护，没有危险性，不需要特殊防范的货物。</p>"
        },
        {
          id: "section-2",
          title: "货物仓储",
          eng_title: "Goods warehousing",
          content:
            "<h3>主要方向</h3><p>“三位一体”仓(仓储物流、分拨包装、休闲体验)；充分利用仓库的垂直空间；货物自动存取，与仓库以外的生产环节进行有机连接；计算机智能化管理，准确跟踪货物的流向。</p>"
        },
        {
          id: "section-3",
          title: "城市配送",
          eng_title: "Urban distribution",
          content:
            "<h3>主要方向</h3><p>面向所有客户的全场景同城物流配送，按照客户要求到指定地点收取快件，将快件寄给指定收件对象，最快30分钟送达(含上门时间)，专人直拿直送，打造二四优递高时效物流产品，为客户提供全程配送服务。</p>"
        },
        {
          id: "section-4",
          title: "装卸搬运",
          eng_title: "Handling and handling",
          content:
            "<h3>主要方向</h3><p>我们将在短的时间内制定一整套设备起重、装卸、搬运方案，尽快到达工作现场，以我们雄厚的技术力量、先进起重搬运工具、丰富的实际操作经验，为您提供服务。</p>"
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
