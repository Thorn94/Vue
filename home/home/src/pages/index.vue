<template>
  <div>
    <div :class="{header:isHeader}">
      <div :class="{h_content:isHcontent}">
        <img :src="imgUrl" :class="{img1:isImg}" />
        <input type="text" placeholder="请输入小区名、楼盘、商圈名" :class="{search:isSearch}" />
      </div>
    </div>
    <div :class="{occupy:isOccupy}">
      <div :class="{hot:isHot}">
        <div :class="{hot_con:isHotcon}">
          <div :class="{hot_left:isHotleft}">
            <img :src="imgUrl1" :class="{img2:isImg}" />
          </div>
          <div :class="{hot_txt:isHottxt}">
            <a href="#">{{msg}}</a>
            <!-- <a class="text" v-for="(text, index) in arr" :key="index">{{text}}</a> -->
          </div>
          <img :src="imgUrl2" :class="{img3:isImg}" />
        </div>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{list:isList}">
        <ul :class="{ul_list:isUllist}">
          <li>
            <img :src="imgUrl3" :class="{img4:isImg}" />
            <p>{{msg1}}</p>
          </li>
          <li>
            <img :src="imgUrl4" :class="{img4:isImg}" />
            <p>{{msg2}}</p>
          </li>
          <li>
            <img :src="imgUrl5" :class="{img4:isImg}" />
            <p>{{msg3}}</p>
          </li>
          <li>
            <img :src="imgUrl6" :class="{img4:isImg}" />
            <p>{{msg4}}</p>
          </li>
        </ul>
        <ul :class="{ul_list:isUllist}" style="padding-top:0;">
          <li>
            <img :src="imgUrl7" :class="{img4:isImg}" />
            <p>{{msg5}}</p>
          </li>
          <li>
            <img :src="imgUrl8" :class="{img4:isImg}" />
            <p>{{msg6}}</p>
          </li>
          <li>
            <img :src="imgUrl9" :class="{img4:isImg}" />
            <p>{{msg7}}</p>
          </li>
          <li>
            <img :src="imgUrl10" :class="{img4:isImg}" />
            <p>{{msg8}}</p>
          </li>
        </ul>
      </div>
      <!--轮播-->
      <div :class="{banner:isBanner}">
        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide banner_sp" v-for="item in lists">
              <img :src="item.img" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div :class="{sale:isSale}">
        <div :class="{all:isAll}">
          <h1>{{mag10}}</h1>
          <div :class="{view_all:isView}">
            <span>{{mesage}}</span>
            <img :src="imgUrl2" :class="{img3:isImg}" />
          </div>
        </div>
        <div :class="{details:isDetails}">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide details_sp" v-for="item2 in items" style="width:auto;">
                <div>
                  <img :src="item2.img" />
                  <h1>{{item2.name}}</h1>
                  <p>
                    {{item2.area}}
                    <span>{{item2.price}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{find:isFind}">
        <div :class="{find_house:isFdhouse}">
          <div :class="{in_house:isInhouse}">
            <ul :class="{in_all:inAll}">
              <li @click="cur=0" :class="{active:cur==0}">
                {{message1}}
                <p class="first_line"></p>
              </li>
              <li class="last_h1" @click="cur=1" :class="{active:cur==1}">
                {{message2}}
                <p class="last_line"></p>
              </li>
            </ul>
            <div :class="{think:isThink}" v-show="cur==0">
              <div :class="{think_left:isThinkleft}">
                <h1>
                  <img :src="imgUrlT" :class="{img_think:isImg}" />
                  {{message3}}
                </h1>
                <p>{{message4}}</p>
              </div>
              <div :class="{think_left:isThinkleft}">
                <h1>
                  <img :src="imgUrlT2" :class="{img_think:isImg}" />
                  {{message5}}
                </h1>
                <p>{{message6}}</p>
              </div>
            </div>
            <div :class="{think:isThink}" v-show="cur==1">
              <div :class="{think_left:isThinkleft}">
                <h1>
                  <img :src="imgUrlT" :class="{img_think:isImg}" />
                  {{message3}}
                </h1>
                <p>{{message4}}</p>
              </div>
              <div :class="{think_left:isThinkleft}">
                <h1>
                  <img :src="imgUrlT2" :class="{img_think:isImg}" />
                  {{message5}}
                </h1>
                <p>{{message6}}</p>
              </div>
            </div>
            <input type="button" value="马上找房" :class="{btn:isBtn}" />
          </div>
        </div>
      </div>
      <div :class="{adv:isAdv}">
        <h1>{{message7}}</h1>
        <div :class="{adv_content:isAdv}" v-for="item3 in lists1">
          <div :class="{adv_left:isAdv}">
            <img :src="item3.img" />
          </div>
          <div :class="{adv_detail:isAdv}">
            <h1>{{item3.name}}</h1>
            <p>{{item3.house}}</p>
            <p>{{item3.address}}</p>
            <h2>
              <span>{{item3.year}}</span>
              <span>{{item3.transform}}</span>
            </h2>
            <h3>
              <img :src="item3.img1" />
              {{item3.gap}}
            </h3>
            <div :class="{adv_right:isAdv}">
              <h4>{{item3.price}}</h4>
              <p>{{item3.area}}</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="{medium:isMedium}">
        <h1>{{message8}}</h1>
        <button>
          填写购房意向,精准匹配品质好房
          <span>立即填写</span>
        </button>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{infor:isInfor}">
        <div :class="{infor_content:isInfor}" v-for="item4 in lists2">
          <div :class="{photo:isPhoto}">
            <img :src="item4.img" :class="{imgs1:isImg}" />
            <div :class="{photo_center:isPhoto}">
              <h1>{{item4.name}}</h1>
              <p>{{item4.say}}</p>
            </div>
            <div :class="{question:isQuestion}">
              <div :class="{wechat:isQuestion}">
                <img :src="item4.wechat" />
                <span>{{item4.consult}}</span>
              </div>
            </div>
          </div>
          <h2>{{item4.words}}</h2>
          <ul :class="{infor_img:isInfor}">
            <li>
              <img :src="item4.img1" />
            </li>
            <li>
              <img :src="item4.img2" />
            </li>
            <li style="margin-right:0;">
              <img :src="item4.img3" />
            </li>
          </ul>
          <div :class="{infor_footer:isInfor}">
            <div :class="{map:isInfor}">
              <img :src="item4.img5" />
              <span>{{item4.map}}</span>
            </div>
            <div :class="{infor_right:isInfor}">
              <div :class="{relay:isInfor}">
                <img :src="item4.relay" />
                <p>{{item4.relay_num}}</p>
              </div>
              <div :class="{relay:isInfor}">
                <img :src="item4.good" />
                <p>{{item4.good_num}}</p>
              </div>
              <div :class="{relay:isInfor}">
                <img :src="item4.information" />
                <p>{{item4.information_num}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div :class="{blank:isBlank}"></div> -->
      <div :class="{footer:isFooter}">
        <ul :class="{footer_ul:isFooter}">
          <li>
            <img :src="footer_img" />
            <p>首页</p>
          </li>
          <li>
            <img :src="footer_img2" />
            <p>发现</p>
          </li>
          <li>
            <img :src="footer_img3" />
            <p>消息</p>
          </li>
          <li>
            <img :src="footer_img4" />
            <p>我的</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
export default {
  data() {
    return {
      cur: 0, //默认选中第一个tab
      isFooter: true,
      isQuestion: true,
      isPhoto: true,
      isInfor: true,
      message8: "认证中介",
      isMedium: true,
      message7: "为你推荐",
      isAdv: true,
      isBtn: true,
      message6: "房东急卖一手通知",
      message5: "降价提醒",
      message4: "实时推荐精准房源",
      message3: "推你所想",
      isThinkleft: true,
      isThink: true,
      isLine: true,
      message2: "火箭卖房",
      inAll: true,
      message1: "神探找房",
      isInhouse: true,
      isFind: true,
      isFdhouse: true,
      swiper: null,
      swiper2: null,
      lists: [
        { img: "../../static/img/banner.png" },
        { img: "../../static/img/banner.png" },
        { img: "../../static/img/banner.png" },
        { img: "../../static/img/banner.png" },
        { img: "../../static/img/banner.png" }
      ],
      lists1: [
        {
          img: "../../static/img/h1.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h2.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h3.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h4.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h5.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h6.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h7.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        },
        {
          img: "../../static/img/h8.png",
          name: "香山别墅5居 朝南北靠近地铁",
          house: "5室2厅3卫|251.64m",
          address: "昌平区 回龙观",
          year: "满五年",
          transform: "靠近地铁",
          img1: "../../static/img/car.png",
          gap: "13号线回龙观(距离388米)",
          price: "1890万",
          area: "65570元/m"
        }
      ],
      lists2: [
        {
          img: "../../static/img/user-logo-001.png",
          name: "李嘉桦",
          say: "发布楼盘照片",
          wechat: "../../static/img/3.png",
          consult: "咨询",
          words:
            "大厂路劲阳光城，高层别墅均有，总价低，户型好，看房子方便，不收费用，享受团购价",
          img1: "../../static/img/hs1.png",
          img2: "../../static/img/hs2.png",
          img3: "../../static/img/hs3.png",
          img4: "../../static/img/hs4.png",
          img5: "../../static/img/4.png",
          map: "伊顿玫瑰1500元/m",
          relay: "../../static/img/5.png",
          relay_num: "68",
          good: "../../static/img/6.png",
          good_num: "899",
          information: "../../static/img/7.png",
          information_num: "19"
        },
        {
          img: "../../static/img/user-logo-002.png",
          name: "李嘉桦",
          say: "发布楼盘照片",
          wechat: "../../static/img/3.png",
          consult: "咨询",
          words:
            "大厂路劲阳光城，高层别墅均有，总价低，户型好，看房子方便，不收费用，享受团购价",
          img1: "../../static/img/hs1.png",
          img2: "../../static/img/hs2.png",
          img3: "../../static/img/hs3.png",
          img4: "../../static/img/hs4.png",
          img5: "../../static/img/4.png",
          map: "伊顿玫瑰1500元/m",
          relay: "../../static/img/5.png",
          relay_num: "68",
          good: "../../static/img/6.png",
          good_num: "899",
          information: "../../static/img/7.png",
          information_num: "19"
        },
        {
          img: "../../static/img/user-logo-003.png",
          name: "李嘉桦",
          say: "发布楼盘照片",
          wechat: "../../static/img/3.png",
          consult: "咨询",
          words:
            "大厂路劲阳光城，高层别墅均有，总价低，户型好，看房子方便，不收费用，享受团购价",
          img1: "../../static/img/hs1.png",
          img2: "../../static/img/hs2.png",
          img3: "../../static/img/hs3.png",
          img4: "../../static/img/hs4.png",
          img5: "../../static/img/4.png",
          map: "伊顿玫瑰1500元/m",
          relay: "../../static/img/5.png",
          relay_num: "68",
          good: "../../static/img/6.png",
          good_num: "899",
          information: "../../static/img/7.png",
          information_num: "19"
        },
        {
          img: "../../static/img/user-logo-004.png",
          name: "李嘉桦",
          say: "发布楼盘照片",
          wechat: "../../static/img/3.png",
          consult: "咨询",
          words:
            "大厂路劲阳光城，高层别墅均有，总价低，户型好，看房子方便，不收费用，享受团购价",
          img1: "../../static/img/hs1.png",
          img2: "../../static/img/hs2.png",
          img3: "../../static/img/hs3.png",
          img4: "../../static/img/hs4.png",
          img5: "../../static/img/4.png",
          map: "伊顿玫瑰1500元/m",
          relay: "../../static/img/5.png",
          relay_num: "68",
          good: "../../static/img/6.png",
          good_num: "899",
          information: "../../static/img/7.png",
          information_num: "19"
        }
      ],
      isHeader: true,
      isHcontent: true,
      isSearch: true,
      footer_img: "../../static/img/11.png",
      footer_img2: "../../static/img/22.png",
      footer_img3: "../../static/img/33.png",
      footer_img4: "../../static/img/44.png",
      imgUrlT2: "../../static/img/1.png",
      imgUrlT: "../../static/img/2.png",
      imgUrl: "../../static/img/search.png",
      imgUrl1: "../../static/img/news.png",
      imgUrl2: "../../static/img/right.png",
      imgUrl3: "../../static/img/nav-001.png",
      imgUrl4: "../../static/img/nav-002.png",
      imgUrl5: "../../static/img/nav-003.png",
      imgUrl6: "../../static/img/nav-004.png",
      imgUrl7: "../../static/img/nav-005.png",
      imgUrl8: "../../static/img/nav-006.png",
      imgUrl9: "../../static/img/nav-007.png",
      imgUrl10: "../../static/img/nav-008.png",
      isImg: true,
      isHot: true,
      isHotcon: true,
      isHottxt: true,
      msg: "今天你赚了吗?今日完成任务可赚10000!",
      isHotleft: true,
      isRight: true,
      isOccupy: true,
      isBlank: true,
      isList: true,
      msg1: "新房",
      msg2: "二手房",
      msg3: "租房",
      msg4: "业主委托",
      msg5: "地图找房",
      msg6: "房价情报",
      msg7: "问答",
      msg8: "AR找房",
      msg9: "降房价！视频房！全在这里！",
      isUllist: true,
      isBanner: true,
      arr: [
        "今天你赚了吗?今日完成任务可赚10000!",
        "今天你赚了吗?今日完成任务可赚10000!",
        "降房价！视频房！全在这里！",
        "今天你赚了吗?今日完成任务可赚10000!",
        "今天你赚了吗?今日完成任务可赚10000!"
      ],
      isSale: true,
      mag10: "热卖新房",
      mesage: "查看全部",
      isAll: true,
      isView: true,
      isDetails: true,
      items: [
        {
          img: "../../static/img/ad-001.png",
          name: "泰和金府大院",
          area: "150-175m",
          price: "8400元/m"
        },
        {
          img: "../../static/img/ad-002.png",
          name: "泰和金府大院",
          area: "150-175m",
          price: "8400元/m"
        },
        {
          img: "../../static/img/ad-001.png",
          name: "泰和金府大院",
          area: "150-175m",
          price: "8400元/m"
        },
        {
          img: "../../static/img/ad-001.png",
          name: "泰和金府大院",
          area: "150-175m",
          price: "8400元/m"
        },
        {
          img: "../../static/img/ad-001.png",
          name: "泰和金府大院",
          area: "150-175m",
          price: "8400元/m"
        }
      ]
    };
  },
  mounted() {
    //轮播图
    this.swiper = new Swiper(".swiper1", {
      pagination: ".swiper-pagination", //分页器
      paginationClickable: true, //按钮点击
      spaceBetween: 30,
      speed: 3000,
      loop: true,
      autoplay: true
    });
    this.swiper2 = new Swiper(".swiper2", {
      loop: false,
      autoplay: false
    });
  },
  methods: {
    // b() {
    //   t = parseInt(x.css("top"));
    //   y.css("top", "20px");
    //   x.animate(
    //     {
    //       top: t - 20 + "px"
    //     },
    //     "slow"
    //   );
    //   if (Math.abs(t) == h - 20) {
    //     y.animate(
    //       {
    //         top: "0px"
    //       },
    //       "slow"
    //     );
    //     z = x;
    //     x = y;
    //     y = z;
    //   }
    //   setTimeout(b, 3000);
    // }
    // $(document).ready(function() {
    // 	$('.swap').html($('.news_li').html());
    // 	x = $('.news_li');
    // 	y = $('.swap');
    // 	h = $('.news_li li').length * 20;
    // 	setTimeout(b, 3000);
    // })
  }
};
</script>

<style scoped>
@import "../../static/css/index.css";
</style>