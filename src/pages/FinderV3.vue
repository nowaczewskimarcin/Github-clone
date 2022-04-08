<template>
    <div class="container relative" style="padding: 5%; margin-top: 10px;">
        <q-select v-model="selectedValue" :options="options" label="Standout" />
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FinderV3',
    data() {
        return {
            options: ["kkkk", "aaaa"],
            selectedValue: "kkkkkk",
        };
    },
    methods: {

    }

})
</script>  