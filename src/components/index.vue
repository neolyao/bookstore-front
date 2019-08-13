<template>
  <div class="goodslist">
    <div class="mtop">
      <div class="lhot">
        <img src="../assets/computer/1.jpg" style="width:100%;height:100%" />
      </div>
      <div class="tui">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in images" :key="item">
            <img :src="item" style="width:100%;height:100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="rhot">
        <img src="../../static/books/696673-1_w.jpg" style="width:100%;height:100%" />
      </div>
    </div>

    <div class="divides">
      <div class="divide">
        <el-divider content-position="center">文学类</el-divider>
        <div class="goods">
          <div class="card" v-for="(item,index) in goods" :key="index">
            <img :src="item.src" style="width:100%;height:100%" />
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
            <router-link to="1" style="text-decoration:none">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="divide">
        <el-divider content-position="center">计算机类</el-divider>
        <div class="goods">
          <div class="card" v-for="(item,index) in goods" :key="index">
            <img :src="item.src" style="width:100%;height:100%" />
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
            <router-link to="1" style="text-decoration:none">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="divide">
        <el-divider content-position="center">杂志</el-divider>
        <div class="goods">
          <div class="card" v-for="(item,index) in goods" :key="index">
            <img :src="item.src" style="width:100%;height:100%" />
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
            <router-link to="1" style="text-decoration:none">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="divide">
        <el-divider content-position="center">工具书</el-divider>
        <div class="goods">
          <div class="card" v-for="(item,index) in goods" :key="index">
            <img :src="item.src" style="width:100%;height:100%" />
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
            <router-link :to="'/detail/'+item.id" style="text-decoration:none">{{item.name}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tui {
  float: left;
  width: 600px;
  height: 300px;
}
.lhot {
  float: left;
  width: 300px;
  height: 300px;
  background-color: aqua;
}
.rhot {
  float: left;
  width: 300px;
  height: 300px;
  background-color: chocolate;
}
.mtop {
  margin: 0 auto;
  width: 1200px;
  height: 300px;
  border: #475669 1px;
}
.goods {
  width: 1200px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.card {
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.divide {
  float: left;
  margin: 0 auto;
  width: 1200px;
  height: 400px;
}
.divides {
  margin: 0 auto;
  width: 1200;
  height: 1600px;
  margin-top: 100px;
}
.goodslist {
  margin: 0 auto;
  width: 100%;
  height: 2200px;
}
</style>
<script>
export default {
  data() {
    return {
      images: [
        "../../static/books/app-1.jpg",
        "../../static/books/app-2.jpg",
        "../../static/books/app-3.jpg"
      ],
      goods: [
        {
          id: "111",
          name: "Java 与模式",
          price: "120",
          curprice: "60",
          author: "涛涛",
          press: "机械工业出版社",
          src: "../../static/books/696673-1_w.jpg"
        },
        {
          id: "222",
          name: "java",
          price: "120",
          curprice: "60",
          author: "涛涛",
          press: "机械工业出版社",
          src: "../../static/books/9062293-1_w.jpg"
        },
        {
          id: "333",
          name: "PHP",
          price: "120",
          curprice: "60",
          author: "涛涛",
          press: "机械工业出版社",
          src: "../../static/books/20810282-1_w_1.jpg"
        },
        {
          id: "444",
          name: "C++",
          author: "涛涛",
          price: "120",
          curprice: "60",
          press: "机械工业出版社",
          src: "../../static/books/9317290-1_w.jpg"
        }
      ]
    };
  },
  methods: {
    detail(id) {
      this.$router.push("/regist");
    }
  }
};
</script>