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

        <v-row>
          <v-col sm="12" cols="12">
            <v-card class="elevation-6 mt-5 mb-10">
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">
                      Agregar un reporte
                    </h2>
                    <h4 class="text-center grey--text">
                      Por favor ingresa la información necesaria para poder
                      hacer un reporte
                    </h4>

                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Descripción (opcional)"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          class="mt-16"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Ubicación"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                        >
                        </v-text-field>

                        <v-text-field
                          label="Categoría"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                        >
                        </v-text-field>

                        <v-btn dark block tile>
                          Adjuntar Evidencia
                        </v-btn>
                        <br />
                        <v-btn color="green" dark block tile>
                          Reportar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <div class="feedRow" v-for="report in reports" :key="report">
          <v-row>
            <v-col sm="12" cols="12">
              <v-card
                class="mx-12 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl mt-n15 cardcont codneg text-center"
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
                    <v-img
                      :src="report.evidence"
                      width="90%"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                    ></v-img>
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
                      {{ report.description }}
                      <br />
                      <br />
                      <strong> Ubicación: </strong>
                      {{ report.ubication }}
                      <br />
                      <br />
                      <strong> Estado: </strong>
                      {{ report.state }}
                      <br />
                      <br />
                      <strong> Tipo: </strong>
                      {{ report.colorCode }}
                    </h4>
                  </v-col>
                  <br />
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
        
      </v-col>
      <v-col cols="12" lg="5">
        <v-card>
          <v-card-title>Historial en vivo</v-card-title>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item color="black" small>
                <strong>Hace 5 minutos</strong>
                <div class="text-caption">
                  Confirmado una recolección
                </div>
              </v-timeline-item>
              <v-timeline-item color="green" small>
                <strong>Hace 35 minutos</strong>
                <div class="text-caption mb-2">Confirmado una recolección</div>
              </v-timeline-item>

              <v-timeline-item color="white" small>
                <strong>Hace 44 minutos</strong>
                <div class="text-caption">
                  Confirmado una recolección
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  name: "Dashboard",
  data() {
    return {
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
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
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
