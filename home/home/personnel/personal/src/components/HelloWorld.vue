<template>
  <div>
    <!--头部-->
    <div :class="{header:isHeader}">
      <div :class="{header_txt:isHtxt}">
        <ul :class="{h_list:isHlist}">
          <li :class="{hlist_left:isHleft}">
            <img src="../../static/img/logo.png" alt>
          </li>
          <li :class="{hlist_center:isHcenter}">
            <img src="../../static/img/icon_search.png" alt>
            <input type="text" :class="{search:isSearch}" placeholder="请输入关键词搜索">
          </li>
          <li :class="{hlist_right:isHright}">
            <img src="../../static/img/pin.png" alt>
            <span>{{msg}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!--占位-->
    <div :class="{occupy:isOccupy}">
      <div :class="{banner:isBanner}">
        <img src="../../static/img/banner01.jpg" alt>
      </div>
      <div :class="{top_nav:isTnav}">
        <ul :class="{tnav_list:isTlist}">
          <li>
            <img src="../../static/img/icon01.png" alt>
            <p>{{msg1}}</p>
          </li>
          <li>
            <img src="../../static/img/icon02.png" alt>
            <p>{{msg2}}</p>
          </li>
          <li>
            <img src="../../static/img/icon03.png" alt>
            <p>{{msg3}}</p>
          </li>
        </ul>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{notice:isNotice}">
        <div :class="{ntc_txt:isNtctxt}">
          <div :class="{ntc_img:isNtcimg}">
            <img src="../../static/img/news_tit.png" alt>
          </div>
          <h1>{{msg4}}</h1>
          <p>更多 &gt;</p>
        </div>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{partner:isPartner}">
        <div :class="{partner_txt:isPtxt}">
          <h2>
            <img src="../../static/img/icon_xmhz.png" alt>
            <span>{{msg5}}</span>
          </h2>
          <a href>查看更多 &gt;</a>
        </div>
        <!-- <router-link to="/detail"> -->
        <ul :class="{patn_list:isPatnlist}">
          <li v-for="(item,index) in list" @click="todetial(item)" v-if="index<3">
            <div :class="{first1:isFirst1}">
              <p>
                {{msg6}}
                <span>{{item.content.substring(0,9)}}</span>
              </p>
              <h1>{{item.date}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{msg9}}
                <span>{{msg10}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>
                {{msg11}}
                <span>{{msg12}}</span>
              </p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
          <!-- <li>
            <div :class="{first1:isFirst1}">
              <p>
                {{msg6}}
                <span>{{msg18}}</span>
              </p>
              <h1>{{msg19}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{msg9}}
                <span>{{msg20}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>
                {{msg11}}
                <span>{{msg21}}</span>
              </p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
          <li style="border-bottom:0;">
            <div :class="{first1:isFirst1}">
              <p>
                {{msg6}}
                <span>{{msg14}}</span>
              </p>
              <h1>{{msg15}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{msg9}}
                <span>{{msg16}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>
                {{msg11}}
                <span>{{msg17}}</span>
              </p>
              <h1>{{msg13}}</h1>
            </div>
          </li>-->
        </ul>
        <!-- </router-link> -->
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{partner:isPartner}">
        <div :class="{partner_txt:isPtxt}">
          <h2>
            <img src="../../static/img/icon_tjrc.png" alt>
            <span style="color:#5589ff">{{mesage1}}</span>
          </h2>
          <a href style="color:#f2b300;">
            <img src="../../static/img/refresh.png" alt>
            {{mesage2}}
          </a>
        </div>
        <ul :class="{patn_list:isPatnlist}" style="height:10rem;">
          <li>
            <div :class="{first1:isFirst1}">
              <p style="color:black;">曾先平&nbsp;男&nbsp;32岁&nbsp;求职&nbsp;营养师</p>
              <h1>{{msg8}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{mesage3}}
                <span>{{mesage4}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>{{mesage5}}</p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
          <li>
            <div :class="{first1:isFirst1}">
              <p style="color:black;">李丽丽&nbsp;女&nbsp;24岁&nbsp;求职&nbsp;茶艺师</p>
              <h1>{{msg19}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{mesage6}}
                <span>{{mesage7}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>{{mesage8}}</p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
          <li>
            <div :class="{first1:isFirst1}">
              <p style="color:black;">罗浮&nbsp;男&nbsp;22岁&nbsp;求职&nbsp;网络管理</p>
              <h1>{{msg19}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{mesage6}}
                <span>{{mesage7}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>{{mesage8}}</p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
          <li>
            <div :class="{first1:isFirst1}">
              <p style="color:black;">潘仲达&nbsp;女&nbsp;25岁&nbsp;求职&nbsp;音乐幼教</p>
              <h1>{{msg19}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{mesage6}}
                <span>{{mesage7}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>{{mesage8}}</p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
          <li style="border-bottom:0;">
            <div :class="{first1:isFirst1}">
              <p style="color:black;">圆圆&nbsp;女&nbsp;26岁&nbsp;求职&nbsp;园艺设计</p>
              <h1>{{msg8}}</h1>
            </div>
            <div :class="{first2:isFirst2}">
              <h2>
                {{mesage3}}
                <span>{{mesage4}}</span>
              </h2>
            </div>
            <div :class="{first3:isFirst3}">
              <p>{{mesage5}}</p>
              <h1>{{msg13}}</h1>
            </div>
          </li>
        </ul>
      </div>
      <div :class="{blank:isBlank}"></div>
      <div :class="{partner:isPartner}">
        <div
          :class="{partner_txt:isPtxt}"
          style="border-bottom: 1px solid rgba(169, 169, 169, 0.44);"
        >
          <h2>
            <span style="color:#5589ff">{{msg01}}</span>
          </h2>
          <a href>查看更多 &gt;</a>
        </div>
        <ul :class="{hot:isHot}">
          <li>公共营养师</li>
          <li>塔吊工</li>
          <li>养老护理师</li>
          <li>茶艺师</li>
          <li>插花师</li>
          <li>园林绿化工程师</li>
          <li>建筑工人</li>
          <li>高级早教师</li>
          <li>装饰设计师</li>
          <li>导购员</li>
          <li>促销员</li>
          <li>电子商务师</li>
        </ul>
      </div>
      <div :class="{bottom_banner:isBban}">
        <img src="../../static/img/adpic02.jpg" alt>
      </div>
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
        <ul>
          <li>
            <img src="../../static/img/menu_icon01_r.png" alt>
            <p style="color:#f2b300;">首页</p>
          </li>
          <li>
            <img src="../../static/img/menu_icon02.png" alt>
            <p>发布</p>
          </li>
          <li>
            <img src="../../static/img/menu_icon03.png" alt>
            <p>消息</p>
          </li>
          <li>
            <img src="../../static/img/menu_icon04.png" alt>
            <p>我的</p>
          </li>
        </ul>
      </div>
      <div :class="{fix:isFix}">
        <a href>
          <img src="../../static/img/back_top.png" alt>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHeader: true,
      isHtxt: true,
      isHlist: true,
      isHleft: true,
      isHcenter: true,
      isHright: true,
      isSearch: true,
      msg: "贵阳",
      isBanner: true,
      isTnav: true,
      isOccupy: true,
      isTlist: true,
      msg1: "找人才",
      msg2: "项目合伙人",
      msg3: "人才定制",
      isBlank: true,
      isNotice: true,
      isNtctxt: true,
      msg4: "人和职业免费技能培训专业火热报名中！",
      isNtcimg: true,
      isPartner: true,
      isPtxt: true,
      isPatimg: true,
      msg5: "推荐项目合伙人",
      isMore: true,
      isPatnlist: true,
      isFirst1: true,
      msg6: "项目名称:",
      msg7: "开个茶艺馆",
      msg8: "20小时前",
      msg9: "项目资金:",
      msg10: "20万",
      isFirst2: true,
      msg11: "项目类型",
      msg12: "休闲娱乐",
      msg13: "已认证",
      isFirst3: true,
      msg14: "这是一个好项目",
      msg15: "03-27",
      msg16: "25万",
      msg17: "其他",
      msg18: "开个花店",
      msg19: "昨天",
      msg20: "15万",
      msg21: "园艺服务",
      mesage1: "推荐求职",
      mesage2: "换一批",
      mesage3: "大专 3-5年",
      mesage4: "5000-8000元",
      mesage5: "期望工作地点: 贵阳市",
      mesage6: "高中 3-5年",
      mesage7: "面议",
      mesage8: "期望工作地点: 南明区",
      msg01: "热门求职",
      isHot: true,
      isBban: true,
      isLogin: true,
      isAbout: true,
      isFooter: true,
      isFix: true,
      list: []
      // list:[
      //   {
      //     name: "开个茶艺馆",
      //     a: "开个茶艺馆",
      //     b: "20万",
      //     c: "休闲餐饮",
      //     d:
      //       "圆圆茶艺有限公司是一家专门从事茶艺研究涵盖茶艺文化的茶艺公司，这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍。",
      //     e: "贵州省贵阳市南明区甲秀楼附近",
      //     f:
      //       "圆圆茶艺有限公司是一家专门从事茶艺研究涵盖茶艺文化的茶艺公司，这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍。",
      //     g:
      //       "项目位于具有书香门第的甲秀楼附近，聚集许多文雅人士到此品茶聊天，所以这个项目非常好，具有很高的投资回报率。这里是项目介绍这里是项目介绍这里是项目介绍这里是项目介绍。",
      //     h: "项目有什么优势写在这里，还有其他需要添加介绍的栏目往后面添加"
      //   }
      // ]
    };
  },
  mounted() {
    // this.fetchdata();
    this.fetchdata();
  },
  methods: {
    fetchdata() {
      this.$fetch("/api/test01").then(response => {
        // console.log(response);
        this.list = response.tableData;

        // function aa(b) {
        //   let v = 1;
        //   return v + b;
        // }
        // aa(1);

        // let aa =(b) =>{let v = 1;return v+b}
        // aa(1)

        let arr = {
          list: [
            {
              name: "开个茶艺馆",
              llr: "开个茶艺馆",
              llw: "开个茶艺馆",
              llq: "开个茶艺馆",
              xian:
                "圆圆茶艺有限公司是一家专门从事茶艺研究涵盖茶艺文化的茶艺公司，这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍。"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "dsjkahdkjsahdjksahd"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: ",nc,mzxnc,mzxnc,mxnzc,"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "09897986876v78 xmnbmnbczxczxc"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "说句心里话是滴是滴所多收到收到是"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "创新农村女孩现在农村，明星子女"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "UI与会vkzhkchzkjchzjkxh"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "千与千寻上映了"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "听所有人哭了"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "请问泪点在那块,望告知"
            }
          ],
          list2: [
            {
              name: "开个茶艺馆",
              llr: "开个茶艺馆",
              llw: "开个茶艺馆",
              llq: "开个茶艺馆",
              xian:
                "圆圆茶艺有限公司是一家专门从事茶艺研究涵盖茶艺文化的茶艺公司，这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍这里是该项目的企业介绍。"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "dsjkahdkjsahdjksahd"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: ",nc,mzxnc,mzxnc,mxnzc,"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "09897986876v78 xmnbmnbczxczxc"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "说句心里话是滴是滴所多收到收到是"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "创新农村女孩现在农村，明星子女"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "UI与会vkzhkchzkjchzjkxh"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "千与千寻上映了"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "听所有人哭了"
            },
            {
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              name: "开个茶艺馆",
              xian: "请问泪点在那块,望告知"
            }
          ]
        };
        let first = arr.list;
        let last = arr.list2;
        // console.log(first);
        let setArry = new Set(first);
        let setArry2 = new Set(last);
        console.log(setArry);//去重
        console.log(setArry2);//去重
        // let newArr = Array.from(setArry); //把类数组对象、可迭代对象转化为数组。
        // let newArr1 = Array.from(setArry2); //把类数组对象、可迭代对象转化为数组。
        // console.log(newArr);
        // console.log(newArr1);
        var dd = [...setArry, ...setArry2]; //合并数组
        console.log(dd);
        // let obj = Object.assign(setArry, setArry2); //合并对象 
        // console.log(obj);

       




        // const vue_all = {
        //   name: "steven",
        //   like: "football",
        //   sites: ["Google", "Runoob", "Taobao"]
        // };
        // const vue_all_1 = {
        //   age: "18",
        //   sex: "man",
        //   sites121: ["99", "hello", "my"]
        // };
        // // let newObj = {};
        // let obj1 = Object.assign(vue_all, vue_all_1); //两个对象合并为一个对象
        // console.log(obj1);
        // let a = vue_all.sites; //vue_all中的数组
        // console.log(a);
        // let b = vue_all_1.sites121; //vue_all_1中的数组
        // console.log(b);
        // // let c = a.concat(b); //vue_all和vue_all_1中的数组合并 es5
        // var dd=[...a,...b];//es6合并数组
        // console.log(dd);
      });
    },
    todetial(item) {
      // this.$router.push({ name: 'detail', query: { userId: 123 }})
      this.$router.push({
        name: "detail",
        params: {
          user2: item
        }
      });
    }
  }
};
</script>

<style lang="" scoped>
@import "../../static/css/index.css";
</style>