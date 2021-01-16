<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Chat from '@/components/Chat'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Chat
  },

  data: () => ({
    //
  }),
};
</script>
