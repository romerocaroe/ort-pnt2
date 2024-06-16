<template>
    <div class="row">
        <div v-for="art in arts" :key="art">
            <div class="col-3 q-ma-md">
                <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                        {{ art.name }}
                        <q-img
                        style="height: 180px; max-width: 180px"
                        class="col"
                        :src="art.image"
                        />

                        <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat round color="red" icon="favorite" />
                            <q-btn flat round color="accent" icon="bookmark" />
                            <q-btn flat round color="primary" icon="share" />
                        </q-card-actions>
                    </q-card-section>
                </q-card>
            </div>
        </div>
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
            arts: []
        }
    },
    methods: {
        async getArt(){
            const artStore = useArtStore()
            await artStore.getArt()
            this.arts = artStore.arts
            console.log(artStore.arts)
        }
    },
    mounted(){
        this.getArt()
    }
}
</script>

<style>

</style>