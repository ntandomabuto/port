import { createStore } from 'vuex'

export default createStore({
  state: {
    projects:null

  },
  getters: {
  },
  mutations: {
    setProjects(state,info){
      state.projects =info
    }
  },
  actions: {
    async getProjects(context){
      try {
        let fetchedData = await fetch('https://ntandomabuto.github.io/data/data.json');
        let pro = await fetchedData.json();
        let {projects} = pro;
        context.commit('setProjects', projects);
      } catch (error) {
        console.error('Error fetching projects data:', error);
      }
    }
  },
  modules: {
  }
})
