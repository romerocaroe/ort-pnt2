<template>
  <nav>
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/home" style="color: inherit; text-decoration: none">Home</router-link>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/perfil" style="color: inherit; text-decoration: none">Perfil</router-link>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/login" style="color: inherit; text-decoration: none">Login</router-link>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
            <router-link to="/login" @click="logout" style="color: inherit; text-decoration: none">Logout</router-link>
        </q-item-section>
      </q-item>
    </q-list>
  </nav>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

export default {
    name:'Navbar',
    methods: {
        async logout(){
            const authStore = useAuthStore()
            authStore.logout()
            if(authStore.isAuthenticated){
                this.$router.push({name:'Login'})
            }
        }
    }
}
</script>

<style>

</style>