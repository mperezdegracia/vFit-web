<template>
  <div class="bg-contrast pb-16">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet class="mx-auto elevation-6 rounded-lg">
            <v-container class="bg-primary rounded-t-lg" fluid>
              <h2>Contact Us</h2>
            </v-container>

            <v-container fluid align="center" justify="center">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-title>Get in Touch</v-card-title>
                  <v-card-text>
                    <v-form>
                      <v-text-field label="Name"></v-text-field>
                      <v-text-field label="Email"></v-text-field>
                      <v-textarea label="Message"></v-textarea>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn class="mx-2" variant="tonal" color="primary"
                      >Submit</v-btn
                    >
                  </v-card-actions>
                </v-col>

                <v-divider vertical class="d-none d-md-flex my-4"></v-divider>
                <v-divider class="d-md-none mx-4"></v-divider>

                <v-col cols="12" md="6">
                  <v-card-title>Contact Information</v-card-title>
                  <v-card-text>
                    <p><strong>Address:</strong> Your Momma's house</p>
                    <p><strong>Email:</strong> yourmomma@gmail.com</p>
                    <p><strong>Phone:</strong> (FAT) MOMMA</p>
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
