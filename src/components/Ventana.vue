<template lang='pug'>
  main.main-ventana#main-ventana
    .icon#main-cerrar
      i.fas.fa-times
    section.main-ventana__form
      button.button--1 Continuar con facebook
      form.main-ventana__form--desc
        label Ingresa con tu cuenta
        input(type='text' placeholder='Email')
        input(type='password', placeholder='Contraseña')
        button.button--2 Iniciar sesión
        button.button--3 ¿Olvidaste tu contraseña?
    section.main-ventana__ubicacion
      .item
        i.fas.fa-map-marker-alt
        p.info Cambiar ubicacion
      .item
        i.fas.fa-bookmark
        p.info Promociones
      .item
        i.fas.fa-question-circle
        p.info Ayuda
      .item
        i.fas.fa-flag-checkered
        p.info Chiclayo 
      div
        button.button--4 Dejar Comentarios
      p.dato Anlly Clariza
    

</template>

<script>
export default {
  // mounted(){
  //   document.getElementById('main-cerrar').addEventListener('click', () =>{
  //     document.getElementById('main-ventana').classList.toggle('show-cerrar')
  //     console.log('hola')
  //   })
  // }
  
}
</script>

<style>

</style>
