<template>
  <v-app>
    <v-main>
      <navigation :color="color" :flat="flat" />
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script>
import navigation from "./components/Navigation";
export default {
  name: 'App',

components:
{
  navigation
},
  data: () => ({
    //
  }),
};
</script>
