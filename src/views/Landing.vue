<template>
  <div class="bg-contrast d-flex flex-column">
    <container>
      <v-row class="w-full">
        <v-col>
          <div class="mt-4">
            <h1 class="title text-center">V-Fit: Build a better you!</h1>
            <p class="ma-8">
              Welcome to the ultimate fitness journey! Whether you're a gym
              enthusiast or prefer the comfort of your home, our app is your key
              to unlocking a healthier, happier you. Get ready to sculpt the
              body you've always dreamed of, with tailored workout routines that
              suit your lifestyle. With our user-friendly platform, you'll find
              the perfect blend of motivation and guidance, making every sweat
              session count. Don't just exercise; make it a lifestyle. Join our
              community, and let's work together to build a stronger, fitter,
              and more confident you. Start today and embrace a healthier
              tomorrow!
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" justify="center">
          <v-img :width="350" src="/landing0.svg"></v-img>
        </v-col>
        <v-col align="center" justify="center">
          <v-img :width="350" src="/landing1.svg" />
        </v-col>
        <v-col align="center" justify="center">
          <v-img :width="350" src="/landing2.svg"></v-img>
        </v-col>
      </v-row>

      <v-row class="bg-primary">
        <v-col cols="1" />
        <v-col cols="2">
          <v-img :width="150" cover src="/landing4.svg"></v-img>
        </v-col>

        <v-col cols="2" align="center" justify="center">
          <v-sheet :rounded="rounded" class="" height="150" width="150">
            <p>Create a Routine</p>
          </v-sheet>
        </v-col>

        <v-col cols="2" align="center" justify="center">
          <v-sheet :rounded="rounded" class="" height="150" width="150">
            <p>Search a Routine</p>
          </v-sheet>
        </v-col>

        <v-col cols="2" align="center" justify="center">
          <v-sheet :rounded="rounded" class="" height="150" width="150">
            <p>Execute a Routine</p>
          </v-sheet>
        </v-col>

        <v-col cols="2">
          <v-img :width="150" cover src="/landing4.svg"></v-img>
        </v-col>
        <v-col cols="1" />
      </v-row>

      <v-row>
        <v-col align="center" justify="center">
          <v-img :width="600" src="/landing3.svg"></v-img>
        </v-col>
        <v-col>
          <div class="text-left padTop mr-4">
            <h1 class="title">Create your own routines</h1>
            <p>
              Our innovative workout routine creator is your personal fitness
              architect. With this feature, you can easily design a customized
              exercise plan tailored to your goals, whether it's building
              muscle, shedding pounds, or improving endurance. Choose from a
              vast array of exercises, set desired reps, select preferred
              durations, and even incorporate specific muscle groups. It
              generates a structured routine that adapts to your fitness level,
              keeping you motivated and on track. Say goodbye to
              one-size-fits-all workouts and hello to a personalized fitness
              journey that will have you achieving your goals faster than ever.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="text-right padTop ml-4">
            <h1 class="title">Search for routines</h1>
            <p>
              Get inspired and find the perfect workout routine that aligns with
              your goals and preferences. You can search and explore a vast
              library of routines created by our fitness community. Filter by
              workout type, duration, fitness level, and equipment availability
              to discover routines tailored just for you. Whether you're into
              strength training, cardio, or flexibility, you'll uncover a world
              of fitness possibilities at your fingertips. Elevate your fitness
              journey by learning from others and discovering fresh, motivating
              routines. It's all about finding the right fit for your goals, and
              our search feature makes it look effortless. Find your next
              workout adventure today!
            </p>
          </div>
        </v-col>
        <v-col align="center">
          <v-img :width="600" cover src="/landing4.svg"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-img :width="600" cover src="/landing5.svg"></v-img>
        </v-col>
        <v-col>
          <div class="text-left padTop mr-4">
            <h1 class="title">Execute routines</h1>
            <p>
              Turn your fitness plans into reality with a single click. With our
              workout execution feature, you can seamlessly execute the workout
              routines you or others have created. Follow step-by-step
              instructions, view exercise demonstrations, and track your
              progress in real-time, all from the palm of your hand. Whether
              you're at the gym or working out at home, this feature ensures you
              stay on track, maintain proper form, and achieve your fitness
              goals. It's like having a personal trainer right in your pocket,
              making every rep and every set count!
            </p>
          </div>
        </v-col>
      </v-row>
    </container>
  </div>
</template>

<style scoped>
.rounded-card {
  border-radius: 24px;
}
.title {
  font-size: 50px;
  color: blueviolet;
}

.padTop {
  padding-top: 20%;
}

p {
  font-size: 20px;
}
</style>

<script setup></script>
