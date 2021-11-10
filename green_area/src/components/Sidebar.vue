<template>
  <v-navigation-drawer v-model="drawer" app>
    <div class="sul-box-raised-2 with-hover">
      <v-divider></v-divider>
      <v-list>
        <v-col cols="12" sm="12" justify="center" align-self="center">
          <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
            @click="goBack(icon)"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        ["mdi-microsoft-windows", "Inicio"],
        ["mdi-format-line-weight", "Feed"],
        ["mdi-logout", "Salir"],
      ],
    };
  },
};
</script>

<style scoped></style>
