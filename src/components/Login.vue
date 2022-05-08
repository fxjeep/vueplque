<template>
  <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column">
            <div class="box">
              <p class="subtitle">Plaque Editor {{modeName}}</p>
              <br />
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="email" id="email">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="password" id="password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-success" @click="handleLogin">
                    Plaque Login
                    </button>
                     <button class="button is-success" @click="signup">
                    Sign Up
                    </button>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

async function login(store, email, password, error, router)
{
      if (!email.value || !password.value){
        alert("Please enter username and password");
        return;
      }
      
      store.dispatch('login', {
              email: email.value,
              password: password.value
          })
          .then(function(result){
              router.push('/Main')
          }, function(error){
              alert(error)
          })
          .catch(function(ex){
              alert(ex);
          });
}


export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()

    const handleLogin = async () => { login(store, email, password, error, router) }
    const signup = ()=>{
      if (!email.value || !password.value){
        alert("Please enter username and password");
        return;
      }
      
      store.dispatch('signup', {
              email: email.value,
              password: password.value
          })
          .then(function(result){
              alert("user created, please login")
          }, function(error){
              alert(error)
          })
          .catch(function(ex){
              alert(ex);
          });
    }
    return { handleLogin, email, password, error,signup }
  }
}
</script>
