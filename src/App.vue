<template>
  <div id="app">
    <dv-full-screen-container class="dv-full">
      <el-container>
        <el-header height="15%">
        
          <SubwayHeader>
          </SubwayHeader>
        </el-header>
      <el-main>
        
       
        <router-view></router-view>
        
        
      </el-main>
    </el-container>
    </dv-full-screen-container>

  </div>
</template>

<script>
// import MapContainer from './components/MapContainer.vue'
import SubwayHeader from './views/SubwayHeader.vue'


export default {
  name: 'App',
  components: {
    
    SubwayHeader
  },
 
}






</script>

<style scoped>

#app{
  width: 100%;
  height: 100%;
}
.el-header{
  padding: 0 !important;
}
.el-container{
  height: 100%;

}


.dv-full{
  background : url("./assets/Images/bg.png ") no-repeat; 
  
}

</style>
