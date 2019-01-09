<template>
  <div class="person-center-container">
    <MobileHeader title="我的" :isBackShown="false"></MobileHeader>
    <div>
      <div class="top-panel">
        <img src="../../assets/photo.jpg"/>
        <section>
          <p style="font-size: 16px; font-weight: 800">panda</p>
          <p>手机号：188****8888</p>
          <p>性别：女</p>
        </section>
      </div>
      <div class="divider"></div>
      <div class="bottom-panel">
        <p>
          <img src="../../assets/email.png"/>
          我的钱包
        </p>
        <p>
          <img src="../../assets/email.png"/>
          我的红包</p>
        <p>
          <img src="../../assets/order.png"/>
          收藏夹</p>
        <p>
          <img src="../../assets/contact.png"/>
          我的好友</p>
      </div>
      <button @click="logout">退出登陆</button>
    </div>
  </div>
</template>

<script>
    import MobileHeader from '../elements/MobileHeader'
    export default {
        name: 'person',
        components: {
          MobileHeader: MobileHeader
        },
        methods: {
          logout: function () {
            location.href = '#/login'
          }
        }
    }
</script>

<style lang="less">
  .person-center-container {
    button {
      background: #D3E4E8;
      color: #4A4A4A;
      font-size: 0.7rem;
      width: 17.25rem;
      height: 2.6rem;
      margin-top: 8.75rem;
      margin-bottom: 3.05rem;
      border-radius: 0.25rem;
      box-shadow: 0 0 0.01rem #D4D3D8;
    }
    .top-panel {
      padding: 10px;
      display: flex;
      font-size: 12px;
      img {
        width: 4rem;
        height: 4rem;
      }
      section {
        margin-left: 10px;
        text-align: left;
      }
    }
    .divider {
      width: 100%;
      height: 1rem;
      background:rgba(242,243,244,1);
    }
    .bottom-panel {
      p {
        height: 36px;
        padding: 5px 10px;
        line-height: 36px;
        text-align: left;
        font-size: 12px;
        border-bottom: 1px solid #F1F1F1;
        color: #4A4A4A;
        img {
          width: 0.9rem;
          vertical-align: middle;
          margin-right: 0.4rem;
        }
      }
    }
  }
</style>
