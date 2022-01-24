<template>
    <section>
       js import: 
        <div class="columns is-vcentered">
        <div v-for="member in members" class="column" :key="member.id" >
            <Box :member="member">  </Box>
        </div>
    </div>
    <div id="json-column">
    <p>json import: </p>
    <div class="columns is-vcentered ">
        <div v-for="memberJson in membersJson" class="column" :key="memberJson.id" >
            <Box :member="memberJson">  </Box>
        </div>
    </div>
    </div>
    </section>
</template>


<script>
import { store } from '../store.js';
import Box from './Box.vue';

export default {
    name: 'BoxList',  
    data () {          
        return {
        members: store.state.dataJs,    
        membersJson: store.state.dataJson 
        } 
    },
    components: {
        Box,  
    } 
}
</script>




<style scoped>
.box {
    margin-top: 0px;
    background-color: teal; 
     }

#json-column {
    background-color: whitesmoke;
    padding-top: 10px;
    margin-bottom: 40px;
}
</style>
