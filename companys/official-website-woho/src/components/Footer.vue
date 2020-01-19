<!--
 * @Author: your name
 * @Date: 2020-01-03 17:55:02
 * @LastEditTime : 2020-01-08 09:20:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-huaruan\src\components\Footer.vue
 -->
<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <!-- <img src="@/assets/img/logo_white.png" alt="logo图"> -->
       <img height="90px" width="90px" src="@/assets/img/woho-company.jpg" alt="logo图">
    </div>
    <p class="title">江苏蜗活电子商务有限公司</p>
    <p class="address_tel_fax">
      <span>地址：昆山开发区朝阳东路55号建伟汽配物流市场3号楼131室</span>
      <span>Tel：13375160328</span>
      <!-- <span>Fax：8888-88888888</span> -->
    </p>
    <p class="email_wx">
      <span>邮箱：82036695@qq.com</span>
      <span>公司微信号：13375160328</span>
    </p>
    <p class="copy">Copyright &copy; 2018 - 2019 江苏蜗活电子商务有限公司</p>
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

