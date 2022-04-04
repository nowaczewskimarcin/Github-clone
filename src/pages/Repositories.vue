<template>
          <div class="container relative" style="padding: 5%;
        margin-top: 20px;">
          <h2 class="title">Get GitHub Repositories</h2>
          <h3 class="subtitle">using Vue JS, REST API</h3>
          <h4 class="subtitle">Get any user repositories list</h4>

          <q-input bg-color="deep-purple-4" v-model="inputUser" style=" margin-top: 20px;" rounded outlined label="enter user which you want find repos" />

           <button @click="searchRepo"
           class="button center"
                >Search</button>
        </div>
 
    <div class="container">
      <div class="table-container">
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>URL</th>
              <th>Language</th>
              <th>Login</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="repo in repos" v-bind:key="repo.id">
              <td>{{ repo.id }}</td>
              <td>{{ repo.name }}</td>
              <td>{{ repo.html_url }}</td>
              <td>{{ repo.language }}</td>
              <td>{{ repo.owner.login }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
     
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import 'bulma/css/bulma.css'

export default defineComponent({
    name: 'Repositories',
    // methods: {
    //   getReposOver() {
    //     const url = "https://api.github.com/search/repositories?q=stars:>100000";
    //     response = await fetch(url);
    //     result = this.response.json();
    //   }
    // }
      data() {
    return {
      repos: null,
      inputUser: "",
  
    };
  },
  methods: {
   searchRepo () {
    const link = `https://api.github.com/users/${this.inputUser}/repos`;
    axios.get(link).then((response) => {
      this.repos = response.data;
    });
   },
  },
});
</script>

<style scoped>
.button {
background-color: #2ea44f;
color: white;
height: 50px;
width: 200px;
padding: 15px;
border: 0;
transition: box-shadow .2s;
border-radius: 0.375rem;
}
code.table td,
.table th {
  padding: 20px;
}

.center {
margin: 0 auto; 
display: block; 
padding: 15px;
margin-top: 15px;
}
</style>