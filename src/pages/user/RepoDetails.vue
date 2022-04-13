<template>
    <div class="container relative" style="padding: 4%;">
        <div
            class="q-pa-md row items-start q-gutter-md"
        >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
    name: 'repoDetails',
    data() {
        return ({


        })
    },
    methods: {
        // getUserData() {
        //     const link = `https://api.github.com/users/${this.login}`;
        //     // console.log(link)
        //     axios.get(link).then((response) => {
        //         this.userData = response.data;
        //         this.avatarUser = response.data.avatar_url;
        //         this.bio = response.data.bio;
        //         this.linkToProfile = response.data.html_url;
        //         this.linkToBlog = response.data.blog;
        //         this.followers = response.data.followers;
        //         this.following = response.data.following;
        //         this.name = response.data.name;
        //         this.email = response.data.email;
        //         this.userId = response.data.id;
        //         this.location = response.data.location;
        //         this.publicRepos = response.data.public_repos;
        //         this.hide = false;
        //         this.hideRepo = false;
        //         this.showDialogRepo = false;
        //         // console.log(response.data)

        //         // GET repo data 
        //         const linkRepo = `https://api.github.com/users/${this.login}/repos?per_page=100`;
        //         axios.get(linkRepo).then((response) => {
        //             this.repos = response.data;
        //             console.log(response.data)

        //         });
        //     });

        // },

        props: {
            login: {
                required: true,
                type: String,
            },
            repos: {
                required: true,
                type: String,
            }
        },
        // watch: {
        //     login: {
        //         immediate: true,
        //         handler() {
        //             // console.log(this.getUserData())
        //             return this.getUserData();
        //         },
        //     }
        // },
    }
})
</script>

<style scoped>
.my-card {
    width: 100%;
    max-width: 330px;
    max-height: 600px;
    height: 100%;
}
button {
    background-color: #2ea44f;
    color: white;
    height: 30px;
    width: auto;
    border: 0;
    transition: box-shadow 0.2s;
    border-radius: 0.375rem;
    text-align: center;
    text-decoration: none;
}
.button:hover {
    background-color: #2ea44ff3;
    color: black;
}
.button:active {
    transform: scale(1.05);
}
.center {
    margin: 0 auto;
    display: block;
    padding: 5px;
    margin-top: 5px;
}
a {
    text-decoration: none;
    color: white;
}
.table-container {
    border: 1px solid black;
    width: 100%;
}
td,
th {
    border: 1px solid black;
    padding: 5px;
    width: 5%;
}
tr:hover {
    background-color: #2ea44f;
    color: white;
}
</style>