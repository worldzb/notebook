<template id="app">
  <div>
    <book-header></book-header>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import bookHeader from './components/header.vue';
  import sideBar from './components/sidebar.vue';
  export default{
    data(){
      return{
      }
    },
    components:{
      bookHeader,
      sideBar,
    },
  }
</script>