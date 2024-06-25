<template>
    <div class="row justify-center align-center">
        <div v-for="art in arts" :key="art._id">
            <div class="col-4 q-ma-sm">
                <CardObra :art='art'/>
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
import CardObra from 'src/components/CardObra.vue';
import { useArtStore } from '../stores/artStore'
import { useAuthStore } from 'src/stores/authStore';

export default {
    name:'Home',
    components: {
      CardObra
    },
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
