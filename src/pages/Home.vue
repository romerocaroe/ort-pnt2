<template>
    <div class="row justify-center align-center">
        <div v-for="art in arts" :key="art">
            <div class="col-4 q-ma-sm">
                <CardObra :art='art'/>
            </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary" />
        </q-page-sticky>
    </div>
</template>

<script>
import CardObra from 'src/components/CardObra.vue';
import { useArtStore } from '../stores/artStore'

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
        }
    },
    mounted(){
        this.getArt()
    }
}
</script>

<style>

</style>
