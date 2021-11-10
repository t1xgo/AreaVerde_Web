<template>
  <section id="home">
    <v-parallax dark src="@/assets/img/Green_wallpaper.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Area Verde</h1>
              <h1 class="font-weight-light">
                Un espacio en donde podrás reportar las basuras que <br />
                encuentres por las calles de Medellín, ayudando <br />
                a mantener un mejor ambiente en nuestra ciudad. <br />
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#about')"
                class="mt-5"
              >
                Conocer mas
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-green">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>

    <v-container fluid id="about" class="mt-2">
      <v-row align="center" justify="center">
        <h2 class="display-1 font-weight-bold mb-4" align="center">
          CLASIFICACION DE RESIDUOS
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
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
            <about class="aboutStyle"> </about>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves">
        <img src="~@/assets/img/wave.svg" />
      </div>
    </v-container>
  </section>
</template>

<script>
import about from "../views/AboutSection.vue";
//import axios from "axios";
export default {
  components: {
    about,
  },
  data: () => ({
    dialog: false,
    features: [
      {
        img: require("@/assets/img/Garbage_bins/whiteBin.png"),
        title: "CODIGO BLANCO",
        text:
          "Residuos que se encuentran limpios y que ademas son aprovechables. Por ejemplo: plásticos, vidrio, cartón, etc.",
      },
      {
        img: require("@/assets/img/Garbage_bins/blackBin.png"),
        title: "CODIGO NEGRO",
        text:
          "Residuos que ya están contaminados o que no son aprovechables. Por ejemplo: servilletas, papel higiénico, cartón sucio, tapabocas, etc.",
      },
      {
        img: require("@/assets/img/Garbage_bins/greenBin.png"),
        title: "CODIGO VERDE",
        text:
          "Residuos orgánicos aprovechables. Por ejemplo: restos de comida.",
      },
    ],
  }),
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
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
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
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
.aboutStyle {
  position: relative;
}
</style>

<style>
section {
  position: absolute;
  padding-bottom: 20px;
}
</style>
