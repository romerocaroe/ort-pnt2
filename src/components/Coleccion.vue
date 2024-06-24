<template>
  <div class="row">
    <div class="col-12">
      <div v-for="collection in collections" :key="collection.id">
        <h5>Colección: {{ collection.title }}</h5>
        <div class="row">

        <div
        class="col-3"
          v-for="obra in collection.obras"
          :key="obra.id"
          :style="{ border: '1px solid #000' }"
        >
              <q-card class="my-card">
                <q-img :src="obra.image">
                  <!-- <div class="absolute-bottom text-subtitle2 text-center">
                            Title
                            </div> -->
                </q-img>
              </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import { useArtStore } from '../stores/artStore'
 */
export default {
  name: "Coleccion",
  components: {},
  props: {
    collections: {
      type: Array,
      required: true,
    },
  } /* ,
    data(){
        return {
            collections: [],
        }
    },
    methods: {
        async getCollections(){
            const artStore = useArtStore()
            await artStore.getCollections() //esto obtiene todas las colecciones, debería solo traer las del usuario (buscarlo en auth store this.user)
            this.collections = artStore.collections
            console.log(artStore.collections)
        }
    },
    mounted(){
        this.getCollections()
    } */,
};
</script>

<style></style>
