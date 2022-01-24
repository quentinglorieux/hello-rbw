<template>
    <div class="box">
        <p>I can extract the data from the prop: {{member.first_name}} {{member.last_name}} </p>
        <!-- Extracting the data from the prop member and its key (defined in the seed.js file) -->
        <div id="id1">Or from a comupted method: {{memberFullName}}</div>
        <!-- Extracting the data from the computed method  -->
        <!-- the id1 is just for styling -->
    </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['member'],  // loading the prop from the v-bind in the parent element BoxList.vue. The prop is the full object here and is used in the template to access the data
  computed: {         // using a computed methods to create a direct rendering of the FullName (to avoid long template)
    memberFullName() {
      return this.member.first_name + " " + this.member.last_name;  // this refer to the object Box: equivalent to {{member.first_name}} in the template 
      }
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
