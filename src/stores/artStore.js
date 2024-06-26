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
        const addCollectionToUser = {
          idUsuario: idUsuario,
          idCollection: idCollection
        }
        const response = await axios.patch(`${process.env.API_URL}/usuario/coleccion/`, addCollectionToUser, {
            method: 'PATCH',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
        })
        console.log(response);
        await getCollections()
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async addColeccion(nuevaColeccion){
      try {
        const nuevaCol = await axios.post(`${process.env.API_URL}/coleccion`, nuevaColeccion, {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
        })

        console.log(nuevaCol);
        await getCollections()
        return nuevaCol
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
        
        await getCollections()
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    },
    async modificarColeccion(idCollection, coleccionModificada) {
        try {
          const response = await axios.put(`${process.env.API_URL}/coleccion/${idCollection}`, coleccionModificada, {
            method: 'PUT',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
          })
          console.log("RESPONSE modificar colección: ", response);
          return 200
        } catch (error) {
          console.log("Error: " + error);
          return 500
        }
    },
    async crearObra(title, description, author, technique, image, culture, url, division){
      try {
        const obra = {
          title,
          description,
          author,
          technique,
          image,
          culture,
          url,
          division
        }

        console.log(obra);

        const response = await axios.post(`${process.env.API_URL}/obra`, obra, {
          method: 'POST',
          headers: new Headers({ 'Content-type': 'application/json'}),
          mode: 'no-cors',
        })
        console.log("RESPONSE: ", response);
        await getArt()
        return 200
      } catch (error) {
        console.log("Error: " + error);
        return 500
      }
    },
    async modificarObra(idObra, obraModificada) {
      try {
        const response = await axios.put(`${process.env.API_URL}/obra/${idObra}`, obraModificada, {
          method: 'PUT',
          headers: new Headers({ 'Content-type': 'application/json'}),
          mode: 'no-cors',
        })
        console.log("RESPONSE modificar obra: ", response);
        return 200
      } catch (error) {
        console.log("Error: " + error);
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
        await getCollections()
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
        await getCollections()
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
        await getArt()
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
     
    },
    async addObraToLikes(idUsuario, idObra) {
      try {

        const data = {
          idUsuario,
          idObra
        }

        const response = await axios.patch(`${process.env.API_URL}/usuario/likes`, data, {
            method: 'PATCH',
            headers: new Headers({ 'Content-type': 'application/json'}),
            mode: 'no-cors',
        })
        await getArt()
        return 200
      } catch (error) {
        console.log("Error: " + error);
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
        await getCollections()
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
        await getArt()
        return 200
      } catch (err){
        console.error('Error -'+err)
        return 500
      }
    }
  }
})
