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
    /* router.patch("/usuario/coleccion/", controllerUsers.addObraToCollection)//TODO: pasar data al body
router.patch("/usuario/likes/", controllerUsers.addObraToLike)//TODO: pasar data al body
router.patch("/usuario/coleccion/:idUsuario", collectionController.deleteObraFromCollection) //TODO:
router.patch("/usuario/likes/:idUsuario", collectionController.deleteObraFromLikes) //TODO: pasar data al body
 */
    async addCollectionToUser(idUsuario,idCollection,idObra){
      try {
        const collection = await axios.patch(`${process.env.API_URL}/usuario/coleccion`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idUsuario": idUsuario,
              "idCollection": idCollection,
              "idObra": idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addObra(obra){

    },
    async addObraToCollection(obra){

    },
    async deleteCollection(idCollection){

    },
    async deleteObra(obra){

    }
  }
})
