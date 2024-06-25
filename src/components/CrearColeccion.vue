<template>
    <div class="register-form-container">
      <h3>Crear colección</h3>
      <form @submit.prevent="register" class="register-form q-gutter-md">
          <input v-model="title" type="text" placeholder="Title" class="register-input" required>
          <div class="q-gutter-sm justify-center">
              <q-btn label="Registrar" type="submit" color="primary" @click="addCollectionToUser()"/>
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
              const authStore = useAuthStore()
              const artStore = useArtStore()
              const nuevaColeccion = {
                title: this.title
              }
              const idColeccion = await artStore.addCollection(nuevaColeccion)
              console.log(idColeccion);
              await artStore.addCollectionToUser(authStore.user._id, idColeccion)
              if (authStore.isAuthenticated) {
                  this.$router.push({name: 'Home'})
              }
          }
      }
  }
  </script>
  <style>
      
  </style>