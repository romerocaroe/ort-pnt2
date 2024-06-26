<template>
  <div class="row justify-center align-center">
    <div class="col-12 q-pa-xs">
      <div v-for="collection in collections" :key="collection.id" :style="{ border: '1px solid #000' }" class="q-ma-md q-pa-md rounded-borders">
        <p class="q-pa-xs">Colección: {{ collection.title }}</p>
        <div class="row">
          <div class="col-3 q-pa-xs" v-for="obra in collection.obras" :key="obra.id">
            <q-card class="my-card">
              <q-img :src="obra.image">
                <div class="absolute-bottom text-subtitle1 text-center">
                  <q-btn class="glossy q-mr-xs" round color="amber-4" icon="edit" />
                  <q-btn class="glossy q-mr-xs" round color="teal-4" icon="ads_click" />
                  <q-btn class="glossy" round color="red-4" icon="delete" />
                </div>
                <!-- <q-drawer
                  v-model="drawer"
                  show-if-above

                  :mini="miniState"
                  @mouseover="miniState = false"
                  @mouseout="miniState = true"

                  :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
                >
                  
                </q-drawer> -->
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coleccion",
  components: {},
  props: {
    collections: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style></style>
