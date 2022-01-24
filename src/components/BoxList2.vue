<template>
    <div class="columns is-vcentered">
        <div v-for="member in members" class="column" :key="member.id" >
            Directus import: <Box :member="member"> </Box> 
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
