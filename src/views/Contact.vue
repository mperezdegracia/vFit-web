<template>
  <div class="bg-contrast pb-16">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet class="mx-auto elevation-6 rounded-lg">
            <v-container class="bg-primary rounded-t-lg" fluid>
              <h2>Contáctanos</h2>
            </v-container>

            <v-container fluid align="center" justify="center">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-title>Ponte en contacto</v-card-title>
                  <v-card-text>
                    <v-form>
                      <v-text-field label="Nombre"></v-text-field>
                      <v-text-field label="Correo electrónico"></v-text-field>
                      <v-textarea label="Mensaje"></v-textarea>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn class="mx-2" variant="tonal" color="primary"
                      >Enviar</v-btn
                    >
                  </v-card-actions>
                </v-col>

                <v-divider vertical class="d-none d-md-flex my-4"></v-divider>
                <v-divider class="d-md-none mx-4"></v-divider>

                <v-col cols="12" md="6">
                  <v-card-title> Información de contacto</v-card-title>
                  <v-card-text>
                    <p><strong>Dirección:</strong> 221B Baker Street</p>
                    <p><strong>Correo electrónico:</strong> support@vfit.com</p>
                    <p><strong>Teléfono:</strong> (01) 2345-6789</p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
