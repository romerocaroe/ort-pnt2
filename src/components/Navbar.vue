<template>
  <nav>
    <a href="#">PNT2</a>
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/home">Home</router-link>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/perfil">Perfil</router-link>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/login">Login</router-link>
        </q-item-section>
      </q-item>
    </q-list>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>