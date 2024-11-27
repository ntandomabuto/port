<template>
  <div class="home" id="#">
    <HelloWorld msg=" An Aspiring Software Developer"/>
    <spinner-comp v-if="loading"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SpinnerComp
  },data(){
    return{
      loading: true
    }
  },mounted(){
    setTimeout(() =>{
      this.loading = false
    },4000)
  }
}
</script>
<style scoped>
.home{
  /* text-shadow: 5px 5px 7px black; */
  position: relative; 
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 5s ease-in-out;
  height: 100vh; 
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
}
</style>
