<template>
  <!-- <div v-clock v-if="loaded===false">
    <h1>Loading ...</h1>
  </div>
  <div v-show="loaded">
    <HeaderNav />
    <router-view/>
  </div> -->
  <div>
    <HeaderNav />
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from '@/components/lib/nav.vue';
export default {
  name:'APP',
  data(){
    return {
      loaded:false
    }
  },
  mounted(){
    window.document.getElementById('loading').style.display='none';
    
  },
  components:{
    HeaderNav
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
