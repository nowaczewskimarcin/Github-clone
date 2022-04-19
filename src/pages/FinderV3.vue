<template>
    <q-page padding
        style="background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(8,8,108,1) 18%, rgba(9,9,121,1) 85%, rgba(158,0,255,1) 117%); color: white; width: 100%;">
        <div class="column center justify-center box" style="margin-top: 10%; width: 80%">
            <!-- <q-select
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
            </q-select>-->
            <q-input v-model="inputValue" filled type="search" bg-color="teal-2" debounce="500"
                label="SEARCH USER FROM GITHUB API"></q-input>

            <div v-if="inputValue">
                <ul>
                    <li @click="selectItem(user)" v-for="(user, index) in filteredUser" :key="`user-${index}`">
                        <q-item clickable v-ripple>
                            <q-item-section side>
                                <q-avatar rounded size="65px">
                                    <img :src="user.avatar_url" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>{{ user.login }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </li>
                </ul>
            </div>
        </div>
    </q-page>
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
            selectedItem: null,
            selectedValue: null,
        };
    },
    methods: {
        // onValueChange(aaaaa) {
        //     this.$router.push({ name: 'userDetails', params: { login: this.selectedValue.login } })
        // },
        selectItem(user) {
            this.selectedItem = user;
            console.log(user)
            this.$router.push({ name: 'userDetails', params: { login: this.selectedItem.login } })
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
    },
    props: {
        login: {
            required: true,
            type: String,
        }
    },

})
</script>  

<style scoped>
ul,
li {
    list-style-type: none;
    list-style: none outside none;
    margin: auto;
    padding-left: 0;
}

.element {
    display: inline-block;
    width: 600px;
    padding: 5px;
    margin: 5px auto;
    border-color: azure;
}

.center {
    display: flex;
    justify-content: space-between;
}

.box {
    width: 100%;
    padding: 12px 20px;
    margin: auto auto;
    box-sizing: border-box;
}
</style>