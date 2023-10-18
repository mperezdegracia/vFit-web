<template>
  <div class="bg-contrast flex-column h-100 pt-4 pb-16">
    <v-container fluid>
      <v-card class="rounded-lg mx-auto" elevation="4">
        <v-toolbar color="primary">
          <v-toolbar-title>User Settings</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
          <v-tabs v-model="tab" direction="vertical" color="primary">
            <v-tab value="general">
              <v-icon start>mdi-cog</v-icon>
              General
            </v-tab>

            <v-tab value="profile">
              <v-icon start>mdi-account</v-icon>
              User Profile
            </v-tab>

            <v-tab value="notifications">
              <v-icon start>mdi-bell</v-icon>
              Notifications
            </v-tab>

            <v-tab value="privacy">
              <v-icon start>mdi-lock</v-icon>
              Privacy
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="general">
              <v-sheet flat>
                <v-card-text>
                  <p>
                    Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                    Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                  </p>

                  <p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                    lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                    non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse
                    non nisl sit amet velit hendrerit rutrum.
                  </p>

                  <p>
                    Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                    Pellentesque libero tortor, tincidunt et, tincidunt eget,
                    semper nec, quam. Phasellus blandit leo ut odio.
                  </p>
                  <LanguageDropdown class="my-4" />
                </v-card-text>
              </v-sheet>
            </v-window-item>
            <v-window-item value="profile">
              <v-sheet flat>
                <v-card-text>
                  <p>
                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                    egestas, lacus ante convallis tellus, vitae iaculis lacus
                    elit id tortor. Sed mollis, eros et ultrices tempus, mauris
                    ipsum aliquam libero, non adipiscing dolor urna a orci.
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Nunc sed turpis.
                  </p>

                  <p>
                    Suspendisse feugiat. Suspendisse faucibus, nunc et
                    pellentesque egestas, lacus ante convallis tellus, vitae
                    iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                    ultrices semper, ligula arcu tristique sapien, a accumsan
                    nisi mauris ac eros. In hac habitasse platea dictumst. Fusce
                    ac felis sit amet ligula pharetra condimentum.
                  </p>

                  <p>
                    Sed consequat, leo eget bibendum sodales, augue velit cursus
                    nunc, quis gravida magna mi a libero. Nam commodo suscipit
                    quam. In consectetuer turpis ut velit. Sed cursus turpis
                    vitae tortor. Aliquam eu nunc.
                  </p>

                  <p class="mb-0">
                    Donec venenatis vulputate lorem. Aenean viverra rhoncus
                    pede. In dui magna, posuere eget, vestibulum et, tempor
                    auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim
                    turpis, dictum sed, iaculis a, condimentum nec, nisi.
                  </p>
                </v-card-text>
              </v-sheet>
            </v-window-item>
            <v-window-item value="notifications">
              <v-sheet fluid>
                <v-card-text>
                  <v-row>
                    <v-col
                      v-for="notification in notifications"
                      :key="notification.id"
                      md="4"
                      sm="12"
                      xs="12"
                    >
                      <v-card elevation="2">
                        <v-row>
                          <v-col cols="9">
                            <v-card-title>
                              {{ notification.title }}
                            </v-card-title>
                            <v-card-text>
                              {{ notification.description }}
                            </v-card-text>
                          </v-col>
                          <v-col cols="3">
                            <v-card-actions>
                              <v-switch
                                color="primary"
                                v-model="notification.enabled"
                              ></v-switch>
                            </v-card-actions>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-sheet>
            </v-window-item>
            <v-window-item value="privacy">
              <v-sheet flat>
                <v-card-text>
                  <p>
                    Fusce a quam. Phasellus nec sem in justo pellentesque
                    facilisis. Nam eget dui. Proin viverra, ligula sit amet
                    ultrices semper, ligula arcu tristique sapien, a accumsan
                    nisi mauris ac eros. In dui magna, posuere eget, vestibulum
                    et, tempor auctor, justo.
                  </p>

                  <p class="mb-0">
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-sheet>
            </v-window-item>
          </v-window>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import LanguageDropdown from "@/components/LanguageDropdown.vue";
export default {
  components: {
    LanguageDropdown,
  },
  data: () => ({
    tab: "option-1",
    notifications: [
      {
        id: 1,
        title: "Email Notifications",
        description: "Receive email notifications.",
        enabled: false,
      },
      {
        id: 2,
        title: "Push Notifications",
        description: "Receive push notifications.",
        enabled: false,
      },
      {
        id: 3,
        title: "SMS Notifications",
        description: "Receive SMS notifications.",
        enabled: false,
      },
      {
        id: 4,
        title: "Motivation Notifications",
        description: "Receive notifications so you don't miss a workout.",
        enabled: false,
      },
    ],
  }),
};
</script>
