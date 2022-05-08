<template>
    <section>
         <nav class="navbar is-white has-background-light">
            <div class="container">
                <div class="navbar-brand ">
                    <a class="navbar-item brand-text" href="../index.html">
                        Plaque Admin
                    </a>
                    <div class="navbar-burger burger" :class="{'is-active':isActive}" data-target="navMenu" @click="toggleMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navMenu" class="navbar-menu" :class="{'is-active':isActive}">
                    <div class="navbar-start">
                        <router-link to="/Main/" class="navbar-item">Edit</router-link>
                        <router-link to="/Main/Print" class="navbar-item">Print</router-link>
                        <router-link to="/Main/Data" class="navbar-item">Data</router-link>
                        <a class="navbar-item" @click="handleLogout">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
         <router-view></router-view>
         <div class="loader-wrapper" v-show="showLoading">
            <div class="loader is-loading"></div>
        </div>
    </section>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


export default {
    setup(){
        const isActive = ref(false)
        const error = ref(null)
        const showLoading = computed(()=> store.state.showLoading );
        const store = useStore()
        const router = useRouter()

        const handleLogout = async ()  => { logout(store, error, router)}
        const toggleMenu = ()=>{
            isActive.value = !isActive.value;
        };
         return { handleLogout, toggleMenu, showLoading, error, isActive }
    }
}

async function logout(store, error, router) {
  try {
      store.dispatch('logout')
            .then(function(res){
                router.push('/Login')
            }, function(err){
            });
      
    }
    catch (err) {
      error.value = err.message
    }
}

</script>