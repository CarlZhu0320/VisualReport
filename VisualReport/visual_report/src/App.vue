<template>
  <div id="app">
    <div id="historicalTransactions" class="historicalTransactions">
wwwwww
    </div>
    <div id="oneDayTrading" class="oneDayTrading">
wwwwww
    </div>
    <div id="growthPerMinute" class="growthPerMinute">
wwwwww
    </div>
    <div id="guizhoumapDiv" class="guizhoumapDiv">
      <guizhoumap/>
    </div>
    <div id="growthPerMinuteTotal" class="growthPerMinuteTotal">
wwwwww
    </div>
  </div>
</template>

<script>
import guizhoumap from './components/guizhoumap'

export default {
  name: 'App',
  components: {
    guizhoumap
  }
}
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
  .historicalTransactions {
    width: 25%;
    height: 33.3%;
    position: absolute;
    background: red;
    top: 0px;
    left: 0px;
  }
  .oneDayTrading {
    width: 25%;
    height: 33.3%;
    background: black;
    position: absolute;
    top: 33.3%;
    left: 0px;
  }
  .growthPerMinute {
    width: 25%;
    height: 33.3%;
    background: rgb(153, 133, 133);
    position: absolute;
    top: 66.6%;
    left: 0px;
  }
  .guizhoumapDiv {
    width: 50%;
    height: 66.6%;
    position: absolute;
    left: 25%;
    top: 0px;
  }
  .growthPerMinuteTotal {
    width: 25%;
    height: 66.6%;
    background: rgb(87, 131, 69);
    position: absolute;
    right: 0px;
    top: 0px;
  }
</style>

