<template >
    
<div id="container"></div>
    
</template>
<script src="https://webapi.amap.com/maps?v=2.0&key=4882be301a8f7db0d78c2a83d478a8d0"></script>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';
// import {subwaydata} from '../assets/subwaydata';
import axios from 'axios'
// import $ from 'jquery';
export default {
    data(){
  return{
    //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
    //map:null,
    subwaydata:null
  } 
},
methods:{

  // initData(){
   
  //   axios.get('http://10.154.50.155:8000/F1/')
  //  .then(response => {
  //   // 请求成功后的处理逻辑
  //   this.subwaydata=response.data;
  //   this.initMap()
  //  })

  // },
  initMap(){
    AMapLoader.load({
      key:"	4882be301a8f7db0d78c2a83d478a8d0",             // 申请好的Web端开发者Key，首次调用 load 时必填
      version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap)=>{
      this.map = new AMap.Map("container",{  //设置地图容器id
        viewMode:"3D",    //是否为3D地图模式
        zoom:12,           //初始化地图级别
        center:[121.461083,31.217258], //初始化地图中心点位置
        mapStyle: "amap://styles/whitesmoke" //初始化地图中心点位置
      });

    axios.get('http://10.154.50.155:8000/F1/')
    .then(response => {
    // 请求成功后的处理逻辑
      this.subwaydata=response.data;
      this.subwaydata.forEach((v,) => {
        const path = [];
        v.forEach((v2,)=>{
        
        path.push(new AMap.LngLat(v2[0], v2[1]));
        path.push(new AMap.LngLat(v2[0], v2[1]));
        
       
      })
      const polyline = new AMap.Polyline({
          map: this.map,
          path: path,
          // fillColor: this.colorSheme(10), // 多边形填充颜色
          strokeWeight: 2, // 线条宽度，默认为 1
         
          strokeColor: "black",
          // this.colorSheme(10), // 线条颜色
        
        })
        this.map.add(polyline);})
      })
      let capitals=[[121.444383, 31.169458],[121.41208, 31.19654],[121.511796, 31.143224],[121.481592, 31.197572],[121.516275, 31.230258]]
      for(var i=0;i<capitals.length;i+=1){
        var center = capitals[i];
        var circleMarker = new AMap.CircleMarker({
          center:center,
          radius:10+Math.random()*5,//3D视图下，CircleMarker半径不要超过64px
          strokeColor:'white',
          // strokeWeight:2,
          // strokeOpacity:0.5,
          fillColor:'rgba(238, 26, 26,1.0)',
          // fillOpacity:0.5,
          zIndex:10,
          bubble:true,
          cursor:'pointer',
          clickable: true
          
        })
        circleMarker.setMap(this.map)
      }
        // this.map.on('click', function(e) {
        // console.log(e.lnglat.getLng() + ',' + e.lnglat.getLat())
    // });
    }).catch(e=>{
      console.log(e);
    })
  }

  
},
mounted(){
  
  
  this.initMap();
  
  

 
}
}
</script>
<style scoped>
#container{
  width: 100%;
  margin:8px 0px 4px 15px;
  border: rgba(31, 45, 236, 0.9) solid 2px;
  box-sizing:border-box
}

</style>