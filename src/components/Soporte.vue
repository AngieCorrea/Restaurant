<template lang='pug'>
  main
    section.main-soporte
        div.main-soporte__ayuda
          router-link.home(to='/') Home
          a Ayuda
        div.main-soporte__info
          h1 Información y Ayuda
        div.main-soporte__description
          div.item1
            a Último pedido
            a Inscribe tu restaurante
            a Políticas de privacidad
            a Condiciones de uso
            a Preguntas frecuentes
            a Nuestro teléfono: 987654321
          div.item2
            h1 No tienes ordenes activas en el momento
            img.img(src='https://cdn.shopify.com/s/files/1/1061/1924/products/Crying_Face_Emoji_large.png?v=1480481052')
    Section
    Footer
  
</template>

<script>
import Section from "./Section";
import Footer from "./Footer";
export default {
components: {Section,Footer},
}
</script >

<style lang="sass" scope >

 

</style>
