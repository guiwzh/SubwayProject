<template>
    <div class="header-box">
      <div class="title-box">
        上海地铁CPS可视化分析平台
      </div>
      <div class="nav-box">
        <div  class="navigator">
            <ul class="nav-menu">
                <li><router-link to="/baoYh" > 数据展示1</router-link></li>
                <li><router-link to="/chenqh"> 数据展示2</router-link></li>
                <li><router-link to="/guiwz" > 数据展示3</router-link></li>
              </ul>
        </div>
        <div class="time-now">
            <span>{{currentTime}}</span>
            <span>{{currentWeek}}</span>
        </div>
        <div class="weather-box" >
            <iframe  scrolling="no" src="https://tianqiapi.com/api.php?style=tz&skin=pitaya&color=FFFFFF&fontsize=14" frameborder="0" width="100%" height="25px" allowtransparency="True"></iframe>
        </div>
        <div class="logo">
          
        </div>

      </div>

        
 
     
    </div>
  </template>
  
  
  <script>
  export default {
    name: "SubwayHeader",
    data() {
      return {
        currentTime: "asd",
        currentWeek: "asd",
      }
    },
    computed: {
   
      
    },
    mounted() {
      this.currentTime = this.getCurrentTime();
      this.currentWeek = this.getCurrentWeek();
  
      setInterval(() => {
        this.currentTime = this.getCurrentTime();
        this.currentWeek = this.getCurrentWeek();
      
      }, 1000);
    },
    methods: {
      getCurrentTime() {
        const date = new Date()
        const year=date.getFullYear()
        const month=(date.getMonth()+1) <10 ? "0"+(date.getMonth()+1) : date.getMonth()+1
        const datenow=date.getDate()<10 ? "0"+date.getDate() :date.getDate()
        const hour=date.getHours()<10 ? "0"+date.getHours() :date.getHours()
        const minute=date.getMinutes()<10 ? "0"+date.getMinutes() :date.getMinutes()
        const second=date.getSeconds()<10 ? "0"+date.getSeconds() :date.getSeconds()
        return year+"年"+month + "月" + datenow + "日" + hour + ":"  + minute + ":" +second ;
      },
      getCurrentWeek() {
        const week = '星期'+'日一二三四五六'.charAt(new Date().getDay());
        return week;
      },
      
    }
  }
  </script>




<style scoped>

.header-box{
height: 100%;
display: flex;
flex-direction: column;
background: url("../assets/Images/HeaderBackground.jpg") no-repeat;
background-size: contain;
}
.title-box{
  width:100%;
  text-align: center;
  line-height: 200%;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;

    flex:1;
   
  }
.nav-box{
    display: flex;
    justify-content: space-between;
    position:relative;
    flex:1;
   
}
.navigator{
   padding-top: 6px;
    flex:1.9;
}
ul.nav-menu {
    list-style-type: none; /* 去除默认的列表样式 */
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    
  }
  
  ul.nav-menu li {
    display: inline-block; /* 水平排列 */
    border-left: 3px solid #1b06dd;
  }
  ul.nav-menu li:nth-child(3) {
    border-right: 3px solid #1b06dd;
  }
  
  ul.nav-menu li a {
    display: block; /* 设为块级元素 */
    padding: 10px 20px; /* 内边距 */
    text-decoration: none; /* 去除下划线 */
    font-size: 17px;
    font-weight: 600;
    color: white; /* 文字颜色 */
  }
  ul.nav-menu li a:hover {
    background-color: #443f3f; /* 鼠标悬停时的背景色 */
  }
  .time-now {
    font-size: 17px;
    font-weight: 600;
    color:#fff;
    line-height: 54px;
    text-align: center;
    flex:1
  }
  .time-now span{
    margin-right:10px;
  }
.weather-box{
    padding-top: 18px;
    box-sizing:border-box;
    flex:1;

}
.logo{
    
    flex:0.5;
   
    background: url("../assets/Images/logo.png") no-repeat;
    background-size: cover;
}
.nav-menu .router-link-active{
  
    color: #69e8ec;
  
}
</style>
