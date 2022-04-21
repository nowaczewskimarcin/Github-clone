<template>
    <q-page padding
        style="background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(8,8,108,1) 18%, rgba(9,9,121,1) 85%, rgba(158,0,255,1) 117%);">
        <div class="column justify-center items-center q-pa-xl">


            <q-card flat bordered class=" my-card" style="background-color: #8193b2;">
                <q-card-section>
                    <div class="text-h6">About</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    In this app you can find in 100 first (by ID) users from Github, page use Github API. <br>
                    After inicial page and click button, user go to page where is input to enter searching user. <br>
                    When user entered letters the results is displayed under searching bar. <br>
                    This page was made for the purpose of training and learning. <br>
                </q-card-section>

                <q-separator inset />

                <q-card-section>
                    <p>Used technologies:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>Vue</li>
                        <li>Quasar</li>
                        <li>REST API</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                </q-card-section>
            </q-card>
        </div>

    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'About'
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