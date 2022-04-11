<template>
    <div class="container relative" style="padding: 5%; margin-top: 10px;">
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card">
                <q-card-section>
                    <q-card-section horizontal>
                        <q-img class="col" :src="avatarUser" />
                    </q-card-section>
                    <!-- <q-separator md inset /> -->
                    <q-card-section>
                        <div class="text-h6">{{ name }}</div>
                        <div class="text-subtitle1">{{ login }}</div>
                        <div class="text-subtitle3">{{ bio }}</div>
                    </q-card-section>

                    <q-card-actions align="left">
                        <q-btn @click="toggleDetails">{{ hide ? 'Hide' : 'Show' }} More Info</q-btn>

                        <q-btn flat>
                            <a target="blank" :href="linkToProfile">
                                Go
                                to github
                            </a>
                        </q-btn>
                    </q-card-actions>
                </q-card-section>
                <Q-CARD-SECTION v-show="hideRepo">dddd</Q-CARD-SECTION>
            </q-card>

            <q-card class="my-card details" v-show="hide">
                <q-card-section>
                    <p>
                        <strong>Name:</strong>
                        {{ name }}
                    </p>
                    <p>
                        <strong>ID:</strong>
                        {{ userId }}
                    </p>
                    <p>
                        <strong>Login:</strong>
                        {{ login }}
                    </p>
                    <p>
                        <q-badge transparent align="middle" color="blue-10">
                            <strong>Followers:</strong>
                            {{ followers }}
                        </q-badge>
                    </p>
                    <q-badge transparent align="middle" color="blue-8">
                        <strong>Following:</strong>
                        {{ following }}
                    </q-badge>
                    <p></p>
                    <p>
                        <strong>Email:</strong>
                        {{ email }}
                    </p>
                    <p>
                        <strong>Location:</strong>
                        {{ location }}
                    </p>

                    <p>
                        <strong>Public repos:</strong>
                        {{ publicRepos }}
                    </p>
                    <p>
                        <strong>Blog:</strong>
                        {{ linkToBlog }}
                    </p>
                    <p>
                        <strong>Link to Github:</strong>

                        <a :href="linkToProfile" text-color="green" target="_blank">Go to github</a>
                    </p>
                    <q-btn @click="toggleRepositories">{{ hideRepo ? 'Hide' : 'Show' }} Repositories</q-btn>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
    name: 'userDetailsView',
    data() {
        return ({
            userData: "",
            repos: "",
            avatarUser: "",
            bio: "",
            linkToProfile: "",
            linkToBlog: "",
            email: "",
            name: "",
            userId: "",
            location: "",
            followers: "",
            following: "",
            publicRepos: "",
            hide: true,
            hideRepo: true,

        })

    },
    methods: {
        getUserData() {
            const link = `https://api.github.com/users/${this.login}`;
            // console.log(link)
            axios.get(link).then((response) => {
                // console.log(response)
                this.userData = response.data;
                this.avatarUser = response.data.avatar_url;
                this.bio = response.data.bio;
                this.linkToProfile = response.data.html_url;
                this.linkToBlog = response.data.blog;
                this.followers = response.data.followers;
                this.following = response.data.following;
                this.name = response.data.name;
                this.email = response.data.email;
                this.userId = response.data.id;
                this.location = response.data.location;
                this.publicRepos = response.data.public_repos;
                this.hide = false;
                this.hideRepo = false;
                // console.log(response.data)
                // GET repo data 
                const link = `https://api.github.com/users/${this.login}/repos`;
                axios.get(link).then((response) => {
                    this.repos = response.data;
                    // console.log('aaa' + this.repos.data)
                    // console.log(this.repos)
                    console.log(response.data)

                });
            });
        },

        toggleDetails() {
            this.hide = !this.hide;
        },
        toggleRepositories() {
            this.hideRepo = !this.hideRepo;
        },
    },

    props: {
        login: {
            required: true,
            type: String,
        },
        repos: {
            required: true,
            type: Object,
        }
    },
    watch: {
        login: {
            immediate: true,
            handler() {
                // console.log(this.getUserData())
                return this.getUserData();


            },
        }
    }
})
</script>

 <style scoped>
.my-card {
    width: 100%;
    max-width: 300px;
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
    padding: 10px;
    margin-top: 10px;
}
a {
    text-decoration: none;
    color: white;
}
</style>