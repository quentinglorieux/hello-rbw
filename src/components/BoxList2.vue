<template>
    <div class="columns is-vcentered">
        <div v-for="item in members" class="column" :key="item.id" >
            Directus import: <Box :member="item"> </Box> 
        </div>
    </div>
</template>


<script>
import { Directus } from '@directus/sdk';
import Box from './Box.vue';


export default {
    data () {         
        return {
        members: null       
        } 
    },
    async created() {
        const directus = new Directus('https://directus.rubidiumweb.eu/');
        const response = await directus.items('Members').readMany();
        this.members = response.data;
    },
    components: {
        Box, 
    } 
}
</script>


<style scoped>
.box {margin-top: 0px;}
</style>
