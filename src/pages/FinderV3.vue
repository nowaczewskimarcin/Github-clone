<template>
    <div class="container relative" style="padding: 5%; margin-top: 10px;">
        <q-select v-model="selectedValue" :options="optionsOnlyLogin" label="Standout" />
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

    computed: {
        optionsOnlyLogin() {
            return this.options.map((x) => { return x.login });
        }
    }

})
</script>  