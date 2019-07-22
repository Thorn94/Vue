<template>
  <div>
    <div :class="{ header:isHeader}">
      <h1 :class="{ log_txt:isTxt}">{{message}}</h1>
    </div>
    <form :class="{ form:isForm}">
      <input :class="{ tel_txt:isTel}" type="tel" placeholder="请输入您的手机号">
      <div :class="{change:isChange}">
        <input :class="{ tel_txt:isTel}" type="tel" v-model="txt" v-if="pwdType">
        <!--方便显示密码数据-->
        <input :class="{ tel_txt:isTel}" v-model="txt" type="password" v-else>
        <img :src="seen ? seenImg : unseenImg" @click="changeType" alt="img" :class="{img2:close}">
      </div>
      <input type="button" :class="{btn:isBtn}" v-model="btn_txt" @click="show">
    </form>
    <div :class="{footer:isFooter}">
      <a :class="{link:isLink}">{{message2}}</a>
      <p :class="{account:isAccount}">
        {{message3}}
            <router-link to="/register" :class="{login:isLogin}">{{message4}}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "logo",
      isHeader: true,
      isTxt: true,
      isForm: true,
      isTel: true,
      isChange: true,
      txt: "523654",
      close: true,
      isBtn: true,
      btn_txt: "登  录",
      message2: "忘记密码?",
      isLink: true,
      isFooter: true,
      message3: "没有账号?",
      message4: "立即注册",
      isAccount: true,
      isLogin: true,
      seen: "",
      unseenImg: "../../static/img/2.png", //看不见
      seenImg: "../../static/img/1.png", //看得见密码
      pwdType: false, //此时文本框隐藏，显示密码框
      isLast: true,
      isshow: false,
      infor: null,
      isH1: true,
      isRun: true,
      isBtn1: true,
      isa: true
    };
  },
  methods: {
    //密码的显示隐藏
    changeType: function() {
      this.seen = !this.seen; //小眼睛的变化
      this.pwdType = !this.pwdType; //跟着小眼睛变化，密码框隐藏显示文本框，内容就显示了
    },
    show: function() {
      this.isshow = true;
    },
    show2: function() {
      this.isshow = false;
    }
  }
};
</script>

<style lang="" scoped>
@import "../../static/css/login.css";
</style>