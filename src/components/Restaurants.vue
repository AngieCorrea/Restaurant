<template lang='pug'>
  div.main-restaurant
    div.restaurant-left
      section.restaurant-left__categoria
        h1.title Super Categorias
        div.left.label
          label
            i.fas.fa-utensils
            input(type="radio" v-model="vue.vista" v-bind:value="true")
            | Todos
          label
            i.fas.fa-star
            input(type="radio" v-model="vue.vista" v-bind:value="false") 
            | Premium
      section.restaurant-left__filtros
        h1.title Filtros
        div.pagos
          p Métodos de pago
          div.left(v-for="pago in Pagos")
            .cuadradito
            p.name {{pago.name}}
        div.comidas
          p Comidas
          div.left(v-for='comida in comidas')
            .cuadradito
            p.name {{comida.name}}
    div(v-if="vue.vista").restaurant-right
      h1 Abiertos
      section.restaurant-right__datos(v-for='abierto in Abiertos')
        div.restaurant-right__datos--1
          img(:src='abierto.img')
          div
            h2.info1 {{abierto.info1}}
            p.info2 {{abierto.info2}}
        div.restaurant-right__datos--2
          div.restaurant-right__datos--2--detalles
            p.info2 {{abierto.cal}}
            i.fas.fa-star
            i.fas.fa-star
            i.fas.fa-star
            i.fas.fa-star
            i.fas.fa-star
          div.restaurant-right__datos--2--detalles
            p.info2  {{abierto.ent}} 
            h2.info1 {{abierto.min}}
          div.restaurant-right__datos--2--detalles
            p.info2  {{abierto.ped}}
            h2.info1  {{abierto.soles}}
          div.restaurant-right__datos--2--detalles
            p.info2 {{abierto.costo}}
            h2.info1  {{abierto.var}}
          button.button Pedir Ahora
    div(v-else="vue.vista").restaurant-right
      Premium

</template>

<script>
import Premium from './Premium'
export default {
  components: {Premium},
  data(){

    return{
      vue: {
        vista: true,
      },
 
      Pagos:[
        {
        name: "Efectivo",
        },
        {
        name: "Pago en Linea",
        },
        {
        name: "P.O.S",
        }
      ],

      comidas:[
        {
          name: "Cafetería y Sangucherías",

        },
        {
          name: "Carnes y Parrillas"
        },
        {
          name: "Cevicherías"
        },
        {
          name: "Chifas"
        },
        {
          name: "Comida Internacional"
        },
        {
          name: "Comisa Japonesa"
        },
        {
          name: "Comida Peruana"
        },
        {
          name: "Desayunos"
        },
        {
          name: "Empanadas y Arepas"
        },
        {
          name: "Hamburquegas y Salchipapas"
        },
        {
          name: "Licores y cervezas"
        },
        {
          name: "Menu de día"
        },
        {
          name: "Pizzas"
        },
        {
          name: "Pollería"
        },
        {
          name: "Postres y Helados"
        },
        {
          name: "Premium"
        },
        {
          name: "Saludable, ensalada y vegetariana"
        },
      ],
      Abiertos:[
        {
          img: "https://assets.domicilios.com/img/resources/17358_120_120.png",
          info1: "Mr. Suchi",
          info2: "Sushi/Makis",
          cal: "545 ",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
 
        },
          {
          img: "https://assets.domicilios.com/img/resources/23245_120_120.jpg",
          info1: "Telepizza",
          info2: "Pizzas",
          cal: "447 ",
          ent: "Entrega en ",
          min: "45 min",
          ped: "Pedido min",
          soles: "S/13.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/23140_120_120.jpg",
          info1: "Rokys",
          info2: "Polleria",
          cal: "104 ",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/00.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/8611_120_120.jpg",
          info1: "Popeyes",
          info2: "Polleria",
          cal: "545",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/20514_120_120.png",
          info1: "Las Tinajas",
          info2: "Polleria",
          cal: "545",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/6467_120_120.png",
          info1: "Delicass",
          info2: "Cafetería y Sanguchería",
          cal: "545 ",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
        },
         {
          img: "https://assets.domicilios.com/img/resources/17358_120_120.png",
          info1: "Mr. Suchi",
          info2: "Sushi/Makis",
          cal: "545 ",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/23245_120_120.jpg",
          info1: "Telepizza",
          info2: "Pizzas",
          cal: "447 ",
          ent: "Entrega en ",
          min: "45 min",
          ped: "Pedido min",
          soles: "S/13.00",
          costo: "Costo envio",
          var: "Variable",

        },
          {
          img: "https://assets.domicilios.com/img/resources/23140_120_120.jpg",
          info1: "Rokys",
          info2: "Polleria",
          cal: "104",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/00.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/8611_120_120.jpg",
          info1: "Popeyes",
          info2: "Polleria",
          cal: "545",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/20514_120_120.png",
          info1: "Las Tinajas",
          info2: "Polleria",
          cal: "545",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",
        },
          {
          img: "https://assets.domicilios.com/img/resources/6467_120_120.png",
          info1: "Delicass",
          info2: "Cafetería y Sanguchería",
          cal: "545",
          ent: "Entrega en ",
          min: "60 min",
          ped: "Pedido min",
          soles: "S/19.00",
          costo: "Costo envio",
          var: "Variable",

        }
      ]
    }
  }

}
</script>

<style>

</style>
