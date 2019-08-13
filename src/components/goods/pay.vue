<template>
  <div class="pay">
    <el-steps :active="active" finish-status="success" simple>
      <el-step title="我的购物车" icon="el-icon-shopping-cart-2"></el-step>
      <el-step title="确认订单" icon="el-icon-receiving"></el-step>
      <el-step title="完成订单" icon="el-icon-document-checked"></el-step>
    </el-steps>
    <div class="order">
      <label>恭喜订单提交成功</label>
      <label>订单号：{{order_id}}</label>
      <label>应付金额：</label>
      <label>支付方式：</label>
    </div>
    <el-button type="warning">去支付</el-button>
  </div>
</template>
<style scoped>
.order {
  width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
</style>

<script>
export default {
  data() {
    return {
      active: "3",
      order_id: "D1212121"
    };
  }
};
</script>