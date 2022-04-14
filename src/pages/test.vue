<template>
    <q-page padding>
        <div class="column justify-center items-center">
            <q-card class="my-card">
                <img
                    src="https://www.lego.com/cdn/cs/set/assets/blt13e6e2a178c38704/Spiderman-Sidekick-Tall-1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1"
                />
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Test'
})
</script>

<style scoped>
.my-card {
    width: 40%;
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
.button {
    background-color: #2ea44f;
    color: white;
    height: 50px;
    width: 200px;
    border: 0;
    transition: box-shadow 0.2s;
    border-radius: 0.375rem;
    text-align: center;
}
.button:hover {
    background-color: #2ea44ff3;
    color: black;
}
.button:active {
    transform: scale(1.05);
}
</style>