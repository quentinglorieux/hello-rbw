<template>
    <div class="columns is-vcentered">
        <div v-for="item in sharedState" class="column" v-bind:key="item.id" >
            Directus: <Box v-bind:member="item"> </Box> 
        </div>
    </div>
</template>


<script>
import { Directus } from '@directus/sdk';
import Box from './Box.vue';


export default {
    data () {         
        return {
        sharedState: null       
        } 
    },
    async created() {
        const directus = new Directus('https://directus.rubidiumweb.eu/');
        const response = await directus.items('Members').readMany();
        this.sharedState = response.data;
    },
    components: {
        Box, 
    } 
}
</script>


<style scoped>
.box {margin-top: 0px;}
</style>
