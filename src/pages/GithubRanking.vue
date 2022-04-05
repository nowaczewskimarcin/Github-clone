<!-- <template>
<div class="fit row wrap justify-start items-start content-start" style="margin-top: 50px; padding: 10px;">
<div class="element">

    <div class="q-pa-md q-gutter-sm">
   <q-banner rounded class="bg-indigo-10 text-white">

      Click to see <strong>Top 10 Users </strong>  on Github

      <template v-slot:action>
          <q-btn color="green-6" @click="topUsers"  icon-right="send" label="Top 10 Users" style="width:250px"/>
      </template>
    </q-banner>
  </div>

<div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-indigo-10 text-white">

      Click to see <strong>Top 10 Organizations </strong> on Github

      <template v-slot:action>
          <q-btn color="green-6"  icon-right="send" label="Top 10 Organizations" style="width:250px"  />
      </template>
    </q-banner>
  </div>

<div class="q-pa-md q-gutter-sm"> 
  <q-banner rounded class="bg-indigo-10 text-white">

      Click to see <strong>Top 10 Repositories </strong>on Github

      <template v-slot:action>
          <q-btn color="green-6
"  icon-right="send" style="width:250px" label="Top 10 Repositories" />
      </template>
    </q-banner>
  </div>


</div>


<div class="element">jjjj

</div>

</div>
</template>
<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'GithubRanking',
  // methods: {
  //   getReposOver() {
  //     const url = "https://api.github.com/search/repositories?q=stars:>100000";
  //     response = await fetch(url);
  //     result = this.response.json();
  //   }
  // }
  data() {
    return {
      user: "",
      inputUser: "",
      hide: false,
      HideBox: false,


    };
  },
  methods: {
    topUsers() {
      const link = `https://api.github.com/users/${this.inputUser}`;
      axios.get(link).then((response) => {
        this.user = response.data;
    
        // console.log(response.data)
       
      });
    },
  },
});
</script>

<style scoped>
.element {
    overflow: auto; min-width: 50%; max-width: 50%;
}
</style> -->