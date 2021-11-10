<template>
  <div class="dashboard">
    <!-- ...............................................Sidebar........................................................-->
    <nav>
      <v-navigation-drawer v-model="drawer" app>
        <div class="sul-box-raised-2 with-hover">
          <v-divider></v-divider>
          <v-list>
            <v-col cols="12" sm="12" justify="center" align-self="center">
              <v-list-item
                v-for="[icon, text] in links"
                :key="icon"
                link
                @click="sideBarAction(icon)"
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
    </nav>

    <!-- ...............................................Seccion principal........................................................-->
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

        <v-row class="mx-3">
          <v-col sm="6" cols="12">
            <v-card class="rounded-lg">
              <div class="sul-box-raised-1 with-hover">
                <v-card-text class="d-flex justify-space-between align-center">
                  <div><strong>Recogidos</strong> <br /></div>
                </v-card-text>
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
                        class=" rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cardcont codneg text-center"
                        shaped
                      >
                        <div class="sul-box-inset-1 with-hover py-15">
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
              </div>
            </v-card>
            <v-row>
              <v-col sm="12" cols="12">
                <v-row>
                  <v-col>
                    <div
                      id="reportesNoRecogidos"
                      class="my-5 py-5"
                      v-for="(report, index) in reportsNorecogidos"
                      :key="index"
                    >
                      <v-card
                        class=" rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl cardcont codneg text-center "
                        shaped
                      >
                        <div class="sul-box-inset-1 with-hover py-8">
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

                          <v-btn
                            color="green"
                            class="mt-6 modalButton"
                            @click="putEstado(report)"
                            tile
                          >
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
      <!-- ...............................................Seccion Home........................................................-->
      <v-window-item :value="2">
        <v-row>
          <v-col cols="10"> <home></home> </v-col>
        </v-row>
      </v-window-item>
      <!-- ...............................................Seccion Feed........................................................-->
      <v-window-item :value="3">
        <feed></feed>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import home from "../components/LoggedHome.vue";
import feed from "../components/LoginFeed.vue";
import Swal from "sweetalert2/src/sweetalert2.js";
import axios from "axios";
export default {
  components: {
    home,
    feed,
  },
  token: "",
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
      links: [
        ["mdi-microsoft-windows", "Tablero"],
        ["mdi-home", "Inicio"],
        ["mdi-format-line-weight", "Feed"],
        ["mdi-logout", "Salir"],
      ],
      reports: [],
      reportsNorecogidos: [],
    };
  },
  beforeMount() {
    this.token = localStorage.getItem("token");
    console.log(this.token);
    let id = localStorage.getItem("user-id");
    console.log("ESTE ES EL ID", id);
    this.getReportesPendientes();
    this.getReportesRecogidos();
    console.log("ACAAAAAAA");
  },
  methods: {
    sideBarAction(item) {
      if (item == "mdi-microsoft-windows") {
        this.step = 1;
      } else if (item == "mdi-home") {
        this.step = 2;
      } else if (item == "mdi-format-line-weight") {
        this.step = 3;
      }
    },
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
    getUserLogeado() {
      this.id = localStorage.getItem("user-id");
    },
    async getReportesPendientes() {
      try {
        let token = this.token;
        let id = localStorage.getItem("user-id");
        let response = await axios.get(
          `http://localhost:3001/getReportsPendientes/${id}`,
          {
            headers: { token },
          }
        );
        console.log(response);
        this.reportsNorecogidos = response.data.content;
      } catch (error) {
        console.log(error);
      }
    },
    async putEstado(report) {
      try {
        let token = this.token;
        await axios.put("http://localhost:3001/cambiarEstado", report, {
          headers: { token },
        });
        Swal.fire({
          icon: "success",
          title: "Ok...",
          text: "Reporte actualizado",
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    async getReportesRecogidos() {
      try {
        let token = this.token;
        let id = localStorage.getItem("user-id");
        let response = await axios.get(
          `http://localhost:3001/getReportsRecogidos/${id}`,
          {
            headers: { token },
          }
        );
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
