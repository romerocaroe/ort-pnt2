import axios from 'axios';
import { defineStore } from 'pinia';

export const useArtStore = defineStore('art', {
  state: () => ({
    isAuthenticated: false,
    arts: [],
    collections: []
  }),
  actions: {
    async getArt(){
      try {
        const arts = await axios.get(`${process.env.API_URL}/obra`, {
            method: 'GET',
            mode: 'no-cors'
        })
        console.log(arts.data)

        if(arts.data.length > 0) {
          this.arts = arts.data;
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
    async getCollections(){
      try {
        const collections = await axios.get(`${process.env.API_URL}/coleccion`, {
            method: 'GET',
            mode: 'no-cors'
        })
        console.log(collections.data)

        if(collections.data.length > 0) {
          this.collections = collections.data;
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
  }
})
