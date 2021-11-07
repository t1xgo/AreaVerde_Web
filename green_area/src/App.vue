<template>
  <v-app>
    <v-main class="light-mode colour">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.colour {
  background-color: #ebecf0;
}
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>

<script>
export default {
  name: "App",

  components: {},
  data: () => ({
    //
  }),
};
</script>
