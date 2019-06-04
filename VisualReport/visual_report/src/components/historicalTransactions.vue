<template>
    <div id="column" style="height:100%;width:100%;" ></div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "historicalTransactions",
  data() {
    return {

    };
  },
  mounted() {
      this.columnEchartsInit();
  },
  methods:{
      columnEchartsInit(){
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('column')); 
        
        var option = {
            title : {
                text: '历史交易记录',//小标题
                textStyle: {   //标题颜色
                    color: '#FFF',
                    fontSize: 12
                }
            },
            tooltip : {
                trigger: 'axis'
            },
            color:['#FFF'],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    name: '日期',
                    axisLine: {  //设置x轴坐标线的样式
                        lineStyle: {
                            type: 'solid',
                            color: '#FFF',//x轴坐标线的颜色
                            width:'1'//x轴坐标线的宽度
                        }
                    },
                    // axisLabel: {  //x轴刻度数值颜色
                    //    rotate: 10, //旋转x轴的文字
                    //    interval:0, //x轴每个项的距离  修改数据显示的个数
                    //    textStyle: {
                    //        color: '#FFF'
                    //    }
                    // },
                    data : ['201901','201902','201903','201904','201905','201906','201907']
                }
            ],
            yAxis : [
                {
                    type: 'value',
                    name: "（元）",
                    axisLabel: {
                        formatter: '{value}',
                        interval:0, rotate:30
                    },
                    axisLine: {  //设置y轴坐标线的样式
                       lineStyle: {
                           type: 'solid',
                           color: '#FFF',//y轴坐标线的颜色
                           width:'1'//y轴坐标线的宽度
                       }
                   },
                   axisTick: {
                        inside: true
                    },
                   scale: true
                   
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
                    name:'最高交易',
                    type:'line',
                    data:[10111, 11, 15, 13, 12, 13, 10]
                }
            ]
        };
        // var zoomSize = 90;  //放大缩小
        // myChart.on('click', function (params) {
        //     myChart.dispatchAction({
        //         type: 'dataZoom',
        //     });
        // });

        // 为echarts对象加载数据 
        myChart.setOption(option);
      }
  }
}
</script>