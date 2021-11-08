<template>
  <div class="dashboard">
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
          <h1>Tablero</h1>
        </v-subheader>
        <br />
        <v-row>
          <v-col sm="6" cols="12">
            <div class="sul-box-raised-1 with-hover">
              <v-alert dense text type="success">
                Ingreso exitoso! Bienvenido a <strong>Area verde</strong>
              </v-alert>
            </div>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" class="mx-3">
          <v-col sm="6" cols="12" align="center" justify="center">
            <v-card class="rounded-lg">
              <div class="sul-box-raised-1 with-hover">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div><strong>Recogidos</strong> <br /></div>
                </v-card-text>
                <v-card-actions class="d-flex justify-space-between">
                </v-card-actions>
              </div>
            </v-card>

            <v-row>
              <v-col sm="12" cols="12">
                <v-row align="center" justify="center">
                  <v-col>
                    <div
                      id="reportesRecogidos"
                      class="my-5 py-5"
                      v-for="(report, index) in reports"
                      :key="index"
                    >
                      <v-card
                        class=" rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cardcont codneg text-center "
                        shaped
                      >
                        <div class="sul-box-inset-1 with-hover py-7">
                          <v-img
                            :src="`${rutaimagen}${report.rutaimagen}`"
                            width="60%"
                            max-height="50%"
                            class="ml-auto mr-auto py-5"
                          ></v-img>

                          <v-row align="center" justify="center" class="mt-5">
                            <v-col
                              cols="12"
                              sm="8"
                              class="text-center"
                              align="center"
                              justify="center"
                            >
                              <h4
                                class="font-weight-regular subtitle-1 text-center"
                              >
                                <strong> Descripción: </strong>
                                {{ report.descripcion }}
                                <br />
                                <br />
                                <strong> Ubicación: </strong>
                                {{ report.ubicacion }}
                                <br />
                                <br />
                                <strong> Estado: </strong>
                                {{ report.estado }}
                                <br />
                                <br />
                                <strong> Categoria: </strong>
                                {{ report.id_categoria }}
                              </h4>
                            </v-col>
                            <br />
                          </v-row>

                          <v-btn color="green" class=" mt-6 modalButton" tile>
                            Cambiar estado
                          </v-btn>
                        </div>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>

          <v-col sm="6" cols="12" align="center" justify="center">
            <v-card class="rounded-lg">
              <div class="sul-box-raised-1 with-hover">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div><strong>No Recogidos</strong> <br /></div>
                </v-card-text>
                <v-card-actions class="d-flex justify-space-between">
                </v-card-actions>
              </div>
            </v-card>
            <v-row>
              <v-col sm="12" cols="12">
                <v-row align="center" justify="center">
                  <v-col>
                    <div
                      id="reportesNoRecogidos"
                      class="my-5 py-5"
                      v-for="(report, index) in reports"
                      :key="index"
                    >
                      <v-card
                        class=" rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cardcont codneg text-center "
                        shaped
                      >
                        <div class="sul-box-inset-1 with-hover py-7">
                          <v-img
                            :src="`${rutaimagen}${report.rutaimagen}`"
                            width="60%"
                            max-height="50%"
                            class="ml-auto mr-auto py-5"
                          ></v-img>

                          <v-row align="center" justify="center" class="mt-5">
                            <v-col
                              cols="12"
                              sm="8"
                              class="text-center"
                              align="center"
                              justify="center"
                            >
                              <h4
                                class="font-weight-regular subtitle-1 text-center"
                              >
                                <strong> Descripción: </strong>
                                {{ report.descripcion }}
                                <br />
                                <br />
                                <strong> Ubicación: </strong>
                                {{ report.ubicacion }}
                                <br />
                                <br />
                                <strong> Estado: </strong>
                                {{ report.estado }}
                                <br />
                                <br />
                                <strong> Categoria: </strong>
                                {{ report.id_categoria }}
                              </h4>
                            </v-col>
                            <br />
                          </v-row>

                          <v-btn color="green" class="mt-6 modalButton" tile>
                            Cambiar estado
                          </v-btn>
                        </div>
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
    <sidebar></sidebar>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import axios from "axios";
export default {
  components: {
    Sidebar,
  },
  name: "Dashboard",
  data() {
    return {
      rutaimagen: "http://localhost:3001/public/static/",
      step: 1,
      activityLog: [
        {
          title: "Recogidos",
          icon: "mdi-account-group-outline",
          color: "green darken-2",
        },
        {
          title: "Pendientes por recoger",
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
      ],
      reports: [],
      reportsNorecogidos: [],
    };
  },
  beforeMount() {
    this.getReportes();
    console.log("ACAAAAAAA");
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
    getUserLogeado() {
      this.id = localStorage.getItem("user-id");
    },
    async loadCategorias(id_categoria) {
      if (id_categoria == 1) {
        id_categoria = "Reciclable";
      } else if (id_categoria == 2) {
        id_categoria = "Organicos";
      } else if (id_categoria == 3) {
        id_categoria = "No reciclables";
      }
    },
    async getReportes() {
      try {
        let token = localStorage.getItem("token");
        let response = await axios.get("http://localhost:3001/getReports", {
          headers: { token },
        });
        this.reports = response.data.content;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
.dashboard {
  margin-left: 10px;
  padding: 10px;
}
</style>
