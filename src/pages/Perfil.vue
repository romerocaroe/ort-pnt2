<template>
    <div class="row">
        <div class="col-12">
            <q-list bordered separator>
                <q-item v-for="value in user" :key="value" clickable v-ripple>
                    <q-item-section>value</q-item-section>
                </q-item>
            </q-list>
        </div>
        <!--TODO: crear nueva coleccion-->
        
        <form @submit.prevent="crearColeccion" class="coleccion-form q-gutter-md">
            <input v-model="title" type="text" placeholder="Titulo" class="coleccion-input">
            <input v-model="image" type="text" placeholder="link imagen" class="coleccion-input">
        
            <div class="q-gutter-sm justify-center">
                <q-btn class="full-width" label="Crear" type="submit" color="primary"/>
            </div>
        </form>

        <!--TODO: separador-->
        <coleccion />
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'
import { useArtStore } from 'src/stores/artStore'
import Coleccion from '../components/Coleccion.vue'


export default {
    name:'Perfil',
    components: {
        Coleccion
    },
    props:{},
    data(){
        return {
            user: {},
        }
    },
    methods: {
        async getUser(){
            const authStore = useAuthStore()
            this.user = authStore.user
            console.log(authStore.user)
        },

        crearColeccion(){
            const artStore = useArtStore()

            const nuevaColeccion = {
                
                title: this.title,
           
                image: this.image
            };
            artStore.addCollection(nuevoColeccion);
            alert('Coleccion creada con exito')
            this.$router.push({ name: 'Coleccion' })
        
    },
    mounted(){
        this.getUser()
    }
}
}
</script>

<style>

</style>