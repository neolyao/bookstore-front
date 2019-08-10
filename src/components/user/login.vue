<template>
  <div class="login">
    <div class="top">
      <h2>用户登录</h2>
    </div>
    <div class="mid">
      <el-form :model="user" status-icon :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model="user.username"
            type="text"
            placeholder="ID/邮箱/手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="user.password"
            type="password"
            placeholder="密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" style="width:100%" @click="submit('loginForm')">登录</el-button>
        </el-form-item>
        <el-form-item>{{error}}</el-form-item>
      </el-form>
    </div>
    <div class="bottom">
      <router-link to="/regist">新用户注册</router-link>
      <router-link to>忘记密码</router-link>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
.login {
  margin: 0 auto;
  width: 400px;
  height: 300px;
  border: hotpink 1px solid;
  margin-top: 200px;
}
.top {
  margin: 0 auto;
  width: 400px;
  height: 50px;
  background-color: hotpink;
}
.mid {
  margin: 0 auto;
  width: 250px;
  height: 200px;
  margin-top: 20px;
}
.bottom {
  margin: 0 auto;
  width: 400;
  height: 50px;
  text-align: right;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      error: "",
      user: { username: "", password: "" },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("api/login", this.user)
            .then(res => {
              if (res.data == "success") {
                this.$router.push("/main");
              } else {
                this.$message(res.data);
              }
            })
            .catch(e => {});
        } else {
          return false;
        }
      });
    }
  }
};
</script>
