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
                    <h2 class="text-center">
                      Login to your account
                    </h2>
                    <h4 class="text-center grey--text">
                      To access your account please fill in the <br />
                      information below.
                    </h4>
                    <br />
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          class="mt-16"
                        >
                        </v-text-field>
                        <v-text-field
                          label="password"
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
                        <v-btn color="green" dark block tile>
                          Log in
                        </v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or log in using a social media account:
                        </h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-16"
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
                  <div style="text-align:center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h2 class="text-center">
                        Don't have an account yet?
                      </h2>
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
                  <div style="text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h2 class="text-center">
                        Already have an account?
                      </h2>
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
                    <h2 class="text-center">
                      Sign up for an account.
                    </h2>
                    <h4 class="text-center grey--text">
                      Please provide the information asked for <br />
                      below.
                    </h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="First name"
                              outlined
                              dense
                              color="green"
                              autocomplete="false"
                              class="mt-4"
                            >
                            </v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Last name"
                              outlined
                              dense
                              color="green"
                              autocomplete="false"
                              class="mt-4"
                            >
                            </v-text-field>
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          class="mt-4"
                          type="email"
                        >
                        </v-text-field>
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="green"
                          autocomplete="false"
                          class="mt-4"
                          type="password"
                        >
                        </v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="I accept all"
                              class="mt-n1"
                              color="green"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption green--text ml-n4">
                              Terms & Conditions
                            </span>
                          </v-col>
                        </v-row>
                        <v-btn color="green" dark block tile>
                          Sign up
                        </v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">
                          Or sign up using:
                          <div
                            class="d-flex justify-space-between align-center mx-10 mb-11"
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
export default {
  components: {
    Navbar,
  },
  data: () => ({
    step: 1,
  }),
  propos: {
    source: String,
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
