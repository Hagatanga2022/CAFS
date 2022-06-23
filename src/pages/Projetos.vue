<template>
  <q-layout  view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="upperbar"
      >
        <q-toolbar-title 
        class="column"
        >
          <div class="title row justify-start items-center">
            Projetos
          </div>
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
      <q-list class="sidebar-content ">
        <q-item-label
        class="um row justify-center items-center">
                 <img class="image" src="../images/iflogo.jpg">
        </q-item-label>
        <q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="dois"
        />
        </q-item-label>
        <q-item-label class="tres">
        <div class="flex justify-center">
          Projetos
          <q-item-label class="add-bolsista column justify-center">
            <q-btn class="btn row">
              Criar novo projeto
            </q-btn>
            <q-btn class="btn row">
              Projetos
            </q-btn>
          </q-item-label>
        </div>
        </q-item-label>
        <q-item-label>
          <EssentialLink
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
    OtherLinks
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      essentialLinks2:otherLinks,
      leftDrawerOpen,
      pageName,
      pageSubname,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
.upperbar{
  height: 120px;
  justify-content: center;
  display: flex;
  padding: 0px;
  margin: 0px;
  background-color: #6E9EB2;
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
.um{
  height: 16%;
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
</style>