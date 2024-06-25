<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <q-img style="height: 250px; max-width: 250px" class="col" :src="art.image"/>
      <q-card-actions class="justify-around q-px-sm">
        <q-btn flat round color="red" icon="favorite" @click="addObraToLikes(art._id)"/>
        <q-btn flat round color="accent" icon="bookmark" />
        <q-btn flat round color="primary" icon="ads_click" />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
<script>
import { useArtStore } from "src/stores/artStore";
import { useAuthStore } from "src/stores/authStore";

export default {
  name: "CardObra",
  props: {
    art: Object,
  },
  methods: {
    async addObraToLikes(idObra) {
      const authStore = useAuthStore();
      const artStore = useArtStore();
      await artStore.addObraToLikes(authStore.user._id, idObra);
    },
  },
};
</script>
<style></style>
