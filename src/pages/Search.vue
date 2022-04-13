<template>
  <div class="container relative" style="padding: 2%; margin-top: 10px;">
    <h4 class="title" style="color: #8193b2; font-weight: 900">Get GitHub User</h4>
    <h4 class="subtitle" style="color: #8193b2; font-weight: 900">using Vue JS, REST API</h4>
    <h5
      class="subtitle"
      style="color: #8193b2; font-weight: 900"
    >Get any user info and repositories list</h5>
    <table v-if="users">
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
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.html_url }}</td>
          <td>{{ user.language }}</td>
          <td>{{ user.login }}</td>
        </tr>
      </tbody>
    </table>

    <q-input
      v-model="inputUser"
      :rules="[val => val.length >= 3 || 'Please use minimum 3 characters']"
      rounded
      outlined
      label="Please enter login user which you want to find."
    />

    <button @click="searchUser" class="button center">Search</button>
  </div>

  <div v-show="hideBox">
    <div v-bind="user" v-bind:key="user.id">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <q-card-section horizontal>
            <q-card-section>
              <!-- <img v-bind:src="img" width="200" height="200"/> -->
              <q-avatar size="200px" class="center">
                <img v-bind:src="img" />
              </q-avatar>
            </q-card-section>

            <q-card-section>
              <p>
                <strong>Login:</strong>
                {{ user.login }}
              </p>
              <p>
                <strong>User name:</strong>
                {{ user.name }}
              </p>
              <p>
                <strong>Bio:</strong>
                {{ user.bio }}
              </p>
              <p></p>

              <p>
                Link to Github:
                <a :href="linkToProfile" target="_blank">{{ user.html_url }}</a>
              </p>
            </q-card-section>
          </q-card-section>
          <q-separator inset />
          <q-card-actions>
            <button
              class="button center"
              @click="hide = !hide"
            >{{ hide ? 'Hide' : 'Show' }} More Info</button>
            <button @click="searchRepo" class="button center">Repositories</button>
          </q-card-actions>
          <q-separator inset />

          <div v-show="hide">
            <p>
              <strong>User ID:</strong>
              {{ user.id }}
            </p>
            <p>
              <strong>Company:</strong>
              {{ user.company }}
            </p>
            <p>
              <strong>Blog:</strong>
              <a target="_blank" :href="linkToBlog">{{ user.blog }}</a>
            </p>
            <p>
              <q-badge transparent align="middle" color="blue-10">
                <strong>Followers:</strong>
                {{ user.followers }}
              </q-badge>
            </p>
            <p>
              <q-badge transparent align="middle" color="blue-8">
                <strong>Following:</strong>
                {{ user.following }}
              </q-badge>
            </p>
            <p>
              <strong>Location:</strong>
              {{ user.location }}
            </p>
            <p>
              <strong>Email:</strong>
              {{ user.email }}
            </p>
            <p>
              <strong>Last update:</strong>
              {{ user.updated_at }}
            </p>
          </div>

          <q-card-section>
            <div class="container" v-show="hideTable">
              <div class="table-container">
                <table style="table-layout: fixed; word-wrap:break-word; column-width: 150px;">
                  <thead>
                    <tr>
                      <th>Repository ID</th>
                      <th>URL</th>
                      <th>Repository name</th>
                      <th>Language</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="repo in repos" :key="id">
                      <td>{{ repo.id }}</td>
                      <td>{{ repo.html_url }}</td>

                      <td>{{ repo.name }}</td>
                      <td>{{ repo.language }}</td>
                      <td>{{ repo.owner.login }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
// import 'bulma/css/bulma.css';

export default defineComponent({
  name: 'Search',
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
      repos: [],
      inputUser: "",
      hide: false,
      HideBox: false,
      img: "",
      linkToProfile: "",
      linkToBlog: "",
    };
  },
  methods: {
    searchRepo() {
      const link = `https://api.github.com/users/${this.inputUser}/repos`;
      axios.get(link).then((response) => {
        this.repos = response.data;
        console.log(this.repos)
        this.hideTable = !this.hideTable;
      });
    },
    searchUser() {
      const link = `https://api.github.com/users/${this.inputUser}`;
      axios.get(link).then((response) => {
        console.log(response)
        this.user = response.data;
        this.img = response.data.avatar_url;
        this.linkToProfile = response.data.html_url;
        this.linkToBlog = response.data.blog;
        console.log(response.data)
        this.hideBox = !this.hideBox;

      });
    },
  },
});
</script>

<style scoped>
button {
  background-color: #2ea44f;
  color: white;
  height: 50px;
  width: 200px;
  border: 0;
  transition: box-shadow 0.2s;
  border-radius: 0.375rem;
  text-align: center;
}
.button:hover {
  background-color: #2ea44ff3;
  color: black;
}
.button:active {
  transform: scale(1.05);
}
code.table td,
.table-th {
  padding: 20px;
}
.center {
  margin: 0 auto;
  display: block;
  padding: 10px;
  margin-top: 10px;
}

img {
  max-width: 100%;
  height: auto;
  background-size: contain;
}
.table-container {
  border: 1px solid black;
}
td,
th {
  border: 1px solid black;
  padding: 5px;
  width: 15%;
}
</style>