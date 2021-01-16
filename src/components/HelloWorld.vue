<template>
<v-card 
    class="mx-auto my-12"
    max-width="374"
  >
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-2">
        <h1 class="display-2 font-weight-bold mb-3">
          CHAT APP
        </h1>
      </v-col>
    </v-row>
    <v-text-field
      label="Enter your Name"
      v-model="name"
      hide-details="auto"
    ></v-text-field><br>
    <div class="text-center">
    <v-btn
      rounded
      color="primary"
      dark
      @click="goToChat"
    >
      Let's Start
    </v-btn>
  </div>
  </v-container>
</v-card>
</template>

<script>

  export default {
    name: 'HelloWorld',
    components: {
 
  },
    data: () => ({
      name:''
    }),
    methods: {
      goToChat(){
        //console.log(this.name)
        //this.$router.push({ path:'/Chat' , params: { name:this.name }})
        //console.log("Routed")
        this.$router.push({name: 'Chat'});
      }
    }
  }
</script>
