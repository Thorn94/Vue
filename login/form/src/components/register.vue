<template>
  <div>
    <div :class="{header:isHeader}">
      <h1>
        <router-link to="/login">
          <img src="../../static/img/3.png" alt>
        </router-link>注册
      </h1>
    </div>
    <div :class="{blank:isBlank}"></div>
    <form action>
      <input type="tel" :class="{tel:isTel}" placeholder="请输入手机号">
      <input type="password" :class="{tel:isTel}" placeholder="请输入8-16位数字与字母组成的密码">
      <div :class="{time:isTime}">
        <input type="text" :class="{tel:isTel}" placeholder="短信验证码">
        <input type="button" value="获取验证码" :class="{msg:ismsg}">
      </div>
    </form>
    <div :class="{footer:isFooter}">
      <div :class="{formCheck:isFcheck}">
        <input type="checkbox" checked="checked" :class="{check:isCheck}">
        <h3>
          我已经阅读并同意
          <a>《金融消费注册协议条款》</a>
        </h3>
      </div>
      <input type="button" value="注册" :class="{btn:isBtn}">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHeader: true,
      isBlank: true,
      isTel: true,
      isTime: true,
      countdown: true,
      ismsg: true,
      isFooter: true,
      isCheck: true,
      isFcheck: true,
      isBtn: true
    };
  }
};
</script>

<style lang="" scoped>
@import "../../static/css/register.css";
</style>