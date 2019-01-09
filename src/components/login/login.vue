<template>
    <div class="login-container">
      <div class="title">
        浙里拼
      </div>
      <div>
        <p>
          <span>账号：</span>
          <input v-model="account.name"/>
        </p>
        <p>
          <span>密码：</span>
          <input type="password" v-model="account.password"/>
        </p>
        <button @click="toSubmit">登陆</button>
      </div>
      <Toast v-model="showToast" :text="toastText" type="text"></Toast>
    </div>
</template>

<style lang="less">
  .login-container {
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    background-image: url("../../assets/background01.jpg");
    background-size: 100% 100%;
    color: white;
    background-attachment: fixed;
    img {
      -webkit-filter: blur(2px);
      opacity: 0.6;
    }
    .title {
      font-size: 34px;
      margin-bottom: 3rem;
    }
    p {
      margin-bottom: 10px;
      span {
        font-size: 16px;
      }
    }
    input {
      background: transparent;
      border: none;
      box-shadow: none;
      outline: none;
      border-bottom: 1px solid white;
      color: white;
      padding: 4px;
    }
    button {
      border: 1px solid white;
      cursor: pointer;
      width: 190px;
      border-radius: 5px;
      height: 35px;
      margin-top: 25px;
      color: white;
      font-size: 16px;
    }
  }
</style>

<script>
  /* eslint-disable */
    import { Toast } from 'vux'
    export default {
      name: 'login',
      data: function () {
        return ({
          account: {
            name: '',
            password: ''
          },
          accounts: [
            {
              name: 'panda',
              password: '123456'
            },
            {
              name: 'xiaoming',
              password: '123456'
            },
            {
              name: 'xiaohong',
              password: '123456'
            },
            {
              name: 'xiaogang',
              password: '123456'
            },
            {
              name: 'xiaowang',
              password: '123456'
            }
          ],
          showToast: false,
          toastText: ''
        })
      },
      components: {
        Toast: Toast
      },
      methods: {
        toSubmit: function () {
          let res = this.accounts.filter((a)=>{return a.name === this.account.name})
          if (res.length === 0) {
            this.showToast = true
            this.toastText = '用户名不存在'
            return
          } else {
            if (res[0].password === this.account.password) {
              location.href = '#/home'
            } else {
              this.showToast = true
              this.toastText = '密码错误'
            }
          }
        }
      }

    }
</script>
