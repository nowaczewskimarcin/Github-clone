<template>
        <div class="container relative" style="padding: 5%;
        margin-top: 20px;">
          <h2 class="title">Get GitHub user</h2>
          <h3 class="subtitle">using Vue JS, REST API</h3>
          <h4 class="subtitle">Get any user on Github</h4>

          <q-input bg-color="deep-purple-4" style=" margin-top: 20px;" v-model="inputUser" rounded outlined label="enter user which you want find repos" />

           <button @click="searchRepo"
           class="button center"
                >Search</button>
        </div>
 
    <div class="container">
      <div class="table-container" v-bind="user" v-bind:key="user.id">
      
         <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card center">
      <img src="`{{ user.avatar_url }}`">

      <q-card-section>
        <div class="text-h6">Login: {{ user.login }}</div>
        <div class="text-subtitle2">Name: {{ user.name }}</div>
        <section>
          Last update: {{ user.updated_at}}
          <p>Followers: {{ user.followers }}</p>
            <p>Following: {{ user.following }}</p>
          <p>Link to Github: <a href="{{user.html_url}}">{{ user.html_url}}</a></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

        </section>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ user.login }}
      </q-card-section>
    </q-card>
    </div>
      </div>
    </div>
  
     
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
    name: 'SearchUser',
    // methods: {
    //   getReposOver() {
    //     const url = "https://api.github.com/search/repositories?q=stars:>100000";
    //     response = await fetch(url);
    //     result = this.response.json();
    //   }
    // }
      data() {
    return {
      user: "",
      inputUser: "",
  
    };
  },
  methods: {
   searchRepo () {
    const link = `https://api.github.com/users/${this.inputUser}`;
    axios.get(link).then((response) => {
      this.user = response.data;
      console.log(response.data)
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
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>