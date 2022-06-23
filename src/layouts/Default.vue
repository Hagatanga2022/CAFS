<template>
  <q-layout  class="transition"  view="lHh Lpr lFf">

    <q-header class="no-shadow"
    >
      <q-toolbar class="upperbar"
      >
        <q-toolbar-title 
        class="column"
        >
        <q-item-label class="title row justify-center items-center"> {{pageName}} </q-item-label>
        <q-item-label  class="minor-title row justify-center items-centers"> {{pageSubname}} </q-item-label>
          
         
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="180"
      class="no-flow"
    >
      <q-list class="sidebar-content d-flex">
        <q-item-label class="um row justify-center items-center">
          <q-btn class="iflogo" :to="{ name: 'StartPage' }" light>
            <q-img class="image" alt="IF Logo" :src="IfLogo" contain></q-img>
          </q-btn>
        </q-item-label>
        <q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="dois"
        />
        </q-item-label>
        <q-item-label class="tres"></q-item-label>
        <q-item-label>
          <OtherLinks
          v-for="link in essentialLinks2"
          :key="link.title"
          v-bind="link"
          class="quatro"
        />

        </q-item-label>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import OtherLinks from 'components/OtherLinks.vue'
import IfLogo from '../images/iflogo.jpg'

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
const otherLinks = [
  {
    title:'Projetos Concluidos',
    icon:'task_alt',
    link:'/#/projetosc'
  },
  {
    title:'Perfil',
    icon:'account_circle',
    link:'/#/perfil'
  },
  {
    title:'Sair',
    icon:'logout',
    link:''
  },
  
]
const pageName = 'C.A.F.S'
const pageSubname = 'Controle de acesso a fábrica de software'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    OtherLinks,
    IfLogo
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      essentialLinks2:otherLinks,
      leftDrawerOpen,
      pageName,
      pageSubname,
      IfLogo,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
.no-flow{
  overflow: hidden;
}
.upperbar{
  height: 120px;
  justify-content: center;
  display: flex;
  padding: 0px;
  margin: 0px;
  background-color: #6E9EB2;
}
.sidebar-content, .iflogo{
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
.um{
  background-color: #6E9EB2;
}
.dois{
  height: 15%;
  background-color: #6E9EB2;
  color:white
}
.tres{
  min-height: 44.6%;
  max-height: 100%;
    background-color: #6E9EB2;

}
.quatro{
  height: 15%;
    background-color: #6E9EB2;
  color: white;
}
.items-list{
  height:10px;
  margin:0px;
  padding-bottom: 0px;
  padding-top: 0px;
  
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
}
.image{
  width: 150px;
}
</style>