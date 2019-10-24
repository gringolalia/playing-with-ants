<template lang="pug">
.hello
  h1.mt-3 {{ msg }}
  h2 Cloned in the So Be It Onion
  button.btn.btn-lg.btn-dark.mt-3(data-target='#navdrawerDefault2', data-toggle='navdrawer') Depress Me
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Adeus, Mundo Imundo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #35495E;
}
</style>
