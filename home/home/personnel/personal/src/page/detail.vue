<template>
  <div>
    <div :class="{header:isHeader}">
      <ul :class="{h_list:isHlist}">
        <router-link to="/">
          <li :class="{h_left:isHleft}">
            <img :src="imgUrl">
            <h1>{{msg1}}</h1>
          </li>
        </router-link>
        <li :class="{h_center:isHcenter}">
          <p>{{msg2}}</p>
        </li>
        <li :class="{h_right:isHright}">
          <img :src="imgUrl2">
        </li>
      </ul>
    </div>
    <div :class="{occupy:isOccupy}">
      <div :class="{detail:isDetail}">
        <div :class="{detail_head:isDhead}">
          <h1>{{msg3}}</h1>
          <p>{{msg4}}</p>
        </div>
        <div :class="{datail_content:isDcontent}">
          <p>
            {{msg5}}
            <span>{{msg6}}</span>
          </p>
          <p>
            {{msg7}}
            <span>{{msg8}}</span>
          </p>
          <p>
            {{msg9}}
            <span>{{msg10}}</span>
          </p>
          <p>
            {{msg11}}
            <span>{{msg12}}</span>
          </p>
        </div>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{introduce:isIntro}">
        <h1>{{message}}</h1>
        <p>{{message1}}</p>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{introduce:isIntro}">
        <h1>{{message2}}</h1>
        <p>{{message3}}</p>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{introduce:isIntro}">
        <h1>{{message4}}</h1>
        <p>{{message5}}</p>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{login:isLogin}">
        <p>登录&nbsp;|&nbsp;注册&nbsp;|&nbsp;同行入驻</p>
      </div>
      <div :class="{about:isAbout}">
        <ul>
          <li>
            <a href>关于我们 &gt;</a>
          </li>
          <li>
            <a href>求职指南 &gt;</a>
          </li>
          <li>
            <a href>联系我们 &gt;</a>
          </li>
          <li>
            <a href>免责声明 &gt;</a>
          </li>
        </ul>
        <p>贵公网安备 11010602030054</p>
      </div>
      <div :class="{footer:isFooter}">
        <ul :class="{f_list:isFlist}">
          <li :class="{f_left:isFleft}">
            <div class="div">
              <img :src="imgUrl3">
              <span>{{message6}}</span>
            </div>
          </li>
          <li :class="{f_right:isFright}">
            <div class="div">
              <img :src="imgUrl4">
              <span>{{message7}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHeader: true,
      isHlist: true,
      imgUrl: require("../../static/img/back_jt.png"),
      msg1: "返回",
      isHleft: true,
      isHcenter: true,
      isHright: true,
      msg2: "项目详情",
      imgUrl2: require("../../static/img/menu_icon04.png"),
      isOccupy: true,
      isDetail: true,
      isDhead: true,
      msg3: "",
      msg4: "",
      isDcontent: true,
      msg5: "项目主体：",
      msg6: "",
      msg7: "项目资金：",
      msg8: "20万",
      msg9: "项目类型：",
      msg10: "休闲餐饮",
      msg11: "项目地址：",
      msg12: "贵州省贵阳市南明区甲秀楼附近",
      isBlank: true,
      isIntro: true,
      message: "企业介绍",
      message1: "",
      message2: "项目介绍",
      message3: "",
      message4: "项目优势",
      message5: "",
      isLogin: true,
      isAbout: true,
      isFooter: true,
      isFlist: true,
      imgUrl3: require("../../static/img/zy_icon_sc_w.png"),
      isFleft: true,
      message6: "收藏项目",
      imgUrl4: require("../../static/img/zy_icon_tel_w.png"),
      message7: "电话交谈",
      isFright: true
    };
  },
  created() {
    // this.message5 = this.$route.params.user2.h;
    // this.message3 = this.$route.params.user2.g;
    // this.message1 = this.$route.params.user2.d;
    // console.log(this.$route.params.user2)
    this.msg6 = this.$route.params.user2.content.substring(0, 9);
    this.msg3 = this.$route.params.user2.content.substring(0, 9);
    this.message1 = this.$route.params.user2.content;
    this.message3 = this.$route.params.user2.content1;
    this.message5 = this.$route.params.user2.content2;
    this.msg4 = this.$route.params.user2.number;
  }
};
</script>

<style lang="" scoped>
@import "../../static/css/detail.css";
</style>