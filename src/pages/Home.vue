<template>
    <div class="row">
        <div v-for="art in arts" :key="art">
            <div class="col-4 q-ma-sm">
                <q-card class="my-card" flat bordered>
                    <q-card-section>
                        <q-img
                        style="height: 250px; max-width: 250px"
                        class="col"
                        :src="art.image"
                        />

                        <q-card-actions class="justify-around q-px-sm">
                            <q-btn flat round color="red" icon="favorite" />
                            <q-btn flat round color="accent" icon="bookmark" />
                            <q-btn flat round color="primary" icon="ads_click" />
                        </q-card-actions>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary" />
        </q-page-sticky>
    </div>
</template>

<script>
import { useArtStore } from '../stores/artStore'

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
        }
    },
    mounted(){
        this.getArt()
    }
}
</script>

<style>

</style>