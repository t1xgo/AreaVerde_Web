<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h1>Tablero</h1>
    </v-subheader>
    <br />
    <v-row>
      <v-col lg="7" cols="12">
        <v-row>
          <v-alert dense text type="success">
            Ingreso exitoso! Bienvenido a <strong>Area verde</strong>
          </v-alert>
        </v-row>

        <v-row class="formRow">
          <v-col sm="12" cols="12">
            <v-card class="elevation-6 mt-5 mb-10">
              <componenteDialog
                v-if="this.dialogError == true"
                :estadoDialog="true"
                :tituloMensaje="'Error'"
                :mensaje="'Ocurrió un error registrando el usuario, verifique que todos los campos estén ingresados y/o que la información sea valida'"
              />
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Agregar un reporte</h2>
                    <h4 class="text-center grey--text">
                      Por favor ingresa la información necesaria para poder
                      hacer un reporte
                    </h4>
                    <v-form
                      ref="formReport"
                      v-model="valid"
                      class="pa-3 pt-4"
                      lazy-validation
                    >
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            :rules="rules"
                            v-model="report.descripcion"
                            label="Descripción (opcional)"
                            outlined
                            dense
                            color="green"
                            autocomplete="false"
                            class="mt-16"
                          >
                          </v-text-field>
                          <v-text-field
                            :rules="rules"
                            v-model="report.ubicacion"
                            label="Ubicación"
                            outlined
                            dense
                            color="green"
                            autocomplete="false"
                          >
                          </v-text-field>

                          <v-select
                            :rules="rules"
                            v-model="report.id_categoria"
                            :items="categoria"
                            label="Categoría"
                            outlined
                          ></v-select>

                          <v-file-input
                            :rules="rules"
                            v-model="report.ruta_imagen"
                            accept="image/png, image/jpeg, image/bmp"
                            placeholder="Adjuntar"
                            prepend-icon="mdi-camera"
                            label="Adjuntar evidencia"
                          ></v-file-input>
                          <br />
                          <v-btn color="green" dark block tile>
                            Reportar
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="feedRow">
          <v-col sm="12" cols="12">
            <v-card
              class="
                mx-12
                rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl
                mt-n15
                cardcont
                codneg
                text-center
              "
              shaped
            >
              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  sm="12"
                  class="d-md-flex"
                  align="center"
                  justify="center"
                >
                  <img
                    :src="require(`@/assets/img/basura1.jpg`)"
                    width="90%"
                    class="d-block ml-auto mr-auto"
                  />
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  sm="12"
                  class="d-md-flex text-center"
                  align="center"
                  justify="center"
                >
                  <h4 class="font-weight-regular subtitle-1">
                    <strong> Descripción: </strong>
                    Basura con un olor muy fuerte en el sector de los Alpes,
                    empieza a ser incómodo para la gente del alrededor.
                    <br />
                    <br />
                    <strong> Ubicación: </strong>
                    Belen, Los Alpes.
                    <br />
                    <br />
                    <strong> Estado: </strong>
                    Pendiente de recolección.
                  </h4>
                </v-col>
                <hr size="5px" width="50%" color="black" />
                <br />
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="feedRow">
          <v-col sm="12" cols="12">
            <v-card
              class="
                mx-12
                rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl
                mt-n15
                cardcont
                codver
                text-center
              "
              shaped
            >
              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  sm="12"
                  class="d-md-flex"
                  align="center"
                  justify="center"
                >
                  <img
                    :src="require(`@/assets/img/basura2.png`)"
                    width="90%"
                    class="d-block ml-auto mr-auto"
                  />
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <v-col
                  cols="12"
                  sm="12"
                  class="d-md-flex text-center"
                  align="center"
                  justify="center"
                >
                  <h4 class="font-weight-regular subtitle-1">
                    <strong> Descripción: </strong>
                    Residuos encontrados en una zona donde claramente se indica
                    que no está permitido.
                    <br />
                    <br />
                    <strong> Ubicación: </strong>
                    Laureles, Estadio.
                    <br />
                    <br />
                    <strong> Estado: </strong>
                    Pendiente de recolección.
                  </h4>
                </v-col>
                <hr size="5px" width="50%" color="green" />
                <br />
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="5">
        <v-card>
          <v-card-title>Historial en vivo</v-card-title>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item color="black" small>
                <strong>Hace 5 minutos</strong>
                <div class="text-caption">Confirmado una recolección</div>
              </v-timeline-item>
              <v-timeline-item color="green" small>
                <strong>Hace 35 minutos</strong>
                <div class="text-caption mb-2">Confirmado una recolección</div>
              </v-timeline-item>

              <v-timeline-item color="white" small>
                <strong>Jace 44 minutos</strong>
                <div class="text-caption">Confirmado una recolección</div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  name: "Dashboard",
  data() {
    return {
      dialogError: false,
      categoria: ["Reciclable", "Organicos", "No reciclables"],
      report: {
        descipcion: "",
        id_categoria: "",
        id_usuario: "",
        ubicacion: "",
        ruta_imagen: "",
        estado: "Pendiente de recolección",
      },
      rules: {
        required: [(v) => !!v || "El campo es obligatorio"],
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailRules: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /.+@.+\..+/.test(v) || "Correo invalido",
        ],
      },
      activityLog: [
        {
          title: "Total Products",
          amount: 50,
          icon: "mdi-account",
          color: "cyan lighten-3",
        },
        {
          title: "Total Customer",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "green darken-2",
        },
        {
          title: "Total Sale",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
        },
        {
          title: "Pending Orders",
          amount: 3433,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
      ],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
        { text: "Actions", value: "action" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
      ],
      reports: [
        {
          evidence: require("@/assets/img/basura1.jpg"),
          description:
            "Basura con un olor muy fuerte en el sector de los Alpes, empieza a ser incómodo para la gente del alrededor.",
          ubication: "Belen, Los Alpes.",
          colorCode: "Codigo negro",
          state: "Pendiente",
        },
        {
          evidence: require("@/assets/img/basura2.png"),
          description:
            "Residuos encontrados en una zona donde claramente se indica que no está permitido.",
          ubication: "Laureles, Estadio.",
          colorCode: "Codigo verde",
          state: "Pendiente",
        },
      ],
    };
  },

  /*beforeMount() {
    let token = localStorage.getItem("token");
    axios.setHeader("token", token);
  },*/

  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },

    loadUser() {
      let stringUser = localStorage.getItem("user-in");
      this.stringUser = JSON.parse(stringUser);
    },

    async createReport() {
      if (this.$refs.formReport.validate()) {
        try {
          if (this.report.id_categoria == "Reciclable") {
            this.report.id_categoria = "1";
          } else if (this.report.id_categoria == "Organicos") {
            this.report.id_categoria = "2";
          } else if (this.report.id_categoria == "No reciclables") {
            this.report.id_categoria = "3";
          }
          this.report.id_usuario = this.stringUser;
          let report = Object.assign({}, this.report);
          //let token = localStorage.getItem('token');
          let response = await axios.post(
            "http://localhost:3001/createReport",
            report,
            response.data.token
          );
          console.log(response.data);
          //let resp = response.data;
        } catch (error) {
          this.dialogError = true;
          console.log(error);
        }
      }
    },
  },
};
</script>

<style scoped>
.codneg {
  border: 10px;
  border-color: black;
}
.cardcont {
  padding: 2%;
}
.feedRow {
  padding-top: 10%;
}
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
