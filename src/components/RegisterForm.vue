<template>
  <div class="register-form-container">
    <h1>Registro</h1>
    <form @submit.prevent="register" class="register-form q-gutter-md">
        <input v-model="username" type="text" placeholder="Username" class="register-input">
        <input v-model="email" type="text" placeholder="Email" class="register-input">
        <input v-model="password" type="text" placeholder="Password" class="register-input">
    
        <div class="q-gutter-sm justify-center">
            <q-btn class="full-width" label="Registrar" type="submit" color="primary"/>
        </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'

export default {
    name:'RegisterForm',
    data(){
        return{
            username: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async register() {
            const authStore = useAuthStore();
            await authStore.register(this.username, this.email, this.password);
            if (authStore.isAuthenticated){
                this.$router.push({ name: 'Home'})
            }
        }
    }
    
}
</script>

<style>

</style>