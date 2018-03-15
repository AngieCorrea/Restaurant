<template lang='pug'>
  header.main-header#nav.head
    #main-nav-toggle
      i.fas.fa-bars
    Ventana
    router-link(to='/')
      h1.logo Don Pepe
    div.main-header__lugar
      spam Chiclayo   
      i.fas.fa-caret-down 
    div.main-header__buscar
      i.fas.fa-search 
    nav.main-nav
      li.main-nav__item: router-link.main-nav__link(to='/promociones') Promociones
      li.main-nav__item: router-link.main-nav__link(to='/soporte') Soporte
      li.main-nav__item: router-link.main-nav__link(to='/sesion') Iniciar Sesion
    
</template>

<script>
import Ventana from './Ventana'
export default {
components: {Ventana},

  created(){
    window.addEventListener('scroll', () =>{
      let sc=window.pageYOffset;
      if(sc>=1){
        document.getElementById('nav').classList.add('red')
      }else{
          document.getElementById('nav').classList.remove('red')
      }
      
    })

  },
  mounted(){
    document.getElementById('main-nav-toggle').addEventListener('click', () =>{
      document.getElementById('main-ventana').classList.toggle('show')
      console.log('hola')
    })
  }
  

}
</script>

<style>

</style>
