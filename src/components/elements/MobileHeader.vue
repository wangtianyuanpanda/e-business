
<template>
  <div class="mobile-header" :style="{ boxShadow: isShadowHidden ? 'none' : ''}">
    <img class="back-img" v-if="isBackShown !== false" @click="goBack" src="../../assets/back-line.png"/>
    <h3>{{title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
  /* eslint-disable */
  import './MobileHeader.less';
  export default {
    name: 'MobileHeader',
    props: ['title', 'isBackShown', 'isShadowHidden'],
    methods: {
      goBack: function () {
        history.go(-1);
      },
    },
  }
</script>
