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
          title: "电商服务"
        },
        {
          id: "section-2",
          title: "配送服务"
        },
        {
          id: "section-3",
          title: "仓储服务"
        },
        {
          id: "section-4",
          title: "家政服务"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "电商服务",
          eng_title: "Electricity service",
          content:
            "<h3>主要方向</h3><p>我们专门为实体店业主配备了运营专员对店内商品进行上传，维护等操作，即时业主不懂电脑，不会上网也一样可以让自己的实体店加入电子商务的大军配合电子商务平台，实现自己多元化。</p>"
        },
        {
          id: "section-2",
          title: "配送服务",
          eng_title: "Distribution service",
          content:
            "<h3>主要方向</h3><p>面向所有客户的全场景同城物流配送，按照客户要求到指定地点收取快件，将快件寄给指定收件对象，最快30分钟送达(含上门时间)，专人直拿直送，打造二四优递高时效物流产品，为客户提供全程配送服务。</p>"
        },
        {
          id: "section-3",
          title: "仓储服务",
          eng_title: "Warehousing service",
          content:
            "<h3>主要方向</h3><p>“三位一体”仓(仓储物流、分拨包装、休闲体验)；充分利用仓库的垂直空间；货物自动存取，与仓库以外的生产环节进行有机连接；计算机智能化管理，准确跟踪货物的流向。</p>"
        },
        {
          id: "section-4",
          title: "家政服务",
          eng_title: "Homemaking service",
          content:
            "<h3>主要方向</h3><p>将部分家庭事务社会化、职业化、市场化，属于民生范畴。由社会专业机构、社区机构、非盈利组织、家政服务公司和专业家政服务人员来承担，帮助家庭与社会互动，构建家庭规范，提高家庭生活质量，以此促进整个社会的发展。</p>"
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
