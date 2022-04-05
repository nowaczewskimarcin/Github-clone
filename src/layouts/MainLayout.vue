<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      style="background-color: #000080; background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(8,8,108,1) 18%, rgba(9,9,121,1) 85%, rgba(158,0,255,1) 117%); color: white;"
    >
      <q-toolbar>
        <q-tabs align="left">
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/Search" label="Search" />
          <!-- <input rounded outlined v-model="text" style="background-color:  #d1d1d1; border: none; color: white" placeholder="Search Github" /> -->
        </q-tabs>
      </q-toolbar>
    </q-header>

    <router-view />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

})
</script>
