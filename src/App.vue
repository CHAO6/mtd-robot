<template>
  <div id="app">
  </div>
</template>

<script>
import NFTBuy from '@/js/NFTBuy.js'
import NFTBrush from '@/js/NFTBrush.js'
import NFTShopping from '@/js/NFTShopping.js'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
    // 抢购机器人
    NFTBuy()
    // 刷单交易机器人
    NFTBrush()
    // 扫单交易机器人
    NFTShopping()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
