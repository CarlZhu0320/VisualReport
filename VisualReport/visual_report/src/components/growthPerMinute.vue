<template>
    <div id="growthPerMinute" style="height:100%;width:100%;" ></div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "growthPerMinute",
  data() {
    return {

    };
  },
  mounted() {
      this.growthPerMinuteEchartsInit();
  },
  methods:{
      growthPerMinuteEchartsInit(){
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('growthPerMinute')); 
        
        var option = {
                title : {
                    text: '交易率每分钟增长情况',//小标题
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
                legend: {
                    data:['','', '总量', '增量'],
                    textStyle: {
                        color: '#FFF'
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        axisLine: {  
                            lineStyle: {
                                type: 'solid',
                                color: '#FFF',
                                width:'1'
                            }
                        },
                        type : 'value'
                    }
                ],
                yAxis : [
                    {
                        axisLine: {  //设置y轴坐标线的样式
                            lineStyle: {
                                type: 'solid',
                                color: '#FFF',//y轴坐标线的颜色
                                width:'1'//y轴坐标线的宽度
                            }
                        },
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                grid: {
                        height: '62%',
                        width: '65%',
                        top: "25%",
                        left: "15%"
                    },
                series : [
                    {
                        name:'总量',
                        type:'bar',
                        stack: '总量',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'增量',
                        type:'bar',
                        stack: '总量',
                        itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    }
                ]
            };
            myChart.setOption(option);
      }
  }
}
</script>