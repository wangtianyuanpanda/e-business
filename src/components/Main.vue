<template>
    <div style="height: 100%">
      <router-view></router-view>
      <Tabbar>
        <TabbarItem selected link="/home">
          <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
          <span slot="label">首页</span>
        </TabbarItem>
        <TabbarItem link="/order">
          <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
          <span slot="label">订单</span>
        </TabbarItem>
        <TabbarItem link="/person">
          <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
          <span slot="label">我的</span>
        </TabbarItem>
      </Tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
    export default {
        name: 'Main',
        components: {
          Tabbar,
          TabbarItem
        }
    }
</script>

<style lang="less">
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #647B80 !important;
    font-weight: 800 !important;
  }
</style>
