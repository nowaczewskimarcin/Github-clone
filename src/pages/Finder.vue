<template>
    <div class="container relative" style="padding: 2%; margin-top: 10px;">
        <h5 class="subtitle" style="color: #8193b2; font-weight: 900">Find user</h5>

  <div id="q-app">
  <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <div v-for="n in samples" :key="n.value">
        <q-select
          filled
          v-model="model[n.value]"
          use-chips
          :label="n.label"
          :options="n.items"
          @filter="(i,u,a) => { filterFn({i,u,a}, n) }"
          style="width: 250px"
          use-input
          emit-value
        >
        </q-select>
        </div>
      </div>
    </div>
</div>
        <!-- <button @click="find" class="button center">Search</button>
        {{ user.id }}
        <button @click="finder" class="button center">FINDER !</button> -->
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

// import 'bulma/css/bulma.css';

export default defineComponent({
    name: 'Finder',
      el: '#q-app',
    // methods: {
    //   getReposOver() {
    //     const url = "https://api.github.com/search/repositories?q=stars:>100000";
    //     response = await fetch(url);
    //     result = this.response.json();
    //   }
    // }
    data () {
    return {
      model: { car: 'magic'},
      samples: [
    
        { label: 'Lazy Maquina', value: 'maq', items: ['']}
      ]
    }
  },

  methods: {
    filterFn ({i, u, a}, n ) {
      console.log(i);
      // Simulate API: Call Api accorting to sample
      console.log(`I'm called by ${n.value}`)
      setTimeout(() => {
        u(() => {
          if (n.value === 'dev') {
            n.items = ['Dev1', 'Dev2', 'Dev3']
          } else {
            n.items = ['Magic', 'Genius', 'Caramba'] // Simulation. Api return value diferent
          }
        })
      }, 1000)
    },

    abortFilterFn () {
      console.log('delayed filter aborted')
    }
  }
})
</script>

<style>

</style>