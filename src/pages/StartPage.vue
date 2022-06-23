<template>
  <q-layout  style="background-color:#1D6382" view="lHh Lpr lFf">
    <q-header >
      <q-toolbar class="topbar"
      >
        <q-item-label class="sphere"></q-item-label>
        <q-item-label class="sphere"></q-item-label>
        <q-item-label class="sphere"></q-item-label>
        <q-item-label class="sphere"></q-item-label>
        <q-item-label class="sphere"></q-item-label>
        <q-item-label class="sphere"></q-item-label>
        <q-toolbar-title 
        class="column"
        >
        <q-item-label class="row justify-end">
          <Login />
          <q-btn class="q-btn1">
            Cadastro
          </q-btn>
        </q-item-label>
        
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-item 
      style="
      background-color:#1D6382;
      padding-top:5%;
      padding-right:4%
      "
      class="container"
      >
      <q-item-label class="sphere-cube"></q-item-label>
      <q-item-label class="cube"></q-item-label>
      <q-item-label class="cube"></q-item-label>
      <q-item-label class="text">
        <q-item-title class="text row justify-center items-center">
          Controle de Acesso a Fábrica de Software
        </q-item-title>
        <div class="text">
          O Controle de acesso 
          à fábrica de software, 
          referido pelo acrônimo C.A.F.S, 
          é um sistema que busca auxiliar 
          os coordenadores e as suas equipes
          a gerenciarem a sua jornada de trabalho 
          previamente estabelecida
        </div>
      </q-item-label>
      </q-item>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import Login from 'components/Login.vue'

const linksList = [
  {
    title: 'Pesquisar',
    icon: 'search',
    link:'/#/pesquisa'
  },
  {
    title: 'Home',
    icon: 'home',
    link:'/#/home'
  },
  {
    title: 'Bolsistas',
    icon: 'school',
    link:'/#/bolsistas'
  },
  {
    title: 'Computadores',
    icon: 'computer',
    link:'/#/computadores'
  },
  {
    title: 'Projetos',
    icon: 'folder_open',
    link:'/#/projetos'
  },
]
const helpLink = [
  {
    title:'Projetos Concluidos',
    icon:'task_alt'
  },
  {
    title:'Perfil',
    icon:'account_circle'
  },
  {
    title:'Sair',
    icon:'logout'
  },
  

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    Login,
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      essentialLinks2: helpLink,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
@viewport {
  user-zoom: fixed;
}

.topbar{
  height: 10px;
  justify-content: center;
  display: flex;
  padding: 0px;
  margin: 0px;
  background-color: #1D6382;
}
.sidebar-content{
  height: 100%;
}
.title{
  color: white;
  font-size: 40px;
  font-weight: 500;
}
.minor-title{
  color: white;
}
.container{
  height: 93vh;
  
}
.q-item__label + .q-item__label {
    margin-top: 1px;
}
.q-item__section--avatar {
    color: inherit;
    min-width: 0px
}
.q-item {
    min-height: 37px;
    padding: 8px 16px;
    transition: color 0.3s, background-color 0.3s;
    justify-content: right;
    
}
.q-btn1:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: inherit;
    box-shadow:none;
}
.cube:nth-child(3){
  background-color: #FFFFFF;
  width: 500px;
  height: 500px;
  border-radius: 30px;
  transform: rotate(45deg);
  position: fixed;
  left: 125px;
  top: 320px;
  box-shadow: 0px 10px 30px #88888857;
  
}
.cube:nth-child(2){
  background-color: #D9D9D9;
  width: 530px;
  height: 530px;
  border-radius: 40px;
  transform: rotate(45deg);
  position: fixed;
  left: 35px;
  top: 310px;
}
.sphere-cube{
  background-color: #5A8A9F; 
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position:fixed;
  left: 320px;
  top: 190px;
}
.sphere:nth-child(6){
  background-color: #5A8A9F; 
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position:fixed;
  right: 20px;
  top: 600px;
}
.sphere:nth-child(5){
  background-color: #5a8a9f81; 
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position:fixed;
  right: -5px;
  top:590px;
}
.sphere:nth-child(4){
  background-color: #5a8a9fb6; 
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position:fixed;
  left: 350px;
  top: 65px;
}
.sphere:nth-child(3){
  background-color: #5A8A9F; 
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position:fixed;
  left: 50px;
  top: 35px;
}
.sphere:nth-child(2){
  background-color: #5a8a9f9f; 
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position:fixed;
  left: 30px;
  top: 80px;
}
.sphere:nth-child(1){
  background-color: #5a8a9f81; 
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position:fixed;
  left: 110px;
  top: 50px;
}
.text{
  width: 500px;
  height: 200px;
}
.text:nth-child(1){
  font-size: 47px;
  line-height: 60px;
  text-align:right;
}
.text:nth-child(2){
  font-size: 30px;
  line-height: 30px;
  text-align:right;

}

html{
  overflow: hidden;
}
.text{
  color: white;
}
</style>