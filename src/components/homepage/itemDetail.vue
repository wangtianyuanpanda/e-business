<template>
    <div class="shop-detail-container">
      <MobileHeader :title="itemName"></MobileHeader>
      <div class="header">
        <div class="search">
          <div style="flex: 1; margin-right: 0.25rem">
            <i class="input-icon"></i>
            <input type="search" placeholder="请输入关键字搜索" v-model="searchKeyword" v-on:input="keywordSearch"/>
          </div>
        </div>
      </div>
      <div class="main-panel">
        <div class="left-panel">
          <p v-for="(item, idx) in curItem" :key="item.type" @click="curIndex = idx" :style="{background: idx === curIndex ? 'white': ''}">{{ item.type }}</p>
        </div>
        <div class="right-panel">
          <div v-for="item in curItem[curIndex].items" :key="item.name" class="good-item">
            <img :src="item.thumb"/>
            <section>
              <p>{{ item.name }}</p>
              <p style="color: #9B9B9B; font-size: 12px">{{ item.remark || '' }}</p>
              <p style="color: #D9594C; position: absolute; bottom: 3px; left: 0">¥ {{ item.price }}</p>
              <img style="width: 14px; height: 14px; position: absolute; bottom: 3px; right: 4px" src="../../assets/add.png" @click="toAdd(item)"/>
            </section>
          </div>
        </div>
      </div>
      <Popup v-model="showModal" position="bottom" hide-on-blur>
        <div>
          <div class="good-item">
            <img :src="curGood.thumb"/>
            <section>
              <p>{{ curGood.name }}</p>
              <p style="color: #9B9B9B; font-size: 12px">{{ curGood.remark || '' }}</p>
              <p style="color: #D9594C; position: absolute; bottom: 3px; left: 0">¥ {{ curGood.price }}</p>
            </section>
          </div>
          <div style="display: flex; height: 26px; line-height: 26px; margin-top: 20px">
            <span>数量：</span>
            <XNumber v-model="num"></XNumber>
          </div>
          <button class="action-bar" @click="toSubmit">加入团购</button>
        </div>
      </Popup>
      <Toast v-model="showToast" type="text" :text="toastText"></Toast>
    </div>
</template>

<script>
  /* eslint-disable */
    import MobileHeader from '../elements/MobileHeader'
    import bus from '../../common/eventBus'
    import { Popup, XNumber, Toast } from 'vux'
    export default {
        name: 'itemDetail',
        data: function () {
          return ({
            itemName: '',
            itemEname: '',
            num: 0,
            curItem: {},
            curIndex: 0,
            showModal: false,
            curGood: {},
            showToast: false,
            toastText: '加入团购',
            dataList: {
              'mcdonald': [
                {
                  type: '小吃',
                  items: [
                    {
                      name: '浓情烤翅',
                      remark: '精选全翅经香料腌制烘烤而成',
                      price: 15,
                      thumb: require('../../assets/nqkc.jpg')
                    },
                    {
                      name: '鱼子酱虾球',
                      remark: '虾仁与鱼子酱混合，过上营养玉米碎炸制而成',
                      price: 16,
                      thumb: require('../../assets/yzjxq.jpg')
                    },
                    {
                      name: '香草凤尾虾',
                      remark: '鲜美弹滑的凤尾大虾，金黄酥脆',
                      price: 27,
                      thumb: require('../../assets/xcfwx.jpg')
                    }
                  ]
                },
                {
                  type: '披萨',
                  items: [
                    {
                      name: '超级至尊披萨',
                      price: 40,
                      remark: '腊肉肠、香肠、火腿、牛肉',
                      thumb: require('../../assets/cjzz.jpg')
                    },
                    {
                      name: '榴莲多多披萨',
                      remark: '精选泰国金枕头榴莲，搭配香浓芝士',
                      price: 46,
                      thumb: require('../../assets/lldd.jpg')
                    },
                    {
                      name: '黄金夏威夷披萨（芝心）',
                      remark: '火腿片、园片菠萝、樱桃番茄',
                      price: 55,
                      thumb: require('../../assets/hjxwy.jpg')
                    },
                    {
                      name: '超级至尊披萨',
                      remark: '腊肉肠、香肠、火腿、牛肉',
                      price: 40,
                      thumb: require('../../assets/cjzz.jpg')
                    },
                    {
                      name: '榴莲多多披萨',
                      remark: '精选泰国金枕头榴莲，搭配香浓芝士',
                      price: 46,
                      thumb: require('../../assets/lldd.jpg')
                    },
                    {
                      name: '黄金夏威夷披萨（芝心）',
                      remark: '火腿片、园片菠萝、樱桃番茄',
                      price: 55,
                      thumb: require('../../assets/hjxwy.jpg')
                    },
                    {
                      name: '超级至尊披萨',
                      remark: '腊肉肠、香肠、火腿、牛肉',
                      price: 40,
                      thumb: require('../../assets/cjzz.jpg')
                    },
                    {
                      name: '榴莲多多披萨',
                      remark: '精选泰国金枕头榴莲，搭配香浓芝士',
                      price: 46,
                      thumb: require('../../assets/lldd.jpg')
                    },
                    {
                      name: '黄金夏威夷披萨（芝心）',
                      remark: '火腿片、园片菠萝、樱桃番茄',
                      price: 55,
                      thumb: require('../../assets/hjxwy.jpg')
                    }
                  ]
                }
              ],
              'pizzahunt': [
                {
                  type: '小吃',
                  items: [
                    {
                      name: '浓情烤翅',
                      remark: '精选全翅经香料腌制烘烤而成',
                      price: 15,
                      thumb: require('../../assets/nqkc.jpg')
                    },
                    {
                      name: '鱼子酱虾球',
                      remark: '虾仁与鱼子酱混合，过上营养玉米碎炸制而成',
                      price: 16,
                      thumb: require('../../assets/yzjxq.jpg')
                    },
                    {
                      name: '香草凤尾虾',
                      remark: '鲜美弹滑的凤尾大虾，金黄酥脆',
                      price: 27,
                      thumb: require('../../assets/xcfwx.jpg')
                    }
                  ]
                },
                {
                  type: '披萨',
                  items: [
                    {
                      name: '超级至尊披萨',
                      price: 40,
                      remark: '腊肉肠、香肠、火腿、牛肉',
                      thumb: require('../../assets/cjzz.jpg')
                    },
                    {
                      name: '榴莲多多披萨',
                      remark: '精选泰国金枕头榴莲，搭配香浓芝士',
                      price: 46,
                      thumb: require('../../assets/lldd.jpg')
                    },
                    {
                      name: '黄金夏威夷披萨（芝心）',
                      remark: '火腿片、园片菠萝、樱桃番茄',
                      price: 55,
                      thumb: require('../../assets/hjxwy.jpg')
                    },
                    {
                      name: '超级至尊披萨',
                      remark: '腊肉肠、香肠、火腿、牛肉',
                      price: 40,
                      thumb: require('../../assets/cjzz.jpg')
                    },
                    {
                      name: '榴莲多多披萨',
                      remark: '精选泰国金枕头榴莲，搭配香浓芝士',
                      price: 46,
                      thumb: require('../../assets/lldd.jpg')
                    },
                    {
                      name: '黄金夏威夷披萨（芝心）',
                      remark: '火腿片、园片菠萝、樱桃番茄',
                      price: 55,
                      thumb: require('../../assets/hjxwy.jpg')
                    },
                    {
                      name: '超级至尊披萨',
                      remark: '腊肉肠、香肠、火腿、牛肉',
                      price: 40,
                      thumb: require('../../assets/cjzz.jpg')
                    },
                    {
                      name: '榴莲多多披萨',
                      remark: '精选泰国金枕头榴莲，搭配香浓芝士',
                      price: 46,
                      thumb: require('../../assets/lldd.jpg')
                    },
                    {
                      name: '黄金夏威夷披萨（芝心）',
                      remark: '火腿片、园片菠萝、樱桃番茄',
                      price: 55,
                      thumb: require('../../assets/hjxwy.jpg')
                    }
                  ]
                },
                {
                  type: '饮料',
                  items: [
                    {
                      name: '可乐',
                      remark: '有气泡的糖水',
                      price: 10,
                      thumb: require('../../assets/kl.jpg')
                    },
                    {
                      name: '雪碧',
                      remark: '有气泡的糖水2.0',
                      price: 10,
                      thumb: require('../../assets/xb.jpg')
                    }
                  ]
                },
              ]
            }
          })
        },
        components: {
          MobileHeader: MobileHeader,
          Popup: Popup,
          XNumber: XNumber,
          Toast: Toast
        },
        created: function () {
          this.itemName = this.$route['query'].name
          this.itemEname = this.$route['query'].eName
          this.curItem = this.dataList[this.itemEname]
          this.curCampus = this.$route['query'].campus
        },
        methods: {
          keywordSearch: function () {

          },
          toAdd: function (item) {
            this.curGood = item
            this.showModal = true
          },
          toSubmit: function () {
            this.showModal = false
            this.toastText = '已加入团购'
            this.showToast = true
            bus.$emit('add', this.curCampus, this.itemName, this.num)
          }
        }
    }
</script>

<style lang="less">
  .shop-detail-container {
    height: 100%;
    font-size: 14px;
    color: #4A4A4A;
    .weui-cell {
      padding: 0;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-left: 1rem;
      svg {
        margin-top: 3px;
      }
      &:before {
        display: none;
      }
      .vux-number-selector svg {
        fill: #262626;
        width: 60%;
      }
      .vux-number-selector-sub {
        border-right: none;
        border: none;
        padding: 0.01rem 0.1rem;
        border-radius: 2px 0 0 2px;
        background: #F5F5F5;
        text-align: center;
        height: 26px !important;
        width: 26px !important;
      }
      .vux-number-selector-plus {
        padding: 0.01rem 0.1rem;
        background: #F5F5F5;
        border: none;
        text-align: center;
        height: 26px !important;
        width: 26px !important;
      }
      .vux-number-input {
        float: left;
        height: 20px;
        font-size: 0.7rem;
        color: #666;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 3px 0;
        text-align: center;
        border-radius: 1px;
        margin: 0 0.05rem;
        background: #F5F5F5;
        border: none;
        width: 2.5rem !important;
      }
    }
    .weui-textarea {
      display: block;
      border: 0;
      resize: none;
      color: inherit;
      font-size: 1em;
      line-height: inherit;
      outline: 0;
      background: #F5F5F5;
      margin-left: -1rem;
      width: 17.75rem;
      height: 3.5rem;
      border-radius: 0.2rem;
      padding: 0.2rem 0.5rem;
    }
    .action-bar {
      position: absolute;
      bottom: 15px;
      width: 335px;
      height: 48px;
      background: #647B80;
      border-radius: 5px;
      opacity: 0.8;
      left: 20px;
      color: white;
    }
    .vux-popup-dialog {
      height: 86% !important;
      background: white !important;
      border-radius: 10px 10px 0 0;
      padding: 10px;
      width: calc(100% - 20px);
    }
    .main-panel {
      display: flex;
      height: calc(100% - 6.6rem);
      padding-top: 4px;
      .left-panel {
        width: 80px;
        text-align: left;
        background: rgba(0 , 0 ,0 ,0.03);
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        p {
          height: 30px;
          line-height: 30px;
          padding: 2px 7px;
          transition: all ease 0.5s;
        }
      }
      .right-panel {
        width: calc(100% - 80px);
        padding: 0 8px;
        text-align: left;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
  }
  .good-item {
    display: flex;
    img {
      width: 5rem;
      height: 5rem;
      padding: 3px;
    }
    section {
      padding: 0 5px;
      position: relative;
      width: calc(100% - 5.2rem);
      text-align: left;
    }
  }
  .header {
    height: 1.9rem;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 2px;
    box-shadow: 0 0.05rem 0.25rem 0 #e9e9e9;
    .search {
      display: flex;
      width: 100%;
      height: 1.9rem;
      background: #FFFFFF;
      .supplier-select-panel {
        background: #F1F1F1;
        height: 1.4rem;
        line-height: 1.4rem;
        border-radius: 0.3rem;
        margin-left: 0.25rem;
        margin-top: 0.25rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        color: #262626;
        font-size: 0.7rem;
        max-width: 35%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .input-icon {
        background-image: url("../../assets/input-search.png");
        background-repeat: no-repeat;
        position: absolute;
        width: 0.75rem;
        height: 0.75rem;
        top: 0.62rem;
        margin-left: 0.9rem;
      }
      input {
        background: #F1F1F1;
        width: calc(100% - 0.25rem);
        height: 1.4rem;
        padding-left: 1.85rem;
        border-radius: 0.3rem;
        font-size: 0.6rem;
        border: none;
        outline: none;
        margin-left: 0.24rem;
        margin-top: 0.25rem;
        padding-right: 6px;
        &::-webkit-input-placeholder {
          color: #BFBFBF;
        }
      }
      .search-icon {
        background: #F1F1F1;
        border-radius: 0.3rem;
        height: 1.4rem;
        width: 2rem;
        //margin-left: 0.25rem;
        margin-top: 0.25rem;
        padding-left: 0.5rem;
        margin-right: 0.25rem;
        img {
          width: 1rem;
          height: 0.65rem;
        }
      }
    }
    .selector-tabbar {
      height: 1.7rem;
      width: 100%;
      background: #F8F8F8;
      display: flex;
      border: #F1F1F1 solid 0.08rem;
      font-weight: 700;
      align-items: center;
      overflow-x: scroll;
      &-box {
        //width: 33.75rem;
      }
      .selector-item {
        height: 1.7rem;
        line-height: 1.7rem;
        display: inline-block;
        font-size: 0.6rem;
        width: auto;
        padding: 0 1rem;
        white-space: nowrap;
        color: #262626;
        text-align: center;
        &-chosen {
          height: 1.7rem;
          line-height: 1.7rem;
          display: inline-block;
          font-size: 0.6rem;
          width: auto;
          padding: 0 0.9rem;
          white-space: nowrap;
          text-align: center;
          color: #647B80;
        }
      }
    }

  }
</style>
