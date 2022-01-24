<template>
    <div class="columns is-vcentered">
        <div v-for="item in sharedState.data2" class="column" v-bind:key="item.id" >
            <!-- here the item is the loop element found in the  sharedState object .data2-->
            <Box 
            v-bind:member="item">  <!-- this binding pass the object item (the i-th element of sharedState.data2[i]) to the prop member for the child component Box.vue-->
            <!-- the Box.vue compoment will then read this prop to use the object inside -->
            </Box>
        </div>
    </div>
</template>


<script>
import { store } from '../store.js';
import Box from './Box.vue';

export default {
    name: 'BoxList',   // I still dont know what is the role of this
    data () {          // reserved keyword of Vue    
        return {
        sharedState: store.state1       // return the sharedState object to the template (this object is store.state1)  
        } 
    },
    components: {
        Box,  // required in the template    
    } 
}
</script>




<style scoped>

</style>
