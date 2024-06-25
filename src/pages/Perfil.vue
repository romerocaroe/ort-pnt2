<template>
    <div class="row">
        <div class="col-12">
            <q-list bordered separator>
                <q-item clickable v-ripple>
                    <q-item-section>Username: {{user.username}}</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section>Name: {{user.name}}</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section>Lastname: {{user.lastname}}</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                    <q-item-section>Mail: {{user.mail}}</q-item-section>
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

        
    </div>
    <div class="row">
        <div class="col-12">
            <Coleccion :collections="userCollections"/>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <Likes :likes="likes"/>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'
import { useArtStore } from 'src/stores/artStore'
import Coleccion from '../components/Coleccion.vue'
import Likes from '../components/Likes.vue'


export default {
    name:'Perfil',
    components: {
        Coleccion, 
        Likes
    },
    data(){
        return {
            user: {},
            userCollections: [],
            likes: []
        }
    },
    methods: {
        async getUser(){
            const authStore = useAuthStore()
            this.user = authStore.user
            this.userCollections = this.user.collections
            this.likes = this.user.likes
        }
    },
    mounted(){
        this.getUser()
        if(!localStorage.getItem('isAuthenticated')) {
            this.$router.push({name: 'Login'})
        }
    }
}

</script>

<style>

</style>