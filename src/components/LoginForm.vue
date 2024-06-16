<template>
    <div class="login-form-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="login-form q-gutter-md">
            <input v-model="username" type="text" placeholder="Username" class="login-input">
            <input v-model="password" type="text" placeholder="Password" class="login-input">
        
            <div class="q-gutter-sm justify-center">
                <q-btn class="full-width" label="Login" type="submit" color="primary"/>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

export default {
    name:'LoginForm',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login(){
            const authStore = useAuthStore()
            await authStore.login(this.username, this.password)
            if(authStore.isAuthenticated){
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted(){
        const authStore = useAuthStore();
        authStore.checkAuth();
        if( authStore.isAuthenticated ){
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style>

</style>