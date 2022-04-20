<template>
    <div class="q-pa-sm row items-start q-gutter-sm fixed-center" style="margin-top: 1%;">

        <q-card class="full-height" flat bordered>
            <q-btn @click="$router.push({ name: 'userDetails', params: { login: this.login } })" flat round dense
                icon="close" style="float: right;" />

            <q-card-section horizontal style="display: flex; justify-content: space-between">

                <q-card-section class="q-pt-xs">
                    <div class="text-overline">Repository</div>
                    <div class="text-h5 q-mt-sm q-mb-xs" style="text-decoration: underline;">{{ repos.name }}</div>
                    <div class="text-body1 text-grey">
                        <p>
                        <p> <span style="color: black;  font-weight: 800">User description:</span>
                            {{ repos.description }}</p>
                        </p>
                    </div>
                    <q-separator color="green" inset />
                </q-card-section>

                <q-card-section flat class="col-5 flex flex-center" align="right"
                    style="margin-bottom: -30px; margin-right: 0;">
                    <q-avatar size="186px">
                        <img :src="userAvatar" />
                    </q-avatar>
                </q-card-section>

            </q-card-section>

            <p>
                <a :href="linkToProfile" style="color: green; font-weight: 900; margin-left: 30px;" target="_blank">
                    <q-avatar>
                        <img
                            src="https://banner2.cleanpng.com/20190425/kuy/kisspng-computer-icons-github-clip-art-transparency-free-c-ebess-uq-undergrate-electrical-engineering-stude-5cc270f9d845d4.1334546315562467778859.jpg" />
                    </q-avatar>
                    Click to see this repo on GITHUB!
                </a>
            </p>

            <q-separator />
            <q-card-section class="q-pt-none text-subtitle2">
                <p><span style="color: black;  font-weight: 700">ID: <span class="text-subtitle2 text-grey">{{
                    repos.id
                }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Default branch: <span
                            class="text-subtitle2 text-grey">{{
                                repos.default_branch
                            }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Html url: <span class="text-subtitle2 text-grey">{{
                    repos.html_url
                }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Created at: <span class="text-subtitle2 text-grey">{{
                    repos.created_at
                }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Pushed at: <span class="text-subtitle2 text-grey">{{
                    repos.pushed_at
                }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Last changed: <span class="text-subtitle2 text-grey">{{
                    repos.updated_up
                }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Used language: <span
                            class="text-subtitle2 text-grey">{{
                                repos.language
                            }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">Repository visilibity: <span
                            class="text-subtitle2 text-grey">{{
                                repos.visibility
                            }}</span></span></p>
                <p><span style="color: black;  font-weight: 700">License: <span class="text-subtitle2 text-grey">{{
                    repos.license
                }}</span></span></p>


            </q-card-section>

        </q-card>

    </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
    name: 'repoDetails',
    data() {
        return ({
            repos: [],
            reposOwner: [],
            userAvatar: "",
            linkToProfile: "",

        })
    },
    methods: {
        getRepoData() {
            const linkRepo = `https://api.github.com/repos/${this.login}/${this.repoName}`;
            axios.get(linkRepo).then((response) => {
                this.repos = response.data;
                this.reposOwner = response.data.owner;
                this.userAvatar = response.data.owner.avatar_url;
                this.linkToProfile = response.data.html_url;
                console.log(response.data)
            });
        },
        ///// ???????
        nextRepo() {
            this.$router.push({ name: 'RepoDetails', params: { repoName: repo.name + 1, login: login } })
        },
    },
    props: {
        login: {
            required: true,
            type: String,
        },
        repoName: {
            required: true,
            type: Number,
        }
    },
    watch: {
        login: {
            immediate: true,
            handler() {
                // console.log(this.getUserData())
                return this.getRepoData();
            },
        }
    },
})
</script>

<style scoped>
.my-card {
    width: 100%;
    max-width: 600px;

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
    color: black;
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