<template>
    <div class="box">
        <p>I can extract the data from the prop: {{member.first_name}} {{member.last_name}} </p>
    </div>
</template>

<script>
import { Directus } from '@directus/sdk';
const directus = new Directus('https://directus.rubidiumweb.eu/');

export default {
  data () {
    return {
      member: null
    }
  },
  async created() {
    const response = await directus.items('Members').readMany();
    this.member = response.data;
    console.log(this.member);
  }
}
</script>


<style scoped>
.box {
  background-color: #42b983;
  color: antiquewhite;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 80%;
}
#id1 {
  padding-top: 40px;
  color: #2c3e50;
}
</style>
