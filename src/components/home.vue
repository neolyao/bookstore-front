<template>
  <div class="container">
    <div class="header">
      <div style="width:100%;height:30px;background-color:#f5f5f5">
        <div class="title">
          <router-link to="/login">会员登录</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/regist">免费注册</router-link>
        </div>
      </div>
      <div class="banner">
        <div class="logo">
          <img src="../../static/images/logo.gif" style="width:200px;height:50px" />
        </div>
        <div class="search">
          <el-input v-model="input" placeholder="请输入内容" style="width:85%;"></el-input>
          <el-button type="danger" icon="el-icon-search" style="width:15%;">搜索</el-button>
          <label>热搜词:</label>
        </div>
        <div class="mycart">
          <el-button type="danger" icon="el-icon-shopping-cart-2" plain @click="lookCart">我的购物车</el-button>
          <el-button type="info" plain @click="lookOrder">我的订单</el-button>
        </div>
      </div>
      <div class="menu">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="hotpink"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">全部分类</template>
            <el-menu-item v-for="(item,i) in category" :key="i" :index="item.cid">{{item.cname}}</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-2">选项2</el-menu-item>
              <el-menu-item index="1-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item v-for="(item,i) in category" :key="i" :index="item.cid">{{item.cname}}</el-menu-item>
        </el-menu>
        <el-divider></el-divider>
      </div>
    </div>
    <div class="main">
      <router-view :key="key" />
    </div>
    <div class="footer"></div>
  </div>
</template>
<style>
.title {
  margin: 0 auto;
  width: 1200px;
}
.search {
  margin-top: 20px;
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.logo {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mycart {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner {
  margin: 0 auto;
  width: 1200px;
  height: 120px;
  display: flex;
  justify-content: space-between;
}
.menu {
  margin: 0 auto;
  width: 1200px;
  height: 60px;
}
.main {
  margin: 0 auto;
  margin-top: 50px;
  width: 1200px;
}

.footer {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;
  text-align: center;
}
</style>
<script>
import axios from "axios";
export default {
  provide() {
    return {
      reload: this.isRouterAlive
    };
  },
  data() {
    return {
      input: "",
      category: []
    };
  },
  methods: {
    handleSelect(key) {
      if (key == "/") {
        this.$router.push(key);
      } else {
        this.$router.push({ name: "BookList", params: { cid: key } });
      }
    },
    lookCart() {
      this.$router.push("/cart");
    },
    lookOrder() {
      this.$router.push("/order");
    }
  },
  mounted: function() {
    axios
      .get("/api/category")
      .then(res => {
        console.log(res.data);
        this.category = res.data;
      })
      .catch(e => {});
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  }
};
</script>
