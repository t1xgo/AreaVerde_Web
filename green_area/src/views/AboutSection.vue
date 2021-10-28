<template>
  <section id="about">
    <v-container fluid shaped class="card">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">Nuestras promesas</h1>
              <h1 class="font-weight-light display-1 mb-3">
                The cleaner, the better.
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Utilizando nuestra plataforma se podrán evitar grandes daños
                    cuyos arreglos provocarían grandes impactos económicos
                    alrededor de todo el mundo. Evitando esto, podríamos no solo
                    mejorar nuestro planeta, sino también salvar muchos
                    bolsillos.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Mediante nuesta plataforma se mantiene una comunicación
                    constante entre todos, para permitir así el flujo rápido y
                    eficiente de la información.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Luchamos para que nuestro planeta tenga un mejor futuro, en
                    el que podamos vivir saludablemente y sin necesidad de
                    preocuparnos por los daños ambientales causados por los
                    desechos.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/planetEarth.png"
                class="d-block ml-auto mr-auto"
                max-width="320px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
