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
        myChart.setOption(option, true);
      }
  }
}
</script>