<!--
 * @Author: your name
 * @Date: 2020-01-03 17:55:02
 * @LastEditTime : 2020-01-07 14:44:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-huaruan\src\components\Footer.vue
 -->
<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <!-- <img src="@/assets/img/logo_white.png" alt="logo图"> -->
       <img height="90px" width="90px" src="@/assets/img/24ud-company.jpg" alt="logo图">
    </div>
    <p class="title">江苏二四优递生活服务有限公司</p>
    <p class="address_tel_fax">
      <span>地址：江苏省苏州市吴江区启迪信息科技园一楼</span>
      <span>Tel：400-111-2424</span>
      <!-- <span>Fax：8888-88888888</span> -->
    </p>
    <p class="email_wx">
      <span>邮箱：postmaster@24ud.cn</span>
      <span>公司微信号：ilyk_gg</span>
    </p>
    <p class="copy">Copyright &copy; 2018 - 2019 江苏二四优递生活服务有限公司</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
  margin: 10px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

