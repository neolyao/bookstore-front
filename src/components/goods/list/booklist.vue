<template>
  <div class="computer">
    <div class="mcard" v-for="(item,index) in goods" :key="index">
      <img :src="item.src" style="width:200px;height:200px"/>
      <span>
        定价：
        <label style="text-decoration:line-through">{{item.price}}元</label>
      </span>
      <span>
        折扣价：
        <label style="color:red">{{item.curprice}}元</label>
      </span>
      <span>
        出版社：
        <label>
          <router-link to="1" style="text-decoration:none">{{item.press}}</router-link>
        </label>
      </span>
      <span>
        作者：
        <label>
          <router-link to="1" style="text-decoration:none">{{item.author}}</router-link>
        </label>
      </span>
      <router-link :to="'/detail/'+item.bid" style="text-decoration:none">{{item.bname}}</router-link>
    </div>
  </div>
</template>
<style scoped>
.computer {
  margin: 0 auto;
  width: 1200px;

  display: flex;
  flex-wrap: wrap;
  align-content:space-around;
  justify-content:space-between;
}
.mcard {
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: []
    };
  },
  mounted: function() {
    axios
      .get("/api/books/" + this.$route.params.cid)
      .then(res => {
        this.goods = res.data;
      })
      .catch(error => {});
  }
};
</script>