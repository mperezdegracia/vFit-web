<template>
  <div class="bg-contrast d-flex flex-column">
    <container>
      <v-row class="ma-4 pa-4">
        <v-col>
          <div class="textRight">
            <h1 class="textColor">V-Fit</h1>
            <p>Create your own workout routines and explore</p>
            <p>routines from people all around the globe</p>
          </div>
        </v-col>
        <v-col>
          <v-img :width="600" cover src="/landing1.svg"></v-img>
          <!--<img class="" src="/landing1.svg" />-->
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img :width="600" cover src="/landing2.svg"></v-img>
        </v-col>
        <v-col>
          <div class="textLeft">
            <h1 class="textColor">Feature 1</h1>
            <p class="mr-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              harum soluta blanditiis nobis praesentium labore voluptatum
              quisquam quidem reprehenderit dolore debitis, animi rerum beatae.
              Quas officiis explicabo quaerat consequuntur. Sequi.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="textRight">
            <h1 class="textColor">Feature 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              harum soluta blanditiis nobis praesentium labore voluptatum
              quisquam quidem reprehenderit dolore debitis, animi rerum beatae.
              Quas officiis explicabo quaerat consequuntur. Sequi.
            </p>
          </div>
        </v-col>
        <v-col>
          <v-img :width="600" cover src="/landing3.svg"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img class="" src="/landing4.svg" />
        </v-col>
        <v-col>
          <div class="textLeft">
            <h1 class="textColor">Feature 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              harum soluta blanditiis nobis praesentium labore voluptatum
              quisquam quidem reprehenderit dolore debitis, animi rerum beatae.
              Quas officiis explicabo quaerat consequuntur. Sequi.
            </p>
          </div>
        </v-col>
      </v-row>
    </container>
  </div>
</template>

<style scoped>
.textRight {
  text-align: right;
  padding-top: 40%;
}
.textLeft {
  text-align: left;
  padding-top: 40%;
}
.textColor {
  color: blueviolet;
}
</style>

<script setup></script>
