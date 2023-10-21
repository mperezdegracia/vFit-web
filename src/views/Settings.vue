<template>
  <v-sheet class="bg-contrast mx-auto" max-width="1000">
    <v-btn
      @click="$router.go(-1)"
      variant="text"
      color="primary"
      prepend-icon="mdi-arrow-left"
      class="mb-4"
      >Volver a la página previa</v-btn
    >

    <v-card class="rounded-lg mx-auto settings-card" elevation="4">
      <v-toolbar color="primary">
        <v-toolbar-title>Ajustes de usuario</v-toolbar-title>
      </v-toolbar>
      <v-row no-gutters>
        <v-col cols="3">
          <v-tabs v-model="tab" direction="vertical" color="primary">
            <v-tab value="profile">
              <v-icon start>mdi-account</v-icon>
              Perfil
            </v-tab>

            <v-tab value="notifications">
              <v-icon start>mdi-bell</v-icon>
              Notificaciones
            </v-tab>

            <v-tab value="privacy">
              <v-icon start>mdi-lock</v-icon>
              Privacidad
            </v-tab>
          </v-tabs>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-window v-model="tab" class="windows">
            <v-window-item value="profile">
              <v-row>
                <v-container class="w-100 ma-5">
                  <Profile />
                </v-container>
              </v-row>
            </v-window-item>
            <v-window-item value="notifications">
              <v-sheet flat>
                <v-card-text>
                  <div
                    v-for="(notification, index) in notifications"
                    :key="notification.id"
                  >
                    <v-divider v-if="index != 0"></v-divider>
                    <v-row class="pt-3">
                      <v-col cols="9">
                        <v-card-title>
                          {{ notification.title }}
                        </v-card-title>
                        <v-card-text>
                          {{ notification.description }}
                        </v-card-text>
                      </v-col>
                      <v-col cols="3" justify="end">
                        <v-card-actions>
                          <v-switch
                            color="primary"
                            v-model="notification.enabled"
                          ></v-switch>
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </div>
                </v-card-text>
              </v-sheet>
            </v-window-item>
            <v-window-item value="privacy">
              <v-sheet flat>
                <v-container>
                  <v-card-text>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Política de privacidad:</h2>
                      <p>
                        Gracias por confiar en nosotros. En <b>V-Fit</b>,
                        valoramos y respetamos su privacidad. Esta política de
                        privacidad explica cómo recopilamos, utilizamos y
                        protegemos la información que usted comparte con
                        nosotros.
                      </p>
                    </div>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Uso de la información:</h2>
                      <p>
                        Usamos su información para brindarle acceso a nuestros
                        servicios y mejorar su experiencia.
                      </p>
                      <p>
                        No compartimos su información con terceros sin su
                        consentimiento, a menos que estemos legalmente obligados
                        a hacerlo.
                      </p>
                    </div>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Protección de la Información:</h2>
                      <p>
                        Tomamos medidas razonables para proteger sus datos
                        personales y mantenerlos seguros.
                      </p>
                    </div>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Tus derechos:</h2>
                      <p>
                        Tienes derecho a acceder, rectificar o suprimir tu datos
                        personales en cualquier momento.
                      </p>
                    </div>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Cookies:</h2>
                      <p>
                        Utilizamos cookies para mejorar su experiencia en
                        nuestro sitio web. Puedes gestionar tus preferencias de
                        cookies en tus ajustes de navegador.
                      </p>
                    </div>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Cambios a la Política de Privacidad:</h2>
                      <p>
                        Esta política puede actualizarse periódicamente. Le
                        informaremos de cualquier cambio significativo.
                      </p>
                    </div>
                    <div class="pb-3 mb-4 border-row">
                      <h2 class="pb-2">Contacto:</h2>
                      <p>
                        Si tiene preguntas o inquietudes sobre nuestra
                        privacidad política, no dude en contactarnos en
                        <i>support@vfit.com </i>
                      </p>
                    </div>
                    <v-card elevation="2" class="bg-primary">
                      <v-row>
                        <v-col cols="9">
                          <v-card-text>
                            ¿Está dispuesto a compartir sus datos personales
                            para mejorar tu experiencia con V-Fit? Al hacerlo,
                            podemos personalizar y optimizar nuestros servicios
                            para satisfacer sus necesidades.
                          </v-card-text>
                        </v-col>
                        <v-col cols="3">
                          <v-switch></v-switch>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-card-text>
                </v-container>
              </v-sheet>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-card>
  </v-sheet>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
  data: () => ({
    tab: "option-1",
    notifications: [
      {
        id: 1,
        title: "Notificaciónes de correo electrónico",
        description: "Reciba notificaciones por correo electrónico.",
        enabled: false,
      },
      {
        id: 2,
        title: "Notificaciones automáticas",
        description: "Recibir notificaciones automáticas.",
        enabled: false,
      },
      {
        id: 3,
        title: "Notificaciones por SMS",
        description: "Reciba notificaciones por SMS.",
        enabled: false,
      },
      {
        id: 4,
        title: "Notificaciones de motivación",
        description:
          "Recibe notificaciones para no perderte ningún entrenamiento.",
        enabled: false,
      },
    ],
  }),
  components: {
    Profile,
  },
};
</script>
