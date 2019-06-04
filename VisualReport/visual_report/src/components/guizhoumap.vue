<template>
    <div ref="map" style="height:100%;width:100%;" ></div>
</template>
<script>
import echarts from "echarts";
import gz from '../../../visual_report/static/json/guizhou.json';
import option from "../../../visual_report/static/js/guizhou.js";

export default {
  name: "mapDemo",
  data() {
    return {

    };
  },
  mounted() {
      this.mapEchartsInit();
  },
  methods:{
      mapEchartsInit(){
        echarts.registerMap('gz', gz);
        var myChart=echarts.init(this.$refs.map);
        // var ini_data = [];
        // var str2 ={name:'贵阳市',value: 1};//拼接对象数组
        // ini_data.push(str2);
        // option.series[0].data=ini_data;
        myChart.setOption(option);
      }
  }
}
</script>