<template>
    <div class="register-form-container">
      <h3>Crear colección</h3>
      <form @submit.prevent="addCollectionToUser" class="register-form q-gutter-md">
          <q-input outlined v-model="title" type="text" placeholder="Title" class="register-input" required />
          <div class="q-gutter-sm justify-center">
              <q-btn label="Registrar" type="submit" color="primary"/>
          </div>
      </form>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/authStore'
  import { useArtStore } from '../stores/artStore'
  
  
  export default {
      name: 'CrearColeccion',
      data() {
          return {
              title: '',
          }
      },
      methods: { 
          async addCollectionToUser() {
            try {
              const authStore = useAuthStore()
              const artStore = useArtStore()
              const nuevaColeccion = {
                title: this.title
              }
              const response = await artStore.addColeccion(nuevaColeccion)
              console.log(response.data);
              if (response && response.data && response.data._id) {
                const idColeccion = response.data._id
                console.log("Id de la colección: ", idColeccion);

                await artStore.addCollectionToUser(authStore.user._id, idColeccion)
                if (authStore.isAuthenticated) {
                  this.$router.push({name: 'Home'})
              }

              } else {
                console.log("error al obtener el id");
              }

              
            } catch (error) {
                console.log("Error: ", error);
            }
          }
      }
  }
  </script>
  <style>
      
  </style>