<template>
    <div class="home-page-container">
      <MobileHeader title="首页" :isBackShown="false"></MobileHeader>
      <div class="header">
        <div class="search">
          <div style="flex: 1; margin-right: 0.25rem">
            <i class="input-icon"></i>
            <input type="search" placeholder="请输入关键字搜索" v-model="searchKeyword" v-on:input="keywordSearch"/>
          </div>
          <div class="search-icon">
            <!--<img src="../../assets/search.png" v-on:click="toggleModal"/>-->
            <span v-on:click="toggleModal" style="font-size: 12px; color: rgb(111, 111, 111);">{{campus[curCampus]}}</span>
          </div>
          <XDialog v-model="showCampus" class="mobile-setting-dialog" hide-on-blur>
            <div class="campus-selector">
              <p @click="choose('zjg')">紫金港</p>
              <p @click="choose('yq')">玉泉</p>
              <p @click="choose('xx')">西溪</p>
              <p @click="choose('hjc')">华家池</p>
              <p @click="choose('zj')">之江</p>
            </div>
          </XDialog>
        </div>
      </div>
      <div class="main-panel">
        <div v-for="item in dataList" class="shop-item" v-bind:key="item.name" v-if="item.name.includes(searchKeyword)">
          <img :src="item.thumb"/>
          <section>
            <p>{{ item.name }}</p>
            <p>{{ item.location }}</p>
            <p style="color: #D9594C; font-size: 12px">
              <span v-if="item.cur && item.total">团购：</span>
              <span v-if="item.cur">{{ item.cur }} /</span>
              <span v-if="item.total">{{ item.total }}</span>
              <span>{{ item.remark || '' }}</span>
            </p>
          </section>
          <img src="../../assets/right-arrow.png" class="arrow" @click="toSubmit(item)"/>
        </div>
      </div>
    </div>
</template>

<style lang="less">
  @import "./homepage";
</style>

<script>
    import { Popover, XDialog } from 'vux'
    import MobileHeader from '../elements/MobileHeader'
    import bus from '../../common/eventBus'
    export default {
        name: 'homePage',
        components: {
          MobileHeader: MobileHeader,
          Popover: Popover,
          XDialog: XDialog
        },
        created: function () {
          this.choose('zjg', true)
          bus.$on('add', (campus, shop, number) => {
            let s = this.shops[campus].filter((i) => i.name === shop)[0]
            s.cur += number
            console.log(this.shops)
          })
        },
        data: function () {
          return ({
            searchKeyword: '',
            showCampus: false,
            curCampus: 'zjg',
            dataList: [],
            campus: {
              'zjg': '紫金港',
              'yq': '玉泉',
              'xx': '西溪',
              'hjc': '华家池',
              'zj': '之江'
            },
            shops: {
              'zjg': [
                {
                  name: '必胜客',
                  ename: 'pizzahunt',
                  location: '杭州曙光路111号',
                  thumb: require('../../assets/pizzahunt.jpg'),
                  cur: 2,
                  total: 5
                },
                {
                  name: '麦当劳',
                  ename: 'mcdonald',
                  location: '杭州紫金花路111号',
                  thumb: require('../../assets/mcdonald.jpg'),
                  cur: 4,
                  total: 8
                },
                {
                  name: '老柳州螺蛳粉',
                  ename: 'lsf',
                  location: '教工路100号',
                  thumb: require('../../assets/lsf.jpg'),
                  cur: 1,
                  total: 5
                },
                {
                  name: '黄焖鸡米饭',
                  ename: 'hmj',
                  location: '杭州曙光路111号',
                  thumb: require('../../assets/hmj.jpg'),
                  cur: 2,
                  total: 5
                },
                {
                  name: '老娘舅',
                  ename: 'lnj',
                  location: '黄龙体育中心200号',
                  thumb: require('../../assets/lnj.jpg'),
                  cur: 1,
                  total: 5
                },
                {
                  name: '老娘舅',
                  ename: 'lnj',
                  location: '黄龙体育中心200号',
                  thumb: require('../../assets/lnj.jpg'),
                  remark: '等待发起团购'
                }
              ],
              'yq': [
                {
                  name: '黄焖鸡米饭',
                  ename: 'hmj',
                  location: '杭州曙光路111号',
                  thumb: require('../../assets/hmj.jpg'),
                  cur: 2,
                  total: 5
                },
                {
                  name: '麦当劳',
                  ename: 'mcdonald',
                  location: '杭州紫金花路111号',
                  thumb: require('../../assets/mcdonald.jpg'),
                  cur: 4,
                  total: 8
                },
                {
                  name: '老娘舅',
                  ename: 'lnj',
                  location: '黄龙体育中心200号',
                  thumb: require('../../assets/lnj.jpg'),
                  cur: 1,
                  total: 5
                }
              ],
              'xx': [
                {
                  name: '必胜客',
                  ename: 'pizzahunt',
                  location: '杭州曙光路111号',
                  thumb: require('../../assets/pizzahunt.jpg'),
                  cur: 2,
                  total: 5
                },
                {
                  name: '麦当劳',
                  ename: 'mcdonald',
                  location: '杭州紫金花路111号',
                  thumb: require('../../assets/mcdonald.jpg'),
                  cur: 4,
                  total: 8
                }
              ],
              'hjc': [
                {
                  name: '必胜客',
                  ename: 'pizzahunt',
                  location: '杭州曙光路111号',
                  thumb: require('../../assets/pizzahunt.jpg'),
                  cur: 2,
                  total: 5
                },
                {
                  name: '麦当劳',
                  ename: 'mcdonald',
                  location: '杭州紫金花路111号',
                  thumb: require('../../assets/mcdonald.jpg'),
                  cur: 4,
                  total: 8
                },
                {
                  name: '老柳州螺蛳粉',
                  ename: 'lsf',
                  location: '教工路100号',
                  thumb: require('../../assets/lsf.jpg'),
                  cur: 1,
                  total: 5
                }
              ],
              'zj': [
                {
                  name: '必胜客',
                  ename: 'pizzahunt',
                  location: '杭州曙光路111号',
                  thumb: require('../../assets/pizzahunt.jpg'),
                  cur: 2,
                  total: 5
                },
                {
                  name: '麦当劳',
                  ename: 'mcdonald',
                  location: '杭州紫金花路111号',
                  thumb: require('../../assets/mcdonald.jpg'),
                  cur: 4,
                  total: 8
                },
                {
                  name: '老柳州螺蛳粉',
                  ename: 'lsf',
                  location: '教工路100号',
                  thumb: require('../../assets/lsf.jpg'),
                  cur: 1,
                  total: 5
                }
              ]
            }
          })
        },
        methods: {
          keywordSearch: function () {

          },
          toggleModal: function () {
            this.showCampus = !this.showCampus
          },
          choose: function (campus, first = false) {
            this.curCampus = campus
            this.dataList = this.shops[campus]
            if (!first) {
              this.showCampus = !this.showCampus
            }
          },
          toSubmit: function (item) {
            location.href = `'#/item?eName=${item.ename}&name=${item.name}&campus=${this.curCampus}`
          },
          handleSubmit: function () {

          }
        }
    }
</script>
