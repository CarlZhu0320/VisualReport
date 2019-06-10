<template>
    <div id="oneDayTradingDiv" style="height:100%;width:100%;position: absolute;top:0" ></div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "oneDayTrading",
  data() {
    return {

    };
  },
  mounted() {
      this.oneDayTradingEchartsInit();
  },
  methods:{
      oneDayTradingEchartsInit(){
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('oneDayTradingDiv')); 
        
        var option = {
                title : {
                    text: '单日交易量',
                    x: '5%',
                    y: '3%',
                    textStyle: {   //标题颜色
                        color: '#FFF',
                        fontSize: 12
                    }
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'value',
                        axisLine: {  //设置y轴坐标线的样式
                            lineStyle: {
                                type: 'solid',
                                color: '#FFF',//y轴坐标线的颜色
                                width:'1'//y轴坐标线的宽度
                            }
                        },
                        axisLabel: {  //x轴刻度数值颜色
                           rotate: 30, //旋转x轴的文字
                           textStyle: {
                               color: '#FFF'
                           }
                        },
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        axisLine: {  //设置y轴坐标线的样式
                            lineStyle: {
                                type: 'solid',
                                color: '#FFF',//y轴坐标线的颜色
                                width:'1'//y轴坐标线的宽度
                            }
                        },
                        data : ['00','01','02','03','04','05','06','07','08','09','10']
                    }
                ],
                grid: {
                        width: '80%',
                        top: "25%",
                        bottom: '20%',
                        left: "15%"
                    },
                series : [
                    {
                        type:'bar',
                        data:[25141, 23489, 29034, 104970, 131744, 630230, 58945, 548541, 526123, 412541, 321560]
                    }
                ]
            };
            myChart.setOption(option);
      }
  }
}
</script>