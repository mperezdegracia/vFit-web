<template>
  <div class="bg-contrast d-flex flex-column">
    <v-container fluid>
      <div class="ma-8">
        <v-row align="center" justify="center">
          <v-col
            cols="4"
            align="center"
            justify="center"
            class="d-none d-sm-flex"
          >
            <v-img :width="350" src="/landing1.svg" />
          </v-col>
          <v-col md="4" sm="4" align="center" justify="center">
            <div class="mt-4">
              <h1 class="text-primary text-h2 font-weight-bold text-center">
                V-Fit <br />
                Build a better you!
              </h1>
            </div>
          </v-col>
          <v-col
            cols="4"
            align="center"
            justify="center"
            class="d-none d-sm-flex"
          >
            <v-img :width="350" src="/landing2.svg"></v-img>
          </v-col>
        </v-row>
      </div>

      <v-row class="bg-secondary ma-5 rounded-xl elevation-8 d-none d-md-flex">
        <v-col cols="4" align="center" justify="center">
          <v-img :width="300" cover src="/landing0.svg" />
        </v-col>

        <v-col class="mt-8 mb-8" cols="8" align="center" justify="center">
          <v-row align="center" justify="center">
            <h1 class="text-white">
              Train everywhere you like with the equipment you have!
            </h1>
          </v-row>

          <v-row class="-mb-4">
            <v-col cols="2">
              <v-img :width="120" cover src="/home.svg" />
            </v-col>
            <v-col cols="2">
              <v-img :width="120" cover src="/clock.svg" />
            </v-col>
            <v-col cols="2">
              <v-img :width="120" cover src="/equipment.svg" />
            </v-col>
            <v-col cols="2">
              <v-img :width="120" :height="120" cover src="/calories.svg" />
            </v-col>
            <v-col cols="2">
              <v-img :width="120" cover src="/happy.svg" />
            </v-col>
            <v-col cols="2">
              <v-img :width="120" cover src="/stonks.svg" />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="2">
              <p class="text-white text-h7">Train at home or at the gym</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Train however long you can</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">With or without equipment</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Burn calories!</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Increase your mental health</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Start building muscle!</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <br />
      <div
        class="elevation-8 rounded-xl bg-white my-3 ml-5 mr-8 d-none d-md-flex"
        fluid
      >
        <v-row align="center">
          <v-col cols="4" sm="8" md="4">
            <div class="text-center">
              <h1 class="text-primary text-h2 font-weight-bold">
                V-Fit: The only thing you need to train
              </h1>
            </div>
          </v-col>
          <v-col class="pa-0 my-3" cols="8">
            <v-img
              :height="350"
              class="rounded-e-xl"
              aspect-ratio="16/9"
              cover
              src="/gym0.jpg"
            />
          </v-col>
        </v-row>
      </div>

      <br />

      <v-row class="bg-primary ma-5 rounded-xl elevation-8">
        <v-col cols="12">
          <h1 class="text-center">Discover our features!</h1>
        </v-col>

        <v-row class="ma-2">
          <v-col cols="4" align="center" justify="center">
            <a class="text-decoration-none text-white" href="#add_routine_id">
              <v-img :width="100" cover src="/add_routine.svg" />
              <p>Create a Routine</p>
            </a>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <a
              class="text-decoration-none text-white"
              href="#search_routine_id"
            >
              <v-img :width="100" cover src="/search_routine.svg" />
              <p>Search a Routine</p>
            </a>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <a
              class="text-decoration-none text-white"
              href="#execute_routine_id"
            >
              <v-img :width="100" cover src="/execute_routine.svg" />
              <p>Execute a Routine</p>
            </a>
          </v-col>
        </v-row>
      </v-row>

      <v-row align="center" justify="center">
        <v-col align="center" justify="center" class="pa-0">
          <v-img :width="550" src="/landing3.svg"></v-img>
        </v-col>
        <v-col class="pa-0">
          <div id="add_routine_id" class="text-left mr-4">
            <h1 class="text-primary text-h2 font-weight-bold">
              Create your own routines
            </h1>
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

      <v-row align="center" justify="center">
        <v-col class="pa-0">
          <div id="search_routine_id" class="text-right ml-4">
            <h1 class="text-primary text-h2 font-weight-bold">
              Search for routines
            </h1>
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
        <v-col align="center" justify="center" class="pa-0">
          <v-img :width="550" cover src="/landing4.svg"></v-img>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col align="center" justify="center" class="pa-0">
          <v-img :width="550" cover src="/landing5.svg"></v-img>
        </v-col>
        <v-col class="pa-0">
          <div id="execute_routine_id" class="text-left mr-4">
            <h1 class="text-primary text-h2 font-weight-bold">
              Execute routines
            </h1>
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
    </v-container>
  </div>
</template>

<style scoped>
p {
  font-size: 1.22rem;
}
</style>
