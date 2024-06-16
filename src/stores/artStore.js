import { defineStore } from 'pinia';

export const useArtStore = defineStore('art', {
  state: () => ({
    isAuthenticated: false,
    arts: [],
    isAdmin: false
  }),
  actions: {
    async getArt(){
      try {
        const response = await fetch('https://6665e0afd122c2868e420ea1.mockapi.io/arts')
        console.log(response)
        const arts = await response.json()
        console.log(arts)
        //const user = arts.find(user => user.username === username && user.password === password)

        if(arts.length > 0) {
          this.arts = arts;
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
  }
})
