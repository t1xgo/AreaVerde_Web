<template>
  <section id="statistics">
    <navbar :color="color" :flat="flat" />

    <v-row class="mx-10">
      <v-col cols="12" sm="12">
        <v-card
          class="
            rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl
            c
            text-center
          "
          shaped
        >
          <div class="sul-box-raised-1 with-hover py-10 pb-15">
            <v-row align="center" justify="center">
              <h2
                class="display-1 font-weight-bold mb-4 titleh2"
                align="center"
              >
                Total de reportes:
                {{ totalReportes }}
              </h2>
              <v-col cols="10">
                <v-row align="center" justify="space-around">
                  <v-col
                    cols="12"
                    sm="4"
                    class="text-center"
                    v-for="(feature, i) in estadisticas"
                    :key="i"
                  >
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        shaped
                        :elevation="hover ? 10 : 4"
                        :class="{ up: hover }"
                      >
                        <div class="sul-box-inset-1 with-hover py-10">
                          <v-img
                            :src="feature.img"
                            max-width="100px"
                            class="d-block ml-auto mr-auto"
                            :class="{ 'zoom-efect': hover }"
                          ></v-img>
                          <h1 class="font-weight-regular">
                            Total: {{ feature.total }}
                          </h1>
                          <h3 class="font-weight-regular">
                            Recogidos: {{ feature.recogidos }}
                          </h3>
                        </div>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mx-10 mt-10">
      <v-col sm="12" cols="12">
        <v-col align="center" justify="center">
          <div
            id="reportesRecogidos"
            class="my-5 py-5"
            v-for="(report, index) in reports"
            :key="index"
          >
            <v-card
              class="
                rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl
                cardcont
                codneg
                text-center
              "
              shaped
            >
              <div class="sul-box-inset-1 with-hover py-15">
                <v-img
                  :src="`${rutaimagen}${report.rutaimagen}`"
                  width="60%"
                  class="ml-auto mr-auto"
                ></v-img>

                <v-row align="center" justify="center" class="mt-5">
                  <v-col
                    cols="12"
                    sm="8"
                    class="text-center"
                    align="center"
                    justify="center"
                  >
                    <h4 class="font-weight-regular subtitle-1 text-center">
                      <strong> Descripción: </strong>
                      {{ report.descripcion }}
                      <br />
                      <br />
                      <strong> Ubicación: </strong>
                      {{ report.ubicacion }}
                      <br />
                      <br />
                      <strong> Categoria: </strong>
                      {{ report.categoria }}
                    </h4>
                  </v-col>
                  <br />
                </v-row>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Navbar from "../components/Navigation.vue";
import axios from "axios";
export default {
  components: { Navbar },
  beforeMount() {
    this.getReportesRecogidos();
    this.gettotalReportes();
    this.getTotalCategorias();
    this.getporcentajeRecogidos();
  },
  data() {
    return {
      rutaimagen: "http://localhost:3001/public/static/",
      totalReportes: "",
      reports: [],
      dialog: false,
      estadisticas: [
        {
          img: require("@/assets/img/Garbage_bins/whiteBin.png"),
          recogidos: "0%",
          total: "0",
        },
        {
          img: require("@/assets/img/Garbage_bins/greenBin.png"),
          recogidos: "0%",
          total: "0",
        },
        {
          img: require("@/assets/img/Garbage_bins/blackBin.png"),
          recogidos: "0%",
          total: "0",
        },
      ],
    };
  },
  methods: {
    async gettotalReportes() {
      try {
        let url = `http://localhost:3001/totalreportes`;
        let response = await axios.get(url);
        this.totalReportes = response.data.content.rows[0].count;
      } catch (error) {
        console.error(error);
      }
    },
    async getReportesRecogidos() {
      try {
        let response = await axios.get(
          `http://localhost:3001/getReportsRecogidos`);
        this.reports = response.data.content;
      } catch (error) {
        console.log(error);
      }
    },
    async getTotalCategorias() {
      let categorias = [1, 2, 3];
      for (let i = 0; i < categorias.length; i++) {
        try {
          let url = `http://localhost:3001/totalreportesCategoria/${categorias[i]}`;
          let response = await axios.get(url);
          this.estadisticas[i].total = response.data.content.rows[0].count;
        } catch (error) {
          console.error(error);
        }
      }
    },
    async getporcentajeRecogidos() {
      let categorias = [1, 2, 3];
      for (let i = 0; i < categorias.length; i++) {
        try {
          let url = `http://localhost:3001/porcentajeCategoria/${categorias[i]}/`;
          let response = await axios.get(url);
          let valor = response.data.content.rows[0].count;
          console.log(valor);
          let porcentaje = 0;
          if (valor != 0) {
            porcentaje = (valor * 100) / this.estadisticas[i].total;
            porcentaje = porcentaje.toFixed(2);
          }
          this.estadisticas[i].recogidos = `${porcentaje}%`;
        } catch (error) {
          console.error(error);
        }
      }
    },
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
