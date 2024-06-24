<template>
  <div class="row">
    <div class="col-12">
      <h5>Likes</h5>
      <div class="row">
        <div
          class="col-3"
          v-for="obra in likes"
          :key="obra.id"
          :style="{ border: '1px solid #000' }"
        >
          <q-card class="my-card">
            <q-img :src="obra.image"></q-img>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Likes",
  props: {
    likes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
