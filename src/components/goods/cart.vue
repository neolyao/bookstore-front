<template>
  <div class="cart">
    <div class="step">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="我的购物车" icon="el-icon-shopping-cart-2"></el-step>
        <el-step title="确认订单" icon="el-icon-receiving"></el-step>
        <el-step title="完成订单" icon="el-icon-document-checked"></el-step>
      </el-steps>
    </div>
    <el-divider></el-divider>
    <div class="goodslist">
      <div class="tablelist">
        <el-table
          ref="multipleTable"
          border
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="60"></el-table-column>
          <el-table-column label="商品" width="300" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.src" width="80" height="60" />
              <router-link
                :to="'/detail/'+scope.row.id"
                style="text-decoration:none"
              >{{scope.row.name}}</router-link>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="定价" width="180" align="center"></el-table-column>
          <el-table-column prop="curprice" label="你的价格" width="160" align="center"></el-table-column>
          <el-table-column label="数量" width="200" align="center">
            <template slot-scope="scope">
              <el-input-number
                size="mini"
                v-model="scope.row.num"
                @change="handleChange"
                :min="1"
                :max="10"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="单品总价" width="200">
            <template slot-scope="scope">{{scope.row.num*scope.row.curprice}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="total">
        <label>合计：{{this.subtotal}}元</label>
      </div>
      <div style="float:right;margin-top:50px">
        <el-button type="info">继续购物</el-button>
        <el-button type="danger" @click="submitOrder">提交订单</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cart {
  margin: 0 auto;
  width: 1200px;
  height: 800px;
}
.step {
  margin: 0 auto;
  width: 1200px;
  height: 80px;
}
.goodslist {
  margin: 0 auto;
  width: 1200px;
  height: 600px;
}
.total {
  margin: 0 auto;
  width: 1200px;
  height: 50px;
  background-color:floralwhite;
  display: flex;
  justify-content:flex-end;
  align-items: center
}
</style>
<script>
export default {
  data() {
    return {
      subtotal: "111",
      active: 0,
      tableData: [
        {
          id: "FYGGIGI56677YT1HO12OBHFESIU",
          name: "Java 与模式",
          price: "120",
          curprice: "60",
          author: "涛涛",
          press: "机械工业出版社",
          presstime: "1899-1-2",
          number: "2222",
          src: "../../static/books/696673-1_w.jpg",
          num: "3"
        },
        {
          id: "FYGGIGI56677YT1HO12OBHFESIU",
          name: "Java 与模式",
          price: "120",
          curprice: "60",
          author: "涛涛",
          press: "机械工业出版社",
          presstime: "1899-1-2",
          number: "2222",
          src: "../../static/books/696673-1_w.jpg",
          num: "3"
        },
        {
          id: "FYGGIGI56677YT1HO12OBHFESIU",
          name: "Java 与模式",
          price: "120",
          curprice: "60",
          author: "涛涛",
          press: "机械工业出版社",
          presstime: "1899-1-2",
          number: "2222",
          src: "../../static/books/696673-1_w.jpg",
          num: "3"
        }
      ]
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    handleChange(value) {
      console.log(value);
    },
    handleDelete(id) {
      console.log("delete" + id);
    },
    submitOrder() {
      this.$router.push("/order");
    }
  }
};
</script>