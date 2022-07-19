<template>
  <div class="home">
    <div class="left">
      <p>欢迎光临</p>
    </div>
    <div class="right">
      <div class="center" :rules="loginRules">
        <h1>欢迎回来</h1>
        <div class="line">
          <span class="line-1"></span>
          <span>账号密码登录</span>
          <span class="line-1"></span>
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
              placeholder="请输入用户名"
              v-model="loginForm.username"
              prefix-icon="el-icon-user-solid"
              clearable
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              clearable
              v-model="loginForm.password"
              show-password
              prefix-icon="el-icon-lock"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="but" round @click="$router.push('layout/index')">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  .left {
    width: 67%;
    height: 100%;
    background-color: #6366f1;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 700;
      color: #fff;
      font-size: 48px;
    }
  }
  .right {
    flex: 1;
    .center {
      height: 300px;
      margin-top: 45%;
      // background-color: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      h1 {
        text-align: center;
        width: 100%;
      }
      .line {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 20px;
        span {
          padding-left: 10px;
          padding-right: 10px;
          color: #c0c4cc;
        }
        .line-1 {
          --tw-bg-opacity: 1;
          background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
          height: 1px;
          width: 4rem;
        }
      }
      .el-input {
        width: 300px;
      }
      .el-button {
        width: 300px;
        border: 0;
      }
    }
  }
}
.but {
  background-color: #6366f1;
}
</style>
