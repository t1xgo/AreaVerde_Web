<template>
  <v-container id="login">
    <navbar :color="color" :flat="flat" />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Login to your account</h2>
                    <h4 class="text-center grey--text">
                      To access your account please fill in the <br />
                      information below.
                    </h4>
                    <br />
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-form
                          ref="formLogin"
                          v-model="valid"
                          class="pa-3 pt-4"
                          lazy-validation
                          color="#ccf2f4"
                        >
                          <v-text-field
                            label="usuario"
                            v-model="usuario.usuario"
                            :rules="rules.required"
                            outlined
                            dense
                            color="green"
                            autocomplete="false"
                            class="mt-16"
                          >
                          </v-text-field>
                          <v-text-field
                            label="password"
                            v-model="usuario.password"
                            :rules="rules.required"
                            outlined
                            dense
                            color="green"
                            autocomplete="false"
                            type="password"
                          >
                          </v-text-field>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Remember me"
                                class="mt-n1"
                                color="green"
                              >
                              </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption green--text">
                                Forgot password?
                              </span>
                            </v-col>
                          </v-row>

                          <v-btn
                            color="green"
                            @click="ingreso()"
                            dark
                            block
                            tile
                          >
                            Log in
                          </v-btn>
                        </v-form>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or log in using a social media account:
                        </h5>
                        <div
                          class="
                            d-flex
                            justify-space-between
                            align-center
                            mx-10
                            mb-16
                          "
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="green rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h2 class="text-center">Don't have an account yet?</h2>
                      <h4 class="text-center">
                        Let's get you all set up so you can start helping <br />
                        the world be a better and CLEANER place!
                      </h4>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">
                        Sign up
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <!-- ----------------------------------------------------------------------------------------------------------------------------------------  -->
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class="green rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h2 class="text-center">Already have an account?</h2>
                      <h4 class="text-center">
                        Log into your account so you can make reports and view
                        more <br />
                        detailed information.
                      </h4>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">
                        Log in
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Sign up for an account.</h2>
                    <h4 class="text-center grey--text">
                      Please provide the information asked for <br />
                      below.
                    </h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="12">
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-form
                              ref="formRegistro"
                              v-model="valid"
                              class="pa-3 pt-4"
                              lazy-validation
                              color="#ccf2f4"
                            >
                              <v-text-field
                                label="ID"
                                outlined
                                v-model="usuario.cedula"
                                :rules="rules.required"
                                dense
                                color="green"
                                autocomplete="false"
                                class="mt-4"
                              >
                              </v-text-field>

                              <v-text-field
                                label="Celular"
                                outlined
                                v-model="usuario.celular"
                                dense
                                :rules="rules.required"
                                color="green"
                                autocomplete="false"
                                class="mt-4"
                              >
                              </v-text-field>

                              <v-text-field
                                label="Correo"
                                outlined
                                v-model="usuario.email"
                                dense
                                :rules="rules.required"
                                color="green"
                                autocomplete="false"
                                class="mt-4"
                                type="email"
                              >
                              </v-text-field>

                              <v-text-field
                                label="Usuario"
                                outlined
                                dense
                                v-model="usuario.usuario"
                                :rules="rules.required"
                                color="green"
                                autocomplete="false"
                                class="mt-4"
                              >
                              </v-text-field>

                              <v-text-field
                                label="Contraseña"
                                v-model="usuario.password"
                                :rules="rules.required"
                                outlined
                                dense
                                color="green"
                                autocomplete="false"
                                class="mt-4"
                                type="password"
                              >
                              </v-text-field>
                            </v-form>
                          </v-col>
                        </v-row>

                        <template>
                          <div>
                            <v-menu
                              ref="menu"
                              v-model="menu"
                              :close-on-content-click="false"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="usuario.fechaNacimiento"
                                  label="Fecha de cumpleaños"
                                  prepend-icon="mdi-calendar"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="usuario.fechaNacimiento"
                                :active-picker.sync="activePicker"
                                :max="
                                  new Date(
                                    Date.now() -
                                      new Date().getTimezoneOffset() * 60000
                                  )
                                    .toISOString()
                                    .substr(0, 10)
                                "
                                min="1950-01-01"
                                @change="save()"
                              ></v-date-picker>
                            </v-menu>
                          </div>
                        </template>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Acepto"
                              class="mt-n1"
                              color="green"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption green--text ml-n4">
                              Términos & Condiciones
                            </span>
                          </v-col>
                        </v-row>
                        <v-btn
                          color="green"
                          @click="crearUsuario()"
                          dark
                          block
                          tile
                        >
                          Registrarse
                        </v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          O realiza el registro usando:
                          <br />
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-11
                            "
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fab fa-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">fab fa-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >fab fa-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </h5>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navbar from "../components/Navigation.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data: () => ({
    activePicker: null,
    menu: false,
    step: 1,
    usuario: {
      nombre: "",
      usuario: "",
      cedula: "",
      password: "",
      correo: "",
      celular: "",
      fechaNacimiento: "",
    },
    rules: {
      required: [(v) => !!v || "El campo es obligatorio"],
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailRules: [
        (v) => !!v || "El campo es obligatorio",
        (v) => /.+@.+\..+/.test(v) || "Correo invalido",
      ],
    },
  }),
  beforeMount() {
    let token = localStorage.getItem("token");
    this.$axios.setHeader("token", token);
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    async crearUsuario() {
      if (this.$refs.formRegistro.validate()) {
        this.dialogError = false;
        try {
          console.log("Inicio guardar usuario");
          let usuario = Object.assign({}, this.usuario);
          console.log(usuario);
          let response = await this.$axios.post(
            "http://localhost:3001/login/",
            usuario
          );
          console.log(response);
          let resp = response.data;
          console.log(resp);
          if (resp.ok == true) {
            this.$router.push("user");
          } else {
            this.dialogError = true;
          }
        } catch (error) {
          this.dialogError = true;
          console.log(error);
        }
      } else {
        this.dialogError = true;
        console.log("Formato incompleto");
      }
    },
    async ingreso() {
      try {
        if (this.$refs.formLogin.validate()) {
          this.dialogError = false;
          console.log(this.usuario);
          let response = await axios.post(
            "http://localhost:3001/login",
            this.usuario
          );
          let usuario = response.data;
          console.log("ESTE ES AAAAAAAAAAAAAAAAA", usuario);
          if (usuario.ok == true) {
            let rol = usuario.content.rol;
            let token = usuario.content.token;
            localStorage.setItem("token", token);
            localStorage.setItem("user-in", rol);
            if (rol == 0) {
              this.$router.push("/admin");
            } else if (rol == 1) {
              this.$router.push("/collector");
            } else {
              this.$router.push("/user");
            }
          } else {
            this.dialogError = true;
          }
        } else {
          console.log("Formato incompleto");
        }
      } catch (error) {
        this.dialogError = true;
      }
    },
    propos: {
      source: String,
    },
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
