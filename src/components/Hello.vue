<template lang="pug">
.hello
  img.mt-5(src='../../static/img/hammer-sickle.svg', alt='The So Be It Onion', width='150px')
  h1.mt-4 {{ msg }}
  h2.my-3 Cloned in the So Be It Onion
  h3 Flex Direction Column Justify Content
  button.btn.btn-lg.btn-dark.mt-5(data-target='#navdrawerDefault2', data-toggle='navdrawer')
    i.material-icons.mr-2 restaurant
    | O Cardápio

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
