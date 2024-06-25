npm <template lang="">
    <div>
        <h1>Nueva Coleccion</h1>
        <form @submit.prevent="crearColeccion" class="coleccion-form q-gutter-md">
            <input v-model="title" type="text" placeholder="Titulo" class="coleccion-input">
            <!--input v-model="image" type="text" placeholder="link imagen" class="coleccion-input"!-->
        
            <div class="q-gutter-sm justify-center">
                <q-btn class="full-width" label="Crear" type="submit" color="primary"/>
            </div>
        </form>
    </div>
</template>
<script>
import { useAuthStore } from '../stores/authStore'
import { useArtStore } from '../stores/artStore'
export default {
    name: 'CrearColeccion',
    data() {
        return {
            title: '',
           
        }
    },
    methods: { 
        async crearColeccion() {
            const authStore = useAuthStore()
            const artStore = useArtStore()
            console.log(this.title);
            
            const nuevaColeccion = {
                id: artStore.collections.length + 1,
                title: this.title,
            };
            await artStore.addColeccion(nuevaColeccion)
            if (authStore.isAuthenticated) {
                const user = authStore.user.id
                await artStore.addCollectionToUser(user, nuevaColeccion.id)
                this.$router.push({name: 'Home'})
            }
        }
    }
    
}
</script>
<style lang="">
    
</style>