<template >
    <div class="wrapper">
        <div class="upper-wrapper">
        <dv-border-box-13 class="chart-box-border">
            <div class="chart-box">
   
            </div>

        </dv-border-box-13>
        <MapContainer  class="map-box"></MapContainer>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
import $ from 'jquery'
import MapContainer from '../components/MapContainer.vue'
export default {
    components:{
        MapContainer
    },
    mounted() {
        let myChart = echarts.init( $(".chart-box")[0]);
        var option;

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
option = {
    
    
  color: ["rgb(0,255,255)"],
  title : {
            text: '送检按时完成率',
            color: "rgb(0,255,255)",
            // x: 'center',
            align: 'right',
            textStyle:{
                color: '#FFF',           //颜色
                fontSize: 18,
                fontWeight: '600',
            },
            padding: [5, 0, 0, 15]
            
          },//标题
  xAxis: {
    max: 'dataMax',
    axisLabel: {
    textStyle: {
      color: '#fff', //坐标轴字体颜色
      fontSize: 17,
    },}
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 4 ,// only the largest 3 bars will be displayed
    axisLabel: {
    textStyle: {
      color: '#fff', //坐标轴字体颜色
      fontSize: 17,
    },}
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      },
      barWidth: 30
    }
  ],
//   legend: {
//     show: true
//   },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption({
    series: [
      {
        type: 'bar',
        data
      }
    ]
  });
}
setTimeout(function () {
  run();
}, 0);
setInterval(function () {
  run();
}, 3000);

option && myChart.setOption(option);

    },
}
</script>
<style scoped>
.wrapper{
    height:100%;
}
.upper-wrapper{
    display: flex;
    height: 60%;
}
.upper-wrapper .chart-box-border{
   flex:1;
}
.map-box{
    flex:2;
  
}
.upper-wrapper .chart-box-border{
   flex:1;
}

.upper-wrapper .chart-box{
    
    margin: 15px 0 0 0;
    height: 100%;
    box-sizing:border-box
    
 }
 

</style>