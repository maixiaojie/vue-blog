<template>
  <div class="hello">
      <myHeader></myHeader>
      <router-view/>
      
      <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/header/header'
import myFooter from '@/components/footer/footer'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    myFooter,
    myHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
