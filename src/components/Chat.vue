<template>

  <v-container style="margin-top:5px;">
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >

            <v-toolbar-title class="title white--text pl-0">
              {{name}}
            </v-toolbar-title>

            <v-spacer></v-spacer>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              Group chat
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>
        <div v-if="messages">
          <v-timeline
            align-top
            dense
          >
          
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.From }}</strong> @{{ message.Time }}
                </div>
                <div>{{ message.Message }}</div>
              </div>
            </v-timeline-item>
          
          </v-timeline>
          </div>

          <Input :name="name"/>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import Input from '@/components/Input';
import db from '@/Firebase/init.js';
import firebase from 'firebase/app';
export default {
    name: 'chat',
    props:['name'],
    components: {
    Input,
  },
    data(){
      return{
      ourmessages:[],
      messages:[]
    }
    },
    beforeCreate(){
      let ref=db.collection("Messages")
            ref.onSnapshot(function(snapshot) {
              console.log("messages array"+ this.messages)
              snapshot.docChanges().forEach(function(change) {
                  if (change.type === "added") {
                    console.log("messages array"+ this.messages)
                    var data=change.doc.data()
                    console.log(data)
                    //this.messages.push(data)
                     // console.log(change.doc.data().From)
                }
        });
      })
      .ca
    }
    
}
</script>