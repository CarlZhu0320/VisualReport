<template>
  <div id="app">
    <div id="title" class="title">
      <div id="bankName" class="bankName">
        <span>{{bankName}}</span>
        <img src="../static/img/border.png" width="100%" height="100%">
      </div>
      <div id="date" class="date">
        <img src="../static/img/border.png" width="100%" height="100%">
        <date></date>
      </div>
      <div id="operation" class="operation">
        <img src="../static/img/border.png" width="100%" height="100%">
        <div class="pandect">
          <span>总览</span>
        </div>
        <div class="rotate">
          <span>轮循</span>
        </div>
      </div>
    </div>
    <div id="historicalTransactions" class="historicalTransactions">
      <img src="../static/img/border.png" width="100%" height="100%">
      <historicalTransactions></historicalTransactions>
    </div>
    <div id="oneDayTrading" class="oneDayTrading">
      <img src="../static/img/border.png" width="100%" height="100%">
      <oneDayTrading></oneDayTrading>
    </div>
    <div id="growthPerMinute" class="growthPerMinute">
      <growthPerMinute></growthPerMinute>
      <img src="../static/img/border.png" width="100%" height="100%">
    </div>
    <div id="guizhoumapDiv" class="guizhoumapDiv">
      <guizhoumap/>
    </div>
    <div id="growthPerMinuteTotal" class="growthPerMinuteTotal">
      <img src="../static/img/border.png" width="100%" height="100%">
    </div>
    <div id="test1" class="test1">
      <img src="../static/img/border.png" width="100%" height="100%">
    </div>
    <div id="test2" class="test2">
      <img src="../static/img/border.png" width="100%" height="100%">
    </div>
    <div id="test3" class="test3">
      <img src="../static/img/border.png" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
import guizhoumap from './components/guizhoumap'
import historicalTransactions from './components/historicalTransactions'
import growthPerMinute from './components/growthPerMinute'
import oneDayTrading from './components/oneDayTrading'
import date from './components/date'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      bankName: '贵州银行'
    };
  },
  methods: {
    request() {
      axios({
        url: 'http://www.baidu.com',
        method: 'post',
        data: ''
      }).then((data) => {
        console.log(data);
      });
    }
  },
  mounted() {
    console.log(123);
    this.request();
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
  body {
    background: #002F44;
  }
  .app {
    width: 100%;
    height: 100%;
  }
  .title {
    width: 100%;
    height: 10%;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .bankName {
    width: 25%;
    height: 100%;
    left: 0px;
    float: left;
  }
  .bankName span {
    position: absolute;
    top: 30%;
    left: 9%;
    color: #FFF;
    font-size: 18px;
  }
  .date {
    width: 50%;
    height: 100%;
    left: 25%;
    float: left;
  }
  .operation {
    width: 25%;
    height: 100%;
    left: 75%;
    float: left;
  }
  .pandect span {
    position: absolute;
    top: 50%;
    margin-top: -8.5px;
    left: 50%;
    margin-left: -14px;
    color: #FFF;
    font-size: 14px;
  }
  .rotate span {
    color: #FFF;
    font-size: 14px;
    top: 50%;
    position: absolute;
    margin-top: -8.5px;
    left: 50%;
    margin-left: -14px;
  }
  .pandect {
    position: absolute;
    width: 8%;
    height: 50%;
    background: rgb(0, 186, 255);
    color: #FFF;
    top: 25%;
    margin-left: 4.5%;
  }
  .rotate {
    position: absolute;
    width: 8%;
    height: 50%;
    background: rgb(0, 0, 0);
    float: left;
    color: #FFF;
    top: 25%;
    margin-left: 12.5%;
  }
  .historicalTransactions {
    width: 25%;
    height: 30%;
    position: absolute;
    top: 10%;
    left: 0px;
  }
  .oneDayTrading {
    width: 25%;
    height: 30%;
    position: absolute;
    top: 40%;
    left: 0px;
  }
  .growthPerMinute {
    width: 25%;
    height: 28%;
    position: absolute;
    top: 70%;
    left: 0px;
  }
  .guizhoumapDiv {
    width: 50%;
    height: 60%;
    position: absolute;
    left: 25%;
    top: 10%;
  }
  .growthPerMinuteTotal {
    width: 25%;
    height: 60%;
    position: absolute;
    right: 0px;
    top: 10%;
  }
  .test1 {
    width: 25%;
    height: 28%;
    position: absolute;
    top: 70%;
    left: 25%;
  }
  .test2 {
    width: 25%;
    height: 28%;
    position: absolute;
    top: 70%;
    left: 50%;
  }
  .test3 {
    width: 25%;
    height: 28%;
    position: absolute;
    top: 70%;
    left: 75%;
  }
</style>

