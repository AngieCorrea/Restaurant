<template lang='pug'>
  #app
    Menu
    router-view
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'app',
  components: {Menu},


  
}
</script>


<style lang='scss'>
  @import './assets/style/style';
</style>
