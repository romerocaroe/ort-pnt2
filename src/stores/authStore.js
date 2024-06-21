import { defineStore } from 'pinia';
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    isAdmin: false
  }),
  actions: {
    async login(username,password){
      try {
        const response = await fetch('http://localhost:5000/usuario')
        console.log(response)
        const users = await response.json()
        console.log(users)
        const user = users.find(user => user.username === username && user.password === password)

        if(user) {
          this.isAuthenticated = true;
          this.user = user;
          this.isAdmin = user.admin;
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('isAdmin', user.admin ? 'true' : 'false')
          localStorage.setItem('user', JSON.stringify(user))
        }
      } catch (err){
        console.error('Error -'+err)
      }
    },
    logout(){
      this.isAuthenticated = false
      this.user = nullthis.isAdmin = false
      this.isAdmin = false
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('isAdmin')
    },
    async register(username, email, password){
      if(username && email && password){
        try {
          const user = {
              username,
              email,
              password,
          }

          console.log('usuario : ', user);

          const response = await axios.post('http://localhost:5000/usuario', user)

          console.log('RESPONSE: ', response);
          const data = await response.data; 

          this.isAuthenticated = true
          this.user = response.data
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('user', JSON.stringify(user))
        } catch(err){
          console.error('Error -'+err)
        }
      } else {
        alert('Completar todos los datos')
      }
    },
    checkAuth(){
      this.isAuthenticated = localStorage.getItem('isAuthenticated' == true)
      this.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false
      if(this.isAuthenticated){
        this.user = JSON.parse(localStorage.getItem('user'))
      }
    }
  }
})
