<template lang="pug">
.hello.d-flex.align-items-center.justify-space-around
  .row
    .col-sm-4
      h2.mt-3 {{ msg }}
      h3 Martin Amis Tries to Name Us
      button.btn.btn-lg.btn-dark.mt-3(data-target='#navdrawerDefault2', data-toggle='navdrawer') Depress Me
    .col-sm-4
      h2.mt-3 {{ msg }}
      h3 Martin Amis Tries to Name Us
      button.btn.btn-lg.btn-dark.mt-3(data-target='#navdrawerDefault2', data-toggle='navdrawer') Depress Me
    .col-sm-4
      h2.mt-3 {{ msg }}
      h3 Martin Amis Tries to Name Us
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
.hello {
  height: 100vh;
}

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
