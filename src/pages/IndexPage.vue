<template>
  <q-page
    class="flex flex-center"
    style="background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(8,8,108,1) 18%, rgba(9,9,121,1) 85%, rgba(158,0,255,1) 117%); color: white;
"
  >
    <div class="element">
      <h2 style="color: white;
  font-weight: 900">Welcome to the Github clone!</h2>
      <h5
        style="color: #8193b2; font-weight: 900"
      >In this page you can find users repositories, find directly user, read info about chosen one user and see Github rankings.</h5>
    </div>
    <div class="element">
      <img src="https://logodix.com/logo/64439.png" width="380" height="380" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style scoped>
.element {
  display: inline-block;
  width: 600px;
  height: 400px;
  padding: 15px;
  margin: 20px auto;
  border-color: azure;
  border-style: dotted;
}

.center {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>