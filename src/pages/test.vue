<template>
    <div class="container relative" style="padding: 4%;">
        <div class="q-pa-md row items-start q-gutter-md">
            sdddddddddd Lorem ipsum dolor sit amet, consectet
            ur adipisicing elit. A, expedita architecto dignissimos
            qui praesentium adipisci exercitationem doloribus iust
            o dolorum id esse iure velit dolor impedit. Sunt illo omnis
            ea facilis. Lorem ipsum dolor sit amet consectetur adipisicing e
            lit. Ea impedit officia recusandae laboriosam ex ad corporis quae, moll
            itia provident reiciendis! Ad voluptatum facilis magnam saepe optio exercit
            ationem dolor a quas.
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Test'
})
</script>

<style scoped>
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