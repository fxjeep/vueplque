<template>
    <div class="dropdown is-active">
        <div class="dropdown-trigger">
            <div class="field">
                <p class="control is-expanded has-icons-right">
                    <input class="input" type="search" placeholder="Contact Name or Code" 
                        v-model="searchText" 
                        v-on:keyup="onSearchInternal"/>
                    <span class="icon is-small is-right"><i class="fas fa-search"></i></span>
                </p>
            </div>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu" v-show="showDropDown">
            <div class="dropdown-content">
                <a href="#" class="dropdown-item" v-for="item in list" :key="item.id"
                    @click="onSelectedInternal(item)"
                    >{{item.text}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue'

export default {
    props: ['list', 'onSearch', 'onSelected'],
    setup(props){
        const showDropDown = computed(()=> props.list && props.list.length>0);
        const searchText = ref("");
        //const list = computed(()=>props.list);
        const onSearchInternal = ()=>{
            props.onSearch(searchText.value);
        }

        const onSelectedInternal = (item)=>{
            props.onSelected(item)
        }

        return {//list, 
                showDropDown, searchText,
                onSearchInternal, onSelectedInternal}
    }
}
</script>