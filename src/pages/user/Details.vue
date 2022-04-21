<template>
    <q-page>
        <div class="column justify-center items-center">
            <q-card class="my-card pm-a-xs bg-grey-3" style="margin-top: 5%;">

                <q-card-section>
                    <q-item>
                        <q-item-section>
                            <div class="text-h5">{{ name }}</div>
                            <div class="text-subtitle2">login: {{ login }}</div>
                            <div class="text-subtitle3"> <br>
                                <p v-if="name">About {{ name }}:</p>
                                <p v-if="bio">{{ bio }}</p>
                                <p v-else="bio">
                                    <q-icon color="red" size="md" name="warning" /> user not add desription yet
                                </p>
                            </div>
                        </q-item-section>

                        <q-avatar rounded size="200px">
                            <img :src="avatarUser">
                        </q-avatar>

                    </q-item>
                    <div>
                        <q-chip>
                            <q-avatar color="positive" size="md" text-color="white"> {{ followers }}</q-avatar>
                            Followers
                        </q-chip>
                        <q-chip>
                            <q-avatar color="positive" size="md" text-color="white"> {{ following }}</q-avatar>
                            Following
                        </q-chip>
                    </div>
                    <q-card-actions align="right">
                        <q-btn flat @click="toggleDetails">{{ hide ? 'Hide' : 'Show' }} More Info</q-btn>
                        <q-btn flat>
                            <a target="_blank" :href="linkToProfile">See on github</a>
                        </q-btn>

                        <q-btn @click="$router.replace('/FinderV3')" icon="reply" label="Back to search" />


                    </q-card-actions>
                </q-card-section>
            </q-card>
            <q-card>
                <q-card-section v-show="hideRepo">
                    <q-dialog v-model="showDialog" color="primary" full-width class="q-dialog__backdrop">
                        <q-card class="bg-grey-3">
                            <q-card-section style="max-height: 50vh" class="scroll">

                                <div class=" q-pa-none row items-start q-gutter-none  justify-center bg-grey-3"
                                    v-if="repos">
                                    <table
                                        style="table-layout: fixed; word-wrap:break-word; width: 100%; column-width: fixed">
                                        <thead>
                                            <tr>
                                                <th span="1" style="width: 10%;">Number</th>
                                                <th span="1" style="width: 30%;">Repository ID</th>
                                                <th span="1" style="width: 40%;">Repository name</th>
                                                <th span="1" style="width: 10%;">Language</th>
                                                <th span="1" style="width: 10%;">More details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(repo, index) in repos" :key="id">
                                                <td style="width:auto">{{ index + 1 }}</td>
                                                <td> {{ repo.id }}</td>
                                                <td style="text-align:center">{{ repo.name }}</td>
                                                <td style="text-align:center"> {{ repo.language }}</td>
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
            <q-slide-transition>
                <q-card class="my-card details qp-tb-none bg-grey-3" v-show="hide">

                    <q-card-section horizontal>
                        <q-card-section class="text-caption" style="width: 50%">
                            <p>
                                <q-icon color="positive" size="md" name="drive_file_rename_outline"> </q-icon>
                                <strong>Name:</strong>
                                {{ name }}
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="face"> </q-icon>
                                <strong>Login:</strong>
                                {{ login }}
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="badge"> </q-icon>
                                <strong>ID:</strong>
                                {{ userId }}
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="email"> </q-icon>
                                <strong>Email:</strong>
                                {{ email }}
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="location_on"></q-icon>
                                <strong>Location:</strong>
                                {{ location }}
                            </p>
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section class="text-caption" style="width: 50%">
                            <p>
                                <q-icon color="positive" size="md" name="public"> </q-icon>
                                <strong>Public repos:</strong>
                                {{ publicRepos }}
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="article"> </q-icon>
                                <strong>Blog:</strong>
                                {{ linkToBlog }}
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="update"> </q-icon>
                                <strong>Last update:</strong>
                            </p>
                            <p>
                                <q-icon color="positive" size="md" name="link"> </q-icon>
                                <strong>Link to Github:</strong>

                                <a :href="linkToProfile" style="color: green" target="_blank">Go to github</a>
                            </p>


                        </q-card-section>


                    </q-card-section>

                    <q-btn class="full-width" @click="toggleRepositories">Show Repositories</q-btn>

                </q-card>
            </q-slide-transition>
        </div>
    </q-page>




    <!-- <div class="q-pa-md row items-start q-gutter-md">
            <div>
                <img class="col" :src="avatarUser" />
                <div class="text-h6">{{ name }}</div>
                <div class="text-subtitle1">login: {{ login }}</div>
                <div class="text-subtitle3"> <br>
                    <p v-if="name">About {{ name }}:</p>
                    <p v-if="bio">{{ bio }}</p>
                    <p v-else="bio"> user not add desription yet</p>
                </div>
                <div>
                    <div class="q-pa-md q-gutter-y-md">
                        <div class="q-gutter-sm" justify-evenly>
                            <q-chip>
                                <q-avatar color="positive" text-color="white"> {{ followers }}</q-avatar>
                                Followers
                            </q-chip>
                            <q-chip>
                                <q-avatar color="positive" text-color="white"> {{ following }}</q-avatar>
                                Following
                            </q-chip>

                        </div>
                    </div>
                </div>
                <q-btn-actions align="around" class="q-pa-md ">
                    <q-btn flat @click="toggleDetails">{{ hide ? 'Hide' : 'Show' }} More Info</q-btn>
                    <q-btn flat>
                        <a target="_blank" :href="linkToProfile">See on github</a>
                    </q-btn>
                    <q-btn @click="$router.replace('/FinderV3')" flat round dense bg-color="blue-10" icon="close" />
                </q-btn-actions>
            </div> -->

    <!-- <q-card class="my-card">
        <q-card-section horizontal>
            <q-img class="col" :src="avatarUser" />
        </q-card-section>
        <q-card-section>
            <div class="text-h6">{{ name }}</div>
            <div class="text-subtitle1">login: {{ login }}</div>
            <div class="text-subtitle3">
                <br>
                <p v-if="name">About {{ name }}:</p>
                <p v-if="bio">{{ bio }}</p>
                <p v-else="bio">About: user not add desription yet</p>
            </div>
            <q-card-section align="around">
                <q-chip>
                    <q-avatar color="positive" text-color="white"> {{ followers }}</q-avatar>
                    Followers
                </q-chip>
                <q-chip>
                    <q-avatar color="positive" text-color="white"> {{ following }}</q-avatar>
                    Following
                </q-chip>
            </q-card-section>
        </q-card-section>


        <div class="row justify-center">
            <q-card-actions align="left">
                <q-btn flat @click="toggleDetails">{{ hide ? 'Hide' : 'Show' }} More Info</q-btn>
                <q-btn flat>
                    <a target="_blank" :href="linkToProfile">See on github</a>
                </q-btn>
                <q-btn @click="$router.replace('/FinderV3')" flat round dense bg-color="blue-10" icon="close"
                    style="float: right;" />
            </q-card-actions>
        </div>
    </q-card> -->



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
    max-width: 600px;
}

.q-dialog__backdrop {
    backdrop-filter: blur(7px);
}

.details {
    width: 50%;
    transition: width 1s, height 4s;
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

}

tr:hover {
    background-color: #2ea44f;
    color: white;
}
</style>