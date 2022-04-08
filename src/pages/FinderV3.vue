<template>
    <div class="container relative" style="padding: 5%; margin-top: 10px;">
        <q-select v-model="selectedValue" :options="options" label="Standout">
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
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FinderV3',
    data() {
        return {
            options: [
                { login: "marcin", avatar_url: "https://avatars.githubusercontent.com/u/13852170?v=4" },
                { login: "nie marcin", avatar_url: "https://avatars.githubusercontent.com/u/3524577?v=4" }
            ],
            selectedValue: null,
        };
    },
    methods: {


    },


})
</script>  