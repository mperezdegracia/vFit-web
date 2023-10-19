<template>
  <v-container>
    <v-card class="rounded-lg mx-auto" elevation="4">
      <v-toolbar color="primary">
        <v-toolbar-title>User Settings</v-toolbar-title>
      </v-toolbar>
      <div class="d-flex flex-row">
        <v-tabs v-model="tab" direction="vertical" color="primary">
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
          <v-window-item value="profile">
            <v-sheet fluid>
              <v-container>
                <Profile />
              </v-container>
            </v-sheet>
          </v-window-item>
          <v-window-item value="notifications">
            <v-sheet flat>
              <v-card-text>
                <v-row>
                  <v-col
                    v-for="notification in notifications"
                    :key="notification.id"
                    md="6"
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
              <v-container>
                <v-card-text>
                  <div class="mb-4">
                    <h2 class="pb-2">Privacy Policy:</h2>
                    <p>
                      Thank you for trusting us. At <b>V-Fit</b>, we value and
                      respect your privacy. This privacy policy explains how we
                      collect, use, and protect the information you share with
                      us.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h2 class="pb-2">Use of Information:</h2>
                    <p>
                      We use your information to provide you with access to our
                      services and to enhance your experience.
                    </p>
                    <p>
                      We do not share your information with third parties
                      without your consent, unless we are legally required to do
                      so.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h2 class="pb-2">Protection of Information:</h2>
                    <p>
                      We take reasonable steps to protect your personal data and
                      keep it secure.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h2 class="pb-2">Your Rights:</h2>
                    <p>
                      You have the right to access, rectify, or delete your
                      personal data at any time.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h2 class="pb-2">Cookies:</h2>
                    <p>
                      We use cookies to enhance your experience on our website.
                      You can manage your cookie preferences in your browser
                      settings.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h2 class="pb-2">Changes to the Privacy Policy:</h2>
                    <p>
                      This policy may be updated periodically. We will notify
                      you of any significant changes.
                    </p>
                  </div>
                  <div class="mb-4">
                    <h2 class="pb-2">Contact:</h2>
                    <p>
                      If you have questions or concerns about our privacy
                      policy, please don't hesitate to contact us at
                      <i>support@vfit.com </i>
                    </p>
                  </div>
                  <v-card elevation="2" class="bg-primary">
                    <v-row>
                      <v-col cols="9">
                        <v-card-text>
                          Are you willing to share your personal data to enhance
                          your experience with V-Fit? By doing so, we can
                          customize and optimize our services to cater to your
                          needs.
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
      </div>
    </v-card>
  </v-container>
</template>

<script>
import LanguageDropdown from "@/components/LanguageDropdown.vue";
import Profile from "@/components/Profile.vue";

export default {
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
  components: {
    LanguageDropdown,
    Profile,
  },
};
</script>
