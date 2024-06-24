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
    async addCollectionToUser(idUsuario,idCollection){
      try {
        const collection = await axios.patch(`${process.env.API_URL}/usuario/coleccion/`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idUsuario": idUsuario,
              "idCollection": idCollection
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addObra(nuevaObra){
      try {
        const obra = await axios.post(`${process.env.API_URL}/coleccion`, {
            method: 'POST',
            mode: 'no-cors',
            data: {
              "nuevaObra": nuevaObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addColeccion(nuevaColeccion){
      try {
        const obra = await axios.post(`${process.env.API_URL}/obra`, {
            method: 'POST',
            mode: 'no-cors',
            data: {
              "nuevaColeccion": nuevaColeccion
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addObraToCollectionFromUser(idUsuario,idCollection,idObra){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/coleccion/obra/`, {
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
    async addObraToLikes(idUsuario,idObra){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/likes/`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idUsuario": idUsuario,
              "idObra": idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async deleteCollectionFromUser(idUsuario,idCollection){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/coleccion/delete/${idUsuario}`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idCollection": idCollection
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async deleteObraFromCollection(idUsuario,idCollection,idObra){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/coleccion/${idUsuario}`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idCollection": idCollection,
              "idObra":idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
     
    },
    async deleteObraFromLikes(idUsuario,idObra){
      try {
        const result = await axios.patch(`${process.env.API_URL}/usuario/likes/${idUsuario}`, {
            method: 'PATCH',
            mode: 'no-cors',
            data: {
              "idObra":idObra
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
     
    },
    async deleteCollection(idCollection){
      try {
        const collection = await axios.delete(`${process.env.API_URL}/coleccion/${idCollection}`, {
            method: 'POST',
            mode: 'no-cors',
            data: {
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async deleteObra(idObra){
      try {
        const obra = await axios.delete(`${process.env.API_URL}/obra/${idObra}`, {
            method: 'POST',
            mode: 'no-cors',
            data: {
            }
        })
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    }
  }
})
