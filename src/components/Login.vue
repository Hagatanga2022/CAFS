<template>
<q-container>
  <q-btn label="Login" @click="login = true" class="q-btn1" style="border-right:white 1px solid;border-radius:0px;" />
  <q-dialog v-model="login">
    <q-card class="pop-up-card">
      <q-card-title class="title">
        <h3>Login</h3> 
      </q-card-title>
      <q-form>
         <q-input class="input" square outlined v-model="text" label="Digite seu e-mail" color="teal"/>
         <q-input class="input mt-2" square outlined v-model="text" label="Digite sua senha" color="teal">
            <template v-slot:append>
              <q-icon name="eye" />
            </template>
         </q-input>
      </q-form>
    </q-card>
  </q-dialog>
</q-container>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      login: ref(false),
    }
  }
}
</script>

<style scoped>
.input {
  max-width: 400px;
  display: block;
  margin: 0 auto;
}
.title {
  color: #1D6382;
  margin-top: 5%;
  text-align: center;
}
.pop-up-card {
  width: 500px;
  height: 500px;
  max-width: 600px;
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
</style>