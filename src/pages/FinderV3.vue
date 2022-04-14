<template>
    <div class="container relative" style="padding: 5%; margin-top: 10px;">
        <q-select
            v-model="selectedValue"
            :options="options"
            label="Standout"
            @update:model-value="onValueChange"
        >
            <template v-slot:selected-item="scope">
                <q-item>
                    <q-item-section avatar>
                        <q-avatar>
                            <img :src="scope.opt.avatar_url" />
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>{{ scope.opt.login }}</q-item-section>
                </q-item>
            </template>

            <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                    <q-item-section avatar>
                        <q-avatar>
                            <img :src="scope.opt.avatar_url" />
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>{{ scope.opt.login }}</q-item-section>
                </q-item>
            </template>
        </q-select>

        <div style="margin-top: 10%">
            <q-input
                v-model="inputValue"
                filled
                type="search"
                :options="options"
                rounded
                bg-color="teal-2"
                outlined
                debounce="500"
                label="SEARCH USER FROM GITHUB API"
                @input="getUsers"
            ></q-input>
            {{ inputValue }}
            <div>
                <ol>
                    <li
                        @click="selectedItem(user)"
                        v-for="(user, index) in filteredUser"
                        :key="`user-${index}`"
                    >
                        <q-item-section avatar>
                            <q-avatar>
                                <img :src="userAvatar" />
                            </q-avatar>
                            {{ user.login }} {{ user.avatar_url }}
                        </q-item-section>
                    </li>
                </ol>
            </div>
        </div>
        <span>{{ selectedItem.login }}</span>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FinderV3',
    data() {
        return {
            inputValue: "",
            userArray: [],
            isVisible: false,
            selectedItem: false,
            userAvatar: "",
            options: [
                { login: "nowaczewskimarcin", avatar_url: "https://avatars.githubusercontent.com/u/13852170?v=4" },
                { login: "bmadzinski", avatar_url: "https://avatars.githubusercontent.com/u/3524577?v=4" },
                { login: "alex", avatar_url: "https://avatars.githubusercontent.com/u/772?v=4" }
            ],
            selectedValue: null,
        };
    },
    methods: {

        onValueChange(aaaaa) {
            this.$router.push({ name: 'userDetails', params: { login: this.selectedValue.login } })

        },

        getUsers() {
            const link = `https://jsonplaceholder.typicode.com/users/${this.inputValue}`;
            // https://api.github.com/users/${this.inputValue}
            axios.get(link).then((response) => {
                this.users = response.data;
                this.avatarUser = response.data.avatar_url
                console.log(response.data)

            });
        },
        selectedItem(user) {
            this.selectedItem = user;
        },
    },
    computed: {
        filteredUser() {
            const query = this.inputValue.toLowerCase();
            if (this.inputValue === "") {
                return this.userArray;
            }
            return this.userArray.filter((user) => {
                return Object.values(user).some((word) =>
                    String(word).toLocaleLowerCase().includes(query)
                );
            })
        },
    },
    mounted() {
        fetch("https://api.github.com/users")
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                this.userArray = json;
            })
    }


})
</script>  