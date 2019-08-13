<template>
  <div class="detail">
    <div class="book_name">
      <label style="font-size:26px">{{this.book.bname}}</label>
    </div>
    <div class="book_info">
      <div class="pic">
        <img :src="book.src" style="width:100%;height:100%" />
      </div>
      <div class="buy">
        <div class="price">
          <span>
            <label style="font-size:18px">图书编号:</label>
            <label>{{this.book.bid}}</label>
          </span>
          <span>
            <label style="font-size:18px">折扣价:</label>
            <label style="font-size:18px;font-weight:;color:red">{{this.book.curprice}}￥</label>
          </span>
          <span>
            <label style="font-size:18px">定价:</label>
            <label style="text-decoration:line-through">{{this.book.price}}￥</label>
            <label style="font-size:18px;margin-left:60px">折扣:</label>
            <label style="color:red">6.9折</label>
          </span>
          <span>
            <label style="font-size:18px">库存:</label>
            <label style="color:red">{{this.book.number}}件</label>
          </span>
        </div>
        <el-divider></el-divider>
        <div class="author">
          <span>
            <label style="font-size:18px">作者:</label>
            <label>{{this.book.author}}</label>
            <label>著</label>
          </span>
          <span>
            <label style="font-size:18px">出版社:</label>
            <label>{{this.book.press}}</label>
          </span>
          <span>
            <label style="font-size:18px">出版时间:</label>
            <label>{{this.book.presstime}}</label>
          </span>
          <span>
            <label style="font-size:18px">版次:1</label>
            <label style="font-size:18px;margin-left:160px">页数:1</label>
            <label style="font-size:18px;margin-left:100px">字数:1</label>
          </span>
           <span>
            <label style="font-size:18px">印刷时间:1989-1-11</label>
            <label style="font-size:18px;margin-left:50px">开本:16开</label>
            <label style="font-size:18px;margin-left:50px">纸张:胶版纸</label>
          </span>
        </div>
        <div class="go">
          <label for="">购买数量</label>
          <el-input-number size="mini" v-model="number" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          <el-button type="success" @click="submitOrder()">立即购买</el-button>
          <el-button type="warning">加入购物车</el-button>
        </div>
      </div>
    </div>
    <div class="book_detail"></div>
  </div>
</template>
<style scoped>
.detail {
  margin: 0 auto;
  width: 1050px;
  height: 800px;
}
.book_name {
  margin: 0 auto;
  width: 100%;
  height: 40px;
}
.book_info {
  margin: 0 auto;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content:space-between;
}
.pic {
  width: 400px;
  height: 400px;
  border:ghostwhite 1px solid;
  box-shadow:ghostwhite 1px 1px 1px 1px ;
}
.buy {
  width: 550px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.price {
  width: 550px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.go {
  width: 550px;
  height: 80px;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.author{
  width: 550px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      number:'1',
      book: {}
    };
  },
  methods: {
    submitOrder() {
      this.$router.push("/cart");
    },
    handleChange(value) {
        console.log(value);
      }
  },
  mounted:function(){
    axios.get("/api/book/"+this.$route.params.bid).then(res=>{
      console.log(res.data);
      this.book=res.data;
      console.log(this.book);
    }).catch(e=>{

    });
  }
};
</script>