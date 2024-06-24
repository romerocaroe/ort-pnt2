<template>
    <div class="row">
        <div class="col-12">
            <q-list bordered separator>
                <q-item v-for="value in user" :key="value" clickable v-ripple>
                    <q-item-section>value</q-item-section>
                </q-item>
            </q-list>
        </div>
        <!--TODO: separador-->
        <coleccion />
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'
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
        }
    },
    mounted(){
        this.getUser()
    }
}
</script>

<style>

</style>