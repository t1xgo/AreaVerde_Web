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
                :mensaje="
                  'Ocurrió un error registrando el usuario, verifique que todos los campos estén ingresados y/o que la información sea valida'
                "
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
                        <v-col cols="12" sm="8" align="center" justify="center">
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

                          <v-btn color="green" class="my-3" dark>
                            <v-file-input
                              :rules="rules"
                              hide-input
                              class="py-3 pl-2"
                              v-model="report.rutaimagen"
                              color="green"
                              accept="image/png, image/jpeg, image/bmp"
                              prepend-icon="mdi-camera"
                            ></v-file-input>
                          </v-btn>

                          <br />
                          <v-btn
                            @click="createReport()"
                            color="green"
                            dark
                            block
                            tile
                          >
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
          <v-col
            sm="12"
            cols="12"
            v-for="report in reports"
            :key="report.id_reporte"
          >
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
                    :src="`${pathImg}/${report.rutaimagen[0]}`"
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
                    {{ report.descripcion }}
                    <br />
                    <br />
                    <strong> Ubicación: </strong>
                    {{ report.ubicacion }}
                    <br />
                    <br />
                    <strong> Estado: </strong>
                    {{ report.estado }}
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
import Swal from "sweetalert2";
export default {
  beforeMount() {
    console.log("AAAAAAAAAAAA");
    console.log("BBBBBBBBBBBBBBBBB");
    this.loadReports();
    let token = localStorage.getItem("token");
    axios.setHeader("token", token);
  },

  components: {
    Sidebar,
  },

  name: "Dashboard",
  data() {
    return {
      dialogError: false,
      //Data spinner categorías
      categoria: ["Reciclable", "Organicos", "No reciclables"],
      //Path static de imagenes
      pathImg: 'http://localhost:3001/public/static',

      // Iterador imagenes
      i:0,

      //JSON Report para crearlo
      report: {
        descripcion: "",
        id_categoria: "",
        id_usuario: "",
        ubicacion: "",
        rutaimagen: null,
        estado: 0,
      },

      //JSON reports para listarlos
      reports: [],

      //Reglas formReport
      rules: {
        required: [(v) => !!v || "El campo es obligatorio"],
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailRules: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /.+@.+\..+/.test(v) || "Correo invalido",
        ],
      },
    };
  },

  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },

    cleanCampos() {
      (this.report.descripcion = ""),
      (this.report.ubicacion = ""),
      (this.report.rutaimagen = "");
    },

    async loadReports() {
      console.log("this.reports");
      try {
        let id = localStorage.getItem("user-id");
        let url = `http://localhost:3001/getReport/${id}`;
        let { data } = await axios.get(url);
        this.reports = data.content;
        console.log(this.reports);
      } catch (error) {
        this.reports = [];
        console.error(error);
      }
    },

    async sendFiles(id) {
      try {
        //let url = `http://localhost:3001/createReport/1/archivos`;
        let url = `http://localhost:3001/createReport/${id}/archivos`;
        let formData = new FormData();
        formData.append("imagen", this.report.rutaimagen);
        console.log(formData, "IMAGEN");
        let { data } = await axios.post(url, formData);
        console.log(data);
        if (data.ok == true) {
          console.log("Subido");
          return await formData.get("imagen");
        } else {
          this.dialogError = true;
          console.log("Error subiendo archivos");
          return "";
        }
      } catch (error) {
        this.dialogError = true;
        console.log(error);
        return "";
      }
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
          let id = localStorage.getItem("user-id");
          let report = Object.assign({}, this.report);
          report.id_usuario = id;
          console.log("HOLAAAAAAAAAAAAA   ", report.id_usuario);
          this.sendFiles(id);
          report.rutaimagen = report.rutaimagen.name;
          console.log(report);
          let response = await axios.post(
            "http://localhost:3001/createReport/",
            report
          );
          console.log("aaaaaaaaaaaaaaaaaaaa", response.data);
          this.cleanCampos();
          //let resp = response.data;
          if (response.data.ok == true) {
            Swal.fire({
              type: "success",
              text: "El reporte se creó correctamente.",
            });
          } else {
            Swal.fire({
              type: "error",
              title: "Error al crear el reporte.",
              text: response.data.message,
            });
          }
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
