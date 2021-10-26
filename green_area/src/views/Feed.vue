<template>
  <v-parallax dark src="@/assets/img/bg.png" height="100vh">
    <navbar :color="color" :flat="flat" />
    <section id="statistics">
      <v-container fluid id="about" class="mt-2 cont">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" xl="8" justify="center" align="center">
            <v-card
              class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n15 cardcont text-center"
              shaped
            >
              <v-row align="center" justify="center">
                <h2
                  class="display-1 font-weight-bold mb-4 titleh2"
                  align="center"
                >
                  Resumen estadístico
                </h2>
                <v-col cols="10">
                  <v-row align="center" justify="space-around">
                    <v-col
                      cols="12"
                      sm="4"
                      class="text-center"
                      v-for="(feature, i) in features"
                      :key="i"
                    >
                      <v-hover v-slot:default="{ hover }">
                        <v-card
                          class="card"
                          shaped
                          :elevation="hover ? 10 : 4"
                          :class="{ up: hover }"
                        >
                          <v-img
                            :src="feature.img"
                            max-width="100px"
                            class="d-block ml-auto mr-auto"
                            :class="{ 'zoom-efect': hover }"
                          ></v-img>
                          <h1 class="font-weight-regular">
                            {{ feature.title }}
                          </h1>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="10">
                  <v-row align="center" justify="space-around">
                    <v-col>
                      <img :src="require(`@/assets/img/chart.png`)" />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid id="about" class="mt-2"> </v-container>
    </section>
  </v-parallax>
</template>

<script>
import Navbar from "../components/Navigation.vue";
export default {
  components: { Navbar },

  data() {
    return {
      dialog: false,
      features: [
        {
          img: require("@/assets/img/Garbage_bins/whiteBin.png"),
          title: "26%",
        },
        {
          img: require("@/assets/img/Garbage_bins/blackBin.png"),
          title: "44%",
        },
        {
          img: require("@/assets/img/Garbage_bins/greenBin.png"),
          title: "30%",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
};
</script>

<style lang="scss">
#statistics {
  position: relative;
  margin-top: 2%;
}
.cont {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-top: 15%;
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
.titleh2 {
  padding-top: 20px;
}
</style>
