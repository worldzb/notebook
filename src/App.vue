<template>
  <div id="app">
    <div class="appHeader">
      <book-header></book-header>
    </div>
    <div class="appBody">
      <side-bar></side-bar>
      <chapter-list></chapter-list>
      <content-box></content-box>
    </div>
  </div>
</template>

<script type="text/javascript">

  import bookHeader from './main/header.vue';
  import sideBar from './main/sidebar.vue';
  import chapterList from './main/chapterList.vue';
  import contentBox from './main/content.vue';
  import test from './main/test.vue';

  export default{
    name:'app',
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
  }
</script>

<style type="text/css">
  .appBody{
    margin-top: -20px; 
  }
  #app{
    font-size: 13px;
  }
</style>