<template>
  <div>
    <div class="container">axios.resours.fetch(ajax)</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("topics", null, r => {
        console.log(r);
      });
    }
  }
};
</script>

<style scoped>
.container {
  color: red;
}
</style>