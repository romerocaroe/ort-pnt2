import axios from 'axios';
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
        const response = await axios.get('http://localhost:5000/obra')
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
