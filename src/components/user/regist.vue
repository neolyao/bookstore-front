<template>
  <div class="cc">
    <div class="gt">
      <h1>新用户注册</h1>
    </div>
    <div class="tt">
      <el-form :model="userinfo" status-icon :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="userinfo.username" type="text" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userinfo.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="userinfo.repassword" type="password" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="userinfo.email" type="text" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="vcode">
          <el-input v-model="userinfo.vcode" type="text" placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-image style="width: 100px; height: 30px" :src="url"></el-image>
          <el-button type="text" @click="change()">换一张</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')" style="width:100%">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Regist",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userinfo.password !== "") {
          this.$refs.ruleForm.validateField("checkpass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userinfo.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 1000);
    };
    return {
      url: "api/code/image/" + Math.random(),
      userinfo: {
        username: "",
        password: "",
        repassword: "",
        email: "",
        vcode: ""
      },
      rules: {
        password: [
          {
            validator: validatePass,
            message: "请输入密码8-10位数字",
            trigger: "blur"
          }
        ],
        repassword: [{ validator: validatePass2, trigger: "blur" }],
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        vcode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("api/regist", this.userinfo)
            .then(res => {
              if (res.data == "success") {
                this.$router.push("/");
              } else {
                this.$message(res.data);
              }
            })
            .catch(e => {});
        } else {
          this.$message("请输入正确信息");
          return false;
        }
      });
    },
    change() {
      this.url = "/api/code/image/" + Math.random();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gt {
  margin: 0 auto;
  width: 800px;
  height: 80px;
  background-color: yellowgreen;
  float: left;
  text-align: left;
}
.tt {
  margin: 0 auto;
  width: 300px;
  height: 400px;
  margin-top: 100;
  margin-top: 100px;
}
.cc {
  margin: 0 auto;
  width: 800px;
  height: 600px;
  border: yellowgreen 1px solid;
  padding: 0;
}
</style>
