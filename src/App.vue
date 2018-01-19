<template id="app">
  <div >
    <div id="appHeader">
      <book-header></book-header>
    </div>
    <div id="appBody">
      <side-bar></side-bar>
      <chapter-list></chapter-list>
      <content-box></content-box>
    </div>
  </div>
</template>

<script>
  import bookHeader from './components/header.vue';
  import sideBar from './components/sidebar.vue';
  import chapterList from './components/chapterList.vue';
  import contentBox from './components/content.vue';



  import test from './components/test.vue';
  import VueRouter from 'vue-router';


  Vue.use(VueRouter);
  let a=new VueRouter();
  export default{
    data(){
      return{
      }
    },
    components:{
      bookHeader,
      sideBar,
      chapterList,
      contentBox,
      test,
    },
    created(){

    }
  }
</script>

<style type="text/css">
  #appBody{
    margin-top: -20px; 
  }
</style>