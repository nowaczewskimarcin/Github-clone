<template style="color: white">
  <div class="fit row inline wrap items-center justify-center">
    <div style="padding: 4%;">
      <h2 class="title">Get GitHub user</h2>
      <h3 class="subtitle">using Vue JS, REST API</h3>
      <h4 class="subtitle">Get any user on Github</h4>
    </div>

    <div>
      <q-input
        :rules="[val => val.length >= 3 || 'Please use minimum 3 characters']"
        style=" margin-top: 0; width: 350px;"
        v-model="inputUser"
        rounded
        outlined
        label="Please enter user which you want to find."
      />

      <button @click="searchRepo" class="button center">Search</button>
    </div>
  </div>

  <div v-show="hideBox">
    <div v-bind="user" v-bind:key="user.id">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img v-bind:src="img" />

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
              <a v-bind:href="linkToProfile" target="_blank">{{ user.html_url }}</a>
            </p>
            <button
              class="button center"
              @click="hide = !hide"
            >{{ hide ? 'Hide' : 'Show' }} More Info</button>
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
                <strong>Followers:</strong>
                {{ user.followers }}
              </p>
              <p>
                <strong>Following:</strong>
                {{ user.following }}
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
      hide: false,
      HideBox: false,
      img: "",
      linkToProfile: "",
      linkToBlog: "",

    };
  },
  methods: {
    searchRepo() {
      const link = `https://api.github.com/users/${this.inputUser}`;
      axios.get(link).then((response) => {
        this.user = response.data;
        this.img = response.data.avatar_url;
        this.linkToProfile = response.data.html_url;
        this.linkToBlog = response.data.blog;
        // console.log(response.data)
        this.hideBox = !this.hideBox;

      });
    },
  },
});
</script>

<style scoped>
body {
  overflow-wrap: break-word;
}
.button {
  background-color: #2ea44f;
  color: white;
  height: 50px;
  width: 200px;
  border: 0;
  transition: box-shadow 0.2s;
  border-radius: 0.375rem;
  text-align: center;
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
  text-align: center;
}
.my-card {
  width: 100%;
  max-width: 300px;
}
.hide {
  display: none;
}
.element {
  display: inline-block;
  width: 600px;
  height: 400px;
  padding: 15px;
  margin: 20px auto;
  border-color: azure;
  border-style: dotted;
}
.center {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}
</style>