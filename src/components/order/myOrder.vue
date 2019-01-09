<template>
  <div class="order-container">
    <MobileHeader title="订单" :isBackShown="false"></MobileHeader>
    <div class="order-list">
      <div v-for="item in orders" class="order-item" :key="item.shop">
        <img :src="item.thumb"/>
        <section>
          <p style="font-size: 14px">{{item.shop}}</p>
          <p style="color: rgb(155, 155, 155);">{{item.content}}</p>
          <p>状态：{{status[item.status]}}</p>
          <p style="color: rgb(217, 89, 76);">¥ {{item.price}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
    /* eslint-disable */
    import MobileHeader from '../elements/MobileHeader'
    export default {
        name: "myOrder",
        components : {
          MobileHeader: MobileHeader
        },
        data: function () {
          return ({
            status: [
              '团购中',
              '配送中',
              '团购已结束',
              '商家准备商品中'
            ],
            orders: [
              {
                shop: '必胜客',
                thumb: require('../../assets/pizzahunt.jpg'),
                content: '超级至尊披萨*1，浓情烤翅*2，可乐*1',
                price: 56,
                status: 0
              },
              {
                shop: '麦当劳',
                thumb: require('../../assets/mcdonald.jpg'),
                content: '中薯*1，巨无霸*2，热可可*1',
                price: 46,
                status: 1
              },
              {
                shop: '黄焖鸡米饭',
                thumb: require('../../assets/hmj.jpg'),
                content: '黄焖鸡套餐*1，荷包蛋*1',
                price: 20,
                status: 2
              }
            ]
          })
        }
    }
</script>

<style lang="less">
  .order-container {
    height: 100%;
    .order-list {
      position: relative;
      padding: 0.5rem;
      height: calc(100% - 7.6rem);
      overflow-y: auto;
      overflow-x: hidden;
      .order-item {
        box-shadow: 0px 0px 4px 0px #c8d1d3;
        border-radius: 4px;
        margin-bottom: 6px;
        padding: 5px;
        display: flex;
        font-size: 12px;
        img {
          width: 4rem;
          height: 4rem;
        }
        section {
          padding: 10px;
          text-align: left;
        }
      }
    }
  }
</style>
