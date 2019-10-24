<template lang="pug">
.hello(style="height: calc(100vh - 60px); display: flex; flex-direction: column; align-items: center; justify-content: center")
  img.mt-5(src='../../static/img/hammer-sickle.svg', alt='The So Be It Onion', width='150px')
  h1 {{ msg }}
  h2 Dylan Thomas
  h3 Whoever He Was
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

.hello {
  margin: 0px;
}
</style>
