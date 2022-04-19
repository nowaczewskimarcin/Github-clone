<template>
    <div class="container relative" style="padding: 4%;">
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card">
                <q-btn @click="$router.replace('/FinderV3')" flat round dense bg-color="blue-10" icon="close"
                    style="float: right;" />
                <q-card-section>
                    <q-card-section>
                        <q-card-section horizontal>
                            <q-img class="col" :src="avatarUser" />
                        </q-card-section>

                        <q-card-section>
                            <div class="text-h6">{{ name }}</div>
                            <div class="text-subtitle1">login: {{ login }}</div>
                            <div class="text-subtitle3">
                                <p v-if="name">About {{ name }}:</p>
                                <p>{{ bio }}</p>
                            </div>
                        </q-card-section>
                    </q-card-section>

                    <div class="row justify-center">
                        <q-card-actions align="left">
                            <q-btn flat @click="toggleDetails">{{ hide ? 'Hide' : 'Show' }} More Info</q-btn>
                            <q-btn flat>
                                <a target="_blank" :href="linkToProfile">See on github</a>
                            </q-btn>
                        </q-card-actions>
                    </div>
                </q-card-section>
            </q-card>

            <q-card>
                <q-card-section v-show="hideRepo">
                    <q-dialog v-model="showDialog" color="primary" full-width>
                        <q-card>
                            <q-card-section style="max-height: 50vh" class="scroll">
                                <div class="table-container" v-if="repos">
                                    <table
                                        style="table-layout: fixed; word-wrap:break-word; width: 100%; column-width: auto">
                                        <thead>
                                            <tr>
                                                <th span="1" style="width: 10%;">Number</th>
                                                <th span="1" style="width: 35%;">Repository ID</th>
                                                <th span="1" style="width: 45%;">Repository name</th>
                                                <th span="1" style="width: 10%;">More details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(repo, index) in repos" :key="id">
                                                <td style="width:auto">{{ index + 1 }}</td>
                                                <td>{{ repo.id }}</td>
                                                <!-- <td>{{ repo.html_url }}</td> -->

                                                <td>{{ repo.name }}</td>
                                                <!-- <td>{{ repo.language }}</td>
                                                <td>{{ repo.owner.login }}</td>-->
                                                <td>
                                                    <q-btn color="blue-10" icon-right="info" label="More info"
                                                        :to="{ name: 'repoDetails', params: { repoName: repo.name, login: login } }" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <q-card-actions align="left">All user public repositories: {{ publicRepos }}
                                </q-card-actions>
                                <q-card-actions align="right">
                                    <q-btn flat label="Exit" color v-close-popup />
                                </q-card-actions>
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </q-card-section>
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
                        <strong>Last update:</strong>
                    </p>
                    <p>
                        <strong>Link to Github:</strong>

                        <a :href="linkToProfile" text-color="green" target="_blank">Go to github</a>
                    </p>
                    <q-btn @click="toggleRepositories">Show Repositories</q-btn>
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
            html_url: "",
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
            lastUpdate: "",
            lastRepoUpdate: "",
            quantityRepos: "",
            hide: false,
            hideRepo: false,
            showDialog: false,
            showDialogRepo: false,

        })
    },
    methods: {
        getUserData() {
            const link = `https://api.github.com/users/${this.login}`;
            // console.log(link)
            axios.get(link).then((response) => {
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
                this.showDialogRepo = false;
                // console.log(response.data)

                // GET repo data 
                const linkRepo = `https://api.github.com/users/${this.login}/repos?per_page=100`;
                axios.get(linkRepo).then((response) => {
                    this.repos = response.data;
                    console.log(response.data)

                });
            });
        },
        toggleDetails() {
            this.hide = !this.hide;
        },
        toggleRepositories() {
            this.showDialog = true;
        },
        toggleRepositoriesDetails() {
            this.showDialogRepo = true;
        },
        goToRepoDetails() {
            this.$router.push({ name: 'RepoDetailsView', props: { id: repo.id } })
        }
    },

    props: {
        login: {
            required: true,
            type: String,
        },

    },
    watch: {
        login: {
            immediate: true,
            handler() {
                // console.log(this.getUserData())
                return this.getUserData();
            },
        }
    },

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