<template>
  <div class="order">
    <el-steps :active="active" finish-status="success" simple>
      <el-step title="我的购物车" icon="el-icon-shopping-cart-2"></el-step>
      <el-step title="确认订单" icon="el-icon-receiving"></el-step>
      <el-step title="完成订单" icon="el-icon-document-checked"></el-step>
    </el-steps>
    <div class="address">
      <div style="width:1200px;height:50px;background-color:lightskyblue">
        <label>收货地址</label>
        <el-button type="text">修改</el-button>
      </div>
      <div style="width:1200px;height:80px">{{this.address}}</div>
      <div style="width:1200px;height:400px">
        <div style="font-size:36px;width:1200px;height:50px;background-color:lightskyblue;">商品清单</div>
        <el-table :data="tableData" stripe style="width: 100%;margin-top:20px">
          <el-table-column label="商品名称" width="400">
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column label="数量" width="400">
            <template slot-scope="scope">{{scope.row.num}}</template>
          </el-table-column>
          <el-table-column label="合计">
            <template slot-scope="scope">{{scope.row.sum}}元</template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div style="float:right">
      <el-button type="danger" style="margin-top: 12px;" @click="next">确认订单</el-button>
    </div>
  </div>
</template>
<style scoped>
.address {
  margin-top: 50px;
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: lightskyblue 1px solid;
}
.order {
  margin: 0 auto;
  width: 1200px;
  height: 800px;
}
</style>
<script>
export default {
  data() {
    return {
      active: 1,
      address: "成都市新津县",
      tableData: [
        {
          name: "javascript",
          num:'12',
          sum:'22'
        }
      ]
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      this.$router.push("/pay");
    }
  }
};
</script>