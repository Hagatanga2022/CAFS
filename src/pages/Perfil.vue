<template>
  <q-layout  class="transition"  view="lHh Lpr lFf">

    <q-header class="no-shadow"
    >
      <q-toolbar class="upperbar-profile"
      
      >
        <q-toolbar-title 
        class="row"
        >
        <div class="column justify-center items-center">
          <img class="profile-pic" src="../images/account-circle-outline.png">
          <q-btn class="btn" style="height:10px;width:100px;border-radius:20px">Adicionar Foto</q-btn>
        </div>
        <q-item-label class="title-name row justify-center items-center"> {{PersonName}} </q-item-label>
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
    <q-page-container style="padding-top:150px;padding-left:100px">
      <q-container class="row justify-between" style="height:350px;width:85%">
        <q-item-label class="column justify-between" style=";width:400px">
        <div class="names">SIAPE
          <div class="nums">4126739</div>
        </div>
        <div class="names">CPF
          <div class="nums">1902741-20</div>
        </div>
        <div class="names">E-mail</div>
        <q-input type:email :input-style="{ height:'40px'}" class="input"></q-input>
        <div class="names">Senha</div>
        <q-input  type:password :input-style="{  height:'40px'}"  class="input"/>
        </q-item-label>
        
        <q-item-label class="column justify-center" style="background-color:#6E9EB2;height:60%;width:20%;border-radius:20px;color:white">
          <q-item-label class="row justify-center" style="font-size:18px">Para Contato</q-item-label>
            <div style="padding-left:10%;padding-top:10%">Nome</div>
            <q-item-label class="column items-center"><input style="border-radius:5px" class="contact"/></q-item-label>
            <div style="padding-left:10%;padding-top:2%">Número</div>
            <q-item-label class="column items-center"><input style="border-radius:5px" class="contact"/></q-item-label>
            <div style="padding-left:10%;padding-top:2%">E-mail</div>
            <q-item-label class="column items-center" style="padding-bottom:20px"><input style="border-radius:5px" class="contact"/></q-item-label>
            <q-item-label class="column items-center" style="padding:0px;margin:0px">
            <q-btn class="btn-contacts">Atualizar</q-btn>
            </q-item-label>
        </q-item-label>
      </q-container>
      <q-item-label class="row justify-start" style="padding-top:4%;width:400px">
      <q-btn style="width:130px;height:40px;background-color:#5A8A9F;color:white;border:1px transparent solid;border-radius:50px">Pronto</q-btn>
      </q-item-label>
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
const PersonName = 'Fernando Antônio Silva'
const pageSubname = ''

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
      PersonName,
      pageSubname,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
.upperbar-profile{
  height: 220px;
  justify-content: center;
  display: flex;
  padding-left: 10%;
  margin: 0px;
  background-color: #6E9EB2;
}
.sidebar-content{
  height: 100%;
}
.title-name{
  color: white;
  font-size: 40px;
  font-weight: 500;
  padding-left: 10%;
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
.image{
  width: 150px;
}
.profile-pic{
    width: 170px;
    
}
.names{
  color: #164C64;
  font-size: 16.4px;
}
.nums{
  font-size: 31px;
  padding-top: 25px;
  padding-bottom: 20px;
}
.input{
  border: 3px solid #D9D9D9;
  border-radius:1px;
  height: 40px;
  max-width: 400px;
  display: block;
  margin: 1 auto;
}
.q-field__control:before, .q-field__control:after {
    content: ""; 
    position: relative; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
}
.contact{
  background-color:white;
  border: 0px;
  height: 20px;
}
.btn-contacts{
  width: 50%;
  min-height: 5%;
  height: 15px;
  padding: 0px;
  font-size: 11px;
  background-color: #5A8A9F;
  border-radius: 50px;
}
</style>