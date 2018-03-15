<template lang='pug'>
  div
    Banner
    div.comidas
      p Comidas
      div.left(v-for='comida in comidas')
        .cuadradito
        p.name {{comida.name}}
</template>

<script>
import Banner from "./Banner";
import Restaurants from './Restaurants'

export default {
components: {Banner,Restaurants}

}
</script>

<style>

</style>
