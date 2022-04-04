<template>
  <q-page class="flex flex-center" style="background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(8,8,108,1) 18%, rgba(9,9,121,1) 85%, rgba(158,0,255,1) 117%); color: white;
">
  <div class="element">
  <h2 style="color: white;
  font-weight: 900">Where the world builds software</h2>
        <h5 style="color: #8193b2; font-weight: 900" >Milions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</h5>
 
 <div class="center" style="
 padding: 15px;
 margin-left: 20px;">

   <input
   style="height: 50px;
   width: 300px;"/>
   
<button style="
background-color: #2ea44f;
color: white;
height: 50px;
width: 200px;
border: 0;
transition: box-shadow .2s;
border-radius: 0.375rem;"> Sign up for GitHub</button>
 </div>

  </div>
  <div class="element">

    
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