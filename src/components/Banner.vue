<template lang='pug'>
  div#id-selected
    .container
      article.main-banner
        h1(slot="banner") Pide Domicilios en Chiclayo
        div.gps
          i.fas.fa-location-arrow
          p Usar ubicacion actual
        form.main-banner__form
          p Busca restaurantes con domicilio cerca a ti
          div.main-banner__form__direccion
            input.dato(type='text' placeholder='Direccion')
            select.dato
              option(value="1") Lambayeque
              option(value="2") Chiclayo 
              option(value="3") Ferreñafe
              option(value="10") Oyotun
          button Buscar restaurantes
</template>

<script>

export default {

  
}
</script>

<style>

</style>
