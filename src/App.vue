<template>
  
  <!-- <router-view/> -->
   <navbar-comp/>
   <home-view/>
   <about-view/>
   <projects-view/>
   <contact-view/>
   <footer-comp/>
  <div>

  </div>
</template>
<script>
import HomeView from '@/views/HomeView.vue'
import NavbarComp from './components/NavbarComp.vue'
import AboutView from '@/views/AboutView.vue'
import FooterComp from './components/FooterComp.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
export default{
  components:{
    NavbarComp,
    HomeView,
    AboutView,
    FooterComp,
    ProjectsView,
    ContactView
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
