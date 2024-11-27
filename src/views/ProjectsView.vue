<template>
    <div id="projects"></div>
    <div>
        <section class="my-12" id="projects">
    <h2 class="text-3xl font-bold mb-6">
     Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <div class="p-2 rounded-lg shadow-lg" v-for="project in projects()" :key="project">
      <img  class="rounded mb-3" v-bind:src="project.image" width="600"/>
      <h3 class="text-xl font-bold mb-2">
      {{project.name}}
      </h3>
      <p class="text-gray-700">
        {{project.description}}
      </p>
      <a v-bind:href="project.github" class="btn btn-primary" target="_blank"><i class="fa-brands fa-github fa-xl">{{github}}</i></a>
                 <a v-bind:href="project.vercel" class="btn btn-primary" target="_blank"><i class="fa-solid fa-globe">{{vercel}}</i>Live</a>
             
     </div>
    </div>
    </section>
    </div>
</template>
<script>
export default {
    methods:{
        projects(){
            return this.$store.state.projects
        }
    },computed:{
        getProjects(){
            return this.$store.dispatch('getProjects')
        }
    },
    mounted(){
        this.getProjects
    }
}
</script>
<style scoped>
    div a{
    background-color: #40d317;
    margin: 10px;
    border-radius: 2rem;
    transition: transform linear 1s;
    
}
div a:hover{
    transform: scale(1,2);
    transform:scale(1.2);
    background-color: #40d317;
    
}
img{
    height: 40vh;
}
#projects{
    padding-top: 2px;
}
</style>