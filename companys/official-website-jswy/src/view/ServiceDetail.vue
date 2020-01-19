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
          title: "物业管理"
        },
        {
          id: "section-2",
          title: "园林绿化"
        },
        {
          id: "section-3",
          title: "水电安装"
        },
        {
          id: "section-4",
          title: "生活服务"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "物业管理",
          eng_title: "Estate management",
          content:
            "<h3>主要方向</h3><p>致力于全国的业主通过选聘物业服务企业，由业主和物业服务企业按照物业服务合同约定，对房屋及配套的设施设备和相关场地进行维修、养护、管理，维护物业管理区域内的环境卫生和相关秩序的活动。</p>"
        },
        {
          id: "section-2",
          title: "园林绿化",
          eng_title: "Landscaping",
          content:
            "<h3>主要方向</h3><p>园林包括庭园、宅园、小游园、花园、公园、植物园、动物园等，随着园林学科的发展，还包括森林公园、风景名胜区、自然保护区或国家公园的游览区以及休养胜地。</p>"
        },
        {
          id: "section-3",
          title: "水电安装",
          eng_title: "Hydropower installation",
          content:
            "<h3>主要方向</h3><p>拥有专业团队对房屋建筑等进行水电安装。</p>"
        },
        {
          id: "section-4",
          title: "生活服务",
          eng_title: "Life service",
          content:
            "<h3>主要方向</h3><p>致力于人们日常生活中的方方面面，包括餐饮、娱乐、租房、买房、工作、旅游、教育培训等生活相关的“衣食住行。</p>"
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
