<template>
    <div class="row justify-center align-center">
        <div v-for="art in arts" :key="art._id">
            <div class="col-4 q-ma-sm">
                <q-card class="my-card" flat bordered>
                    <q-card-section>
                        <q-img
                        style="height: 250px; max-width: 250px"
                        class="col"
                        :src="art.image"
                        />

                        <q-card-actions class="justify-around q-px-sm">
                            <q-btn flat round color="red" icon="favorite" @click="addObraToLikes(art._id)" />
                            <q-btn flat round color="accent" icon="bookmark" />
                            <q-btn flat round color="primary" icon="ads_click" />
                        </q-card-actions>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary">
                <q-menu>
                    <q-list>
                        <q-item clickable v-ripple @click="crearObra">
                            <q-item-section>Crear nueva obra</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple @click="crearColeccion">
                            <q-item-section>Crear nueva colección</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-page-sticky>
    </div>
</template>

<script>
import { useArtStore } from '../stores/artStore'
import { useAuthStore } from 'src/stores/authStore';

export default {
    name:'Home',
    components: {},
    props:{},
    data(){
        return {
            arts: [],
        }
    },
    methods: {
        async getArt(){
            const artStore = useArtStore()
            await artStore.getArt()
            this.arts = artStore.arts
        }, 
        async addObraToLikes(idObra){
            const authStore = useAuthStore()
            const artStore = useArtStore()
            await artStore.addObraToLikes(authStore.user._id, idObra)
        },
        crearObra() {
            this.$router.push({name: 'CrearObra'})
        },
        crearColeccion() {
            this.$router.push({name: 'CrearColeccion'})
        }

    },
    mounted(){
        this.getArt()
    }
}
</script>

<style>

</style>