<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    class="items-list"
  >
  <q-item-section
      v-if="icon"
      avatar
      style="padding-right:0p"
      to=link
    >
      <q-icon  size="20px" :name="icon" />
    </q-item-section>
    <q-item-section>
      {{ title }}
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
