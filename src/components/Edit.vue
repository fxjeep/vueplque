<template>
    <div class="container">
            <div class="columns is-3 has-background-light">
                <div class="column is-mobile is-full-mobile is-one-quarter-desktop is-narrow"> 
                   <Contacts></Contacts>
                </div>  
                <div class="column  is-hidden-mobile is-three-quarters-desktop has-background-light is-narrow bd-notification is-primary">
                    <Editor></Editor>
                </div>
            </div>
        </div>
</template>

<script>
import Contacts from './Contacts.vue'
import Editor from './Editor.vue'


export default {
    components: {Contacts, Editor},
    setup(){
         return {  }
    }
}
</script>

<style scoped>
.container {
    max-width:100%;
}
</style>