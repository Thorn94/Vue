<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ t2 }}</h3>
    <h3>{{ t3 }}</h3>
    <h3>{{ t4 }}</h3>

    <p v-for="item1 in list">{{item1}}</p>
    <p>{{q}}</p>
    <p>{{m}}</p>
    <p>{{n}}</p>
    <p>{{t5}}</p>
    <p>{{t6}}</p>
    <p>{{t7}}</p>
    <p>{{t8}}</p>
    <ul>
      <li v-for="item in t1">
        {{item.title}}
        <p class="p">{{item.string}}</p>
      </li>
      <li v-for="item in t1">
        {{item.article}}
        <p class="p">{{item.string}}</p>
      </li>

      <!-- <li v-for="item in t1">{{item.a}}

      </li>-->
      <!-- <li v-for="item in t1">{{item.string}}</li> -->
    </ul>
    <!-- <ul>
      <li>
        <router-link to="/login">登录</router-link>
        <router-view></router-view>
      </li>
      <li>
        <router-link to="/register">注册</router-link>
        <router-view></router-view>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      t1: [],
      t2: "",
      t3: "",
      t4: "",
      msg: "Welcome to My Vue.js App",
      list: [],
      q: "",
      m: "",
      n: "",
      t5: "",
      t6: "",
      t7: "",
      t8: ""
    };
  },
  mounted() {
    // this.fetchdata();
    this.fetchdata2();
  },
  methods: {
    // fetchdata() {
    //   this.$fetch("/api/test01").then(response => {
    //     console.log(response);
    //     this.t1 = response.data; //里面有data就 .
    //   });
    //   var tq =
    //     '[{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"}]';
    //   var tq1 = JSON.parse(tq);
    //   for (let index = 0; index < tq1.length; index++) {
    //     console.log(tq1[index]);
    //     var arr = new Array();
    //     var arr1 = new Array();
    //     var j = 0;
    //     for (var i in tq1[index]) {
    //       //objson[0]为json对象
    //       arr[j] = i; //json key
    //       arr1[j] = tq1[0][i]; //json value
    //       j++;
    //     }
    //     console.log(arr);
    //     console.log(arr1);
    //   }
    //   // const p = { width: 30, height: 20, weight: 60 };
    //   // const pArr = Object.keys(p).map(key => ({
    //   //   key,
    //   //   value: p[key]
    //   // }));
    //   // var keyy = Object.keys(ss[i]);es6写法
    // },
    fetchdata2() {
      // this.$fetch("/api/test02").then(response => {
      //   console.log(response);
      //   this.t3 = response;
      //   this.t3 =
      //     response.relativePath.a.b.c + "+++++++" + response.nested.a.b.c;
      // });
      // //解析字符串
      // var tt =
      //   '{"foo":"Hello","nested":{"a":{"b":{"c":"Mock.js"}}},"relativePath":{"a":{"b":{"c":"Hello Mock.js"}}}}';
      // var q = JSON.parse(tt); //字符串转换为对象
      // console.log(q.relativePath.a.b.c + "+++++++" + q.nested.a.b.c);
      // this.t2 = q.relativePath.a.b.c + "+++++++" + q.nested.a.b.c;

      //遍历数组
      var t9 = ["1", "2", "3", 4, 5, 6.1, 3, 0, 0.1];
      //去重
      function uniq(array) {
        var temp = [];
        for (var i = 0; i < array.length; i++) {
          //如果当前数组的第i项在当前数组中第一次出现的位置是i，才存入数组；否则代表是重复的
          if (array.indexOf(array[i]) == i) {
            temp.push(array[i]);
          }
        }
        return temp;
      }
      // console.log(uniq(t9));
      var l = uniq(t9); //去重完后的数组
      //排序
      l.sort(function(a, b) {
        return b - a;
      });
      console.log(l);
  
      var min = l[0]; //最小数
      var max = l[l.length - 1]; //最大数
      console.log(min, max);
      //取中位数
      var aa = l.length-1;
      var bb = Math.floor(aa / 2);
      var mid = (l[bb] + l[aa - bb]) / 2;
      console.log(mid);

      var sum = 0;
      for (var k = 0; k < t9.length; k++) {
        // console.log(t9[k]);
        sum += Number(t9[k]); //求和
      }
      this.t7 = sum;
      //  console.log(a);
      var b = sum / t9.length; //平均数
      this.t8 = b;

      // var sum = 0;
      // this.list = t9;
      // for (var k = 0; k < t9.length; k++) {
      //   console.log(t9[k]);
      //   sum += Number(t9[k]); //求和
      // }
      // this.q = sum;
      // this.m = parseInt(sum); //取整
      // this.n = sum.toFixed(2); //保留两位小数

      // var x = 1;
      // for (var h = 0; h < t9.length - 2; h++) {//去掉后两个做运算
      //   console.log(t9[h]);
      //   x*=Number(t9[h]);//乘
      // }
      // this.t5 = x;
      // var f =t9[t9.length-1];//获取最后一个数字
      // var g = t9[t9.length-2]//获取倒数第二个数字
      // var sum1 = 0;
      // sum1=Number(f + g);
      // console.log(sum1)
      // var c= x+sum1;
      // console.log(c);
      // this.t6=c;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-top: 10%;
}
h1,
h2 {
  font-weight: normal;
  font-size: 0.5rem;
  color: black;
  font-weight: bold;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
  font-size: 0.3rem;
  font-weight: bold;
  width: 100%;
}
li {
  display: inline-block;
  margin: 0 3%;
  border-bottom: 1px dashed red;
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
  width: 94%;
  text-align: center;
}
a {
  color: #42b983;
}
/* .niLine{
 border: 0;
} */
</style>
