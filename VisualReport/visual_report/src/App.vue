<template>
  <div id="app">
    <div id="title" class="title">
      <div id="bankName" class="bankName">
        <span>{{bankName}}</span>
      </div>
      <div id="date" class="date">
        <date></date>
      </div>
      <div id="operation" class="operation">
        <button>
          总览
        </button>
        <button>
          轮循
        </button>
      </div>
    </div>
    <div id="historicalTransactions" class="historicalTransactions">
      <historicalTransactions></historicalTransactions>
    </div>
    <div id="oneDayTrading" class="oneDayTrading">
      <oneDayTrading></oneDayTrading>
    </div>
    <div id="growthPerMinute" class="growthPerMinute">
      <growthPerMinute></growthPerMinute>
    </div>
    <div id="guizhoumapDiv" class="guizhoumapDiv">
      <guizhoumap/>
    </div>
    <div id="growthPerMinuteTotal" class="growthPerMinuteTotal">

    </div>
    <div id="test" class="test">
    </div>
  </div>
</template>

<script>
import guizhoumap from './components/guizhoumap'
import historicalTransactions from './components/historicalTransactions'
import growthPerMinute from './components/growthPerMinute'
import oneDayTrading from './components/oneDayTrading'
import date from './components/date'

export default {
  name: 'App',
  data() {
    return {
      bankName: '贵州银行'
    };
  },
  components: {
    guizhoumap,
    historicalTransactions,
    growthPerMinute,
    oneDayTrading,
    date
  }
}
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
    background: #002F44;
  }
  .title {
    width: 100%;
    height: 9.9%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #002F44;
  }
  .bankName {
    width: 24.99%;
    height: 100%;
    left: 0px;
    float: left;
    background: #002F44;
    border-right:1px solid #fff;
  }
  .bankName span {
    position: absolute;
    top: 30%;
    left: 9%;
    color: #FFF;
    font-size: 18px;
  }
  .date {
    width: 49.9%;
    height: 100%;
    left: 25%;
    float: left;
    background: #002F44;
    border-right:1px solid #fff;
  }
  .operation {
    width: 24.9%;
    height: 100%;
    left: 75%;
    float: left;
    background: #002F44;
  }
  .historicalTransactions {
    width: 24.99%;
    height: 29.9%;
    position: absolute;
    background: #002F44;
    top: 10%;
    left: 0px;
    border-right:1px solid #fff;
  }
  .oneDayTrading {
    width: 24.99%;
    height: 29.9%;
    background: #002F44;
    position: absolute;
    top: 40%;
    left: 0px;
    border-right:1px solid #fff;
  }
  .growthPerMinute {
    width: 24.99%;
    height: 30%;
    background: #002F44;
    position: absolute;
    top: 70%;
    left: 0px;
  }
  .guizhoumapDiv {
    width: 49.99%;
    height: 59.9%;
    position: absolute;
    left: 25%;
    top: 10%;
    background: #002F44;
    border-right:1px solid #fff;
  }
  .growthPerMinuteTotal {
    width: 25%;
    height: 59.9%;
    background: #002F44;
    position: absolute;
    right: 0px;
    top: 10%;
  }
  .test {
    width: 75%;
    height: 30%;
    background: #002F44;
    position: absolute;
    top: 70%;
    left: 25%;
  }
</style>

