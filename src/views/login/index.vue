<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      class="navbar"
      left-arrow
      title="账号登录"
      @click-left="backToPrePage"
    >
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- 手机号表单 -->
    <van-form class="form" @submit="login">
      <van-field
        v-model="username"
        name="username"
        type="text"
        label=""
        placeholder="请输入账号"
        :rules="[{ required: false, message: '请填写账号' }]"
      >
      </van-field>
      <van-field
        v-model="password"
        name="password"
        type="password"
        label=""
        placeholder="请输入密码"
        :rules="[{ required: false, message: '请填写密码' }]"
      >
      </van-field>
      <!-- 登录按钮 -->
      <div style="margin: 16px">
        <van-button class="btn" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div style="text-align: center">
      <a href="#" style="font-size: 14px; color: #333">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      pattern: /^[a-zA-Z0-9]{5,8}$/,
      reg: /^[a-zA-Z0-9]{5,12}$/
    }
  },
  methods: {
    backToPrePage () {
      this.$router.back()
    },
    async login () {
      if (this.username.trim() === '' || this.password.trim() === '') {
        this.$toast('账号密码不能为空')
      } else if (!this.pattern.test(this.username)) {
        this.$toast('账号格式5-8位的字母和数字')
      } else if (!this.reg.test(this.password)) {
        this.$toast('密码格式5-12位的字母和数字')
      } else {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner'
        })
        const res = await login(this.username, this.password)
        console.log(res)
        if (res.status === 200) {
          this.$toast.success('登录成功')
        } else {
          this.$toast.fail('登录失败')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.navbar {
  background-color: rgb(28, 182, 118);
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
.form {
  .btn {
    background-color: rgb(28, 182, 118);
    border-color: rgb(28, 182, 118);
  }
}
</style>
