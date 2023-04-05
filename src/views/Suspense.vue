<Suspense>
    <template #default>
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </template>
    <template #fallback>
      안냐하세요. 로딩중이에요 !! 
    </template>
  </Suspense>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/Home.vue'
  
  export default {
    name: 'HomeView',
    components: {
      HelloWorld
    }
  }
  </script>
  