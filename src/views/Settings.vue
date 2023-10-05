<template>
  <v-card class="h-100">
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
        <v-tab value="language">
          <v-icon start>mdi-flag-variant</v-icon>
          Language
        </v-tab>
      </v-tabs>
      <v-divider vertical></v-divider>
      <v-window v-model="tab">
        <v-window-item value="profile">
          <v-card flat>
            <v-card-text>
              <v-row>
                <v-col cols="6" class="ml-3">
                  <ul>
                    <li>Username</li>
                    <li>Email</li>
                    <li>Change Password</li>
                    <li>Friends</li>
                    <li>Verify Account</li>
                    <li>Notifications</li>
                  </ul>
                </v-col>
                <v-col cols="6" class="ml-3">
                  <ul>
                    <li>Eddie Hall</li>
                    <li>Email</li>
                    <li>Change Password</li>
                    <li>Friends</li>
                    <li>Verify Account</li>
                    <li>Notifications</li>
                  </ul>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="privacy">
          <v-card flat>
            <v-card-text>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
              </p>

              <p class="">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="language">
          <v-card flat>
            <v-card-text>
              <v-row>
                <p class="ma-4">Language: </p>
                <LanguageDropdown/>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>

<style scoped>
</style>

<script>
  import LanguageDropdown from '@/components/LanguageDropdown.vue';
  export default {
    components: {
    LanguageDropdown,
  },
    data: () => ({
      tab: 'option-1',
    }),
  }
</script>