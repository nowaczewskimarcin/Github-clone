<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #000080; background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(8,8,108,1) 18%, rgba(9,9,121,1) 85%, rgba(158,0,255,1) 117%); color: white;">
      <q-toolbar>
        <q-tabs align="left">
        
        <q-route-tab to="/Repositories" label="Search user Repositories" />
        <!-- <input rounded outlined v-model="text" style="background-color:  #d1d1d1; border: none; color: white" placeholder="Search Github" /> -->

     
      </q-tabs>
      </q-toolbar>
    </q-header>
  
      <router-view />
   
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

 })
</script>
