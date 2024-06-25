<template>
    <div class="row justify-center">
        <div class="form-switch-container col-5">
            <div class="form-container" style="background-color: white;">
                <component :is="currentForm" />
            </div>
            <div class="switch-container">
                <span v-if="currentForm === 'LoginForm'">No tenes cuenta? <a @click="cambiarForm">Registrate</a></span>
                <span v-else>Ya tenes cuenta? <a @click="cambiarForm">Inicia Sesion</a></span>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

export default {
    name: 'Login',
    components: {
        LoginForm,
        RegisterForm
    },
    setup(){
        const $q = useQuasar()
        const username = ref(null)
        const password = ref(null)
        const currentForm = ref('LoginForm')
        
        function cambiarForm(){
            currentForm.value = currentForm.value === 'LoginForm' ? 'RegisterForm' : 'LoginForm'
        }

        function checkAuthorization(){
            const authStore = useAuthStore()
            authStore.checkAuth()
            console.log(authStore.checkAuth())
            if(authStore.isAuthenticated){
                this.$router.push({name:'Home'})
            }
        }

        onMounted(() => checkAuthorization())

        return {
            username,
            password,
            currentForm,
            cambiarForm
        }
    }
}
</script>

<style>

</style>