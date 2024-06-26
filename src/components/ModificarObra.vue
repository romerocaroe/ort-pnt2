<template>
    <div class="register-form-container">
      <h3>Modificar Obra</h3>
      <form @submit.prevent="modificarObra" class="register-form q-gutter-md">
          <input v-model="title" type="text" placeholder="{{obra.title}}" class="register-input" required>
          <input v-model="description" type="text" placeholder="{{obra.description}}" class="register-input" required>
          <input v-model="author" type="text" placeholder="{{obra.author}}" class="register-input" required>
          <input v-model="technique" type="text" placeholder="{{obra.technique}}" class="register-input" required>
          <input v-model="image" type="text" placeholder="{{obra.image}}" class="register-input" required>
          <input v-model="culture" type="text" placeholder="{{obra.culture}}" class="register-input" required>
          <input v-model="url" type="text" placeholder="{{obra.url}}" class="register-input" required>
          <input v-model="division" type="text" placeholder="{{obra.division}}" class="register-input" required>
          <div class="q-gutter-sm justify-center">
              <q-btn label="Modificar" type="submit" color="primary"/>
          </div>
      </form>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../stores/authStore'
  import { useArtStore } from '../stores/artStore'
  
  
  export default {
      name: 'CrearObra',
      props: {
        obra: Object
      },
      data() {
          return {
              title: '',
              description: '',
              author: '',
              technique: '',
              image: '',
              culture: '',
              url: '',
              division: ''
          }
      },
      methods: { 
          async modificarObra() {
              const authStore = useAuthStore()
              const artStore = useArtStore()

              const obraModificada = {
                title: this.title,
                description: this.description,
                author: this.author,
                technique: this.technique,
                image: this.image,
                culture: this.culture,
                url: this.url,
                division: this.division
              }

              await artStore.modificarObra(this.obra._id, obraModificada)

              if (authStore.isAuthenticated) {
                  this.$router.push({name: 'Home'})
              }
          }
      }
  }
  </script>
  <style>
      
  </style>