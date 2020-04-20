<template>
  <div class="about">
    <div class="login">
      <div class="txt">登录</div>
      <el-form v-model="loginForm" :rules="rules" ref="ruleForm" label-width="80px" class="from">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psd">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="box">
        <el-button type="primary" @click="submit" class="btnStyle">登录</el-button>
        <el-button type="info" class="btnStyle">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import login from "./loginStyle";
export default login
</script>


<style lang="scss" scoped>
  .about {
    width: 100%;
    height: 100%;
    background: url("../../assets/Bitmap.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 5px rgba(0,0,0,.5); 
    .login {
      width: 400px;
      height: 300px;
      background-color: rgba(0,0,0,.5);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 10px;
      color: #fff;
      font-size: 16px;
      .txt {
        margin: 10px 0;
        text-align: center;
        width: 100%;
        height: 30px;
      }
      .from {
        padding-right: 20px;
        box-sizing: border-box;
      }
      .box {
        margin-top: 40px;
        width: 100%;
        padding-right: 20px;
        text-align: right;
        box-sizing: border-box;
      }
    }
  }
</style>
