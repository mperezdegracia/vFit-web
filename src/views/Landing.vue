<template>
  <div class="bg-contrast d-flex flex-column">
    <container>
      <div fluid class="ma-8">
        <v-row align="center" justify="center">
          <v-col cols="4" align="center" justify="center">
            <v-img :width="350" src="/landing1.svg" />
          </v-col>
          <v-col cols="4" align="center" justify="center">
            <div class="mt-4">
              <h1 class="title text-center">
                V-Fit <br />
                Build a better you!
              </h1>

              <!--
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
            --></div>
          </v-col>
          <v-col cols="4" align="center" justify="center">
            <v-img :width="350" src="/landing2.svg"></v-img>
          </v-col>
        </v-row>
      </div>

      <v-row class="functionalities rounded_card elevation-8">
        <v-col cols="4" align="center" justify="center">
          <v-img :width="300" cover src="/landing0.svg" />
        </v-col>

        <v-col class="mt-8 mb-8" cols="8" align="center" justify="center">
          <v-row align="center" justify="center">
            <h1 class="fun_title">
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
              <p class="fun_p">Train at home or at the gym</p>
            </v-col>
            <v-col cols="2">
              <p class="fun_p">Train however long you can</p>
            </v-col>
            <v-col cols="2">
              <p class="fun_p">Whether you own equipment or not</p>
            </v-col>
            <v-col cols="2">
              <p class="fun_p">Burn calories!</p>
            </v-col>
            <v-col cols="2">
              <p class="fun_p">Increase your mental health</p>
            </v-col>
            <v-col cols="2">
              <p class="fun_p">Start building muscle!</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <br />

      <div class="card fill-width fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="8" md="4">
            <div class="text-center">
              <h1 class="title">V-Fit: The only thing you need to train</h1>
            </div>
          </v-col>
          <v-col class="pa-0" cols="8">
            <v-img
              :width="1000"
              :height="350"
              class="rounded-e-lg"
              aspect-ratio="16/9"
              cover
              src="/gym0.jpg"
            />
          </v-col>
        </v-row>
      </div>

      <br />

      <v-row class="bg-primary rounded_card elevation-8">
        <v-col cols="12">
          <h1 class="text-center">Discover our features!</h1>
        </v-col>

        <v-row class="ma-2">
          <v-col cols="4" align="center" justify="center">
            <a href="#add_routine_id">
              <v-img :width="100" cover src="/add_routine.svg" />
              <p>Create a Routine</p>
            </a>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <a href="#search_routine_id">
              <v-img :width="100" cover src="/search_routine.svg" />
              <p>Search a Routine</p>
            </a>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <a href="#execute_routine_id">
              <v-img :width="100" cover src="/execute_routine.svg" />
              <p>Execute a Routine</p>
            </a>
          </v-col>
        </v-row>
      </v-row>

      <v-row>
        <v-col align="center" justify="center" class="pa-0">
          <v-img :width="550" src="/landing3.svg"></v-img>
        </v-col>
        <v-col class="pa-0">
          <div id="add_routine_id" class="text-left padTop mr-4">
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
        <v-col class="pa-0">
          <div id="search_routine_id" class="text-right padTop ml-4">
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
        <v-col align="center" class="pa-0">
          <v-img :width="550" cover src="/landing4.svg"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center" class="pa-0">
          <v-img :width="550" cover src="/landing5.svg"></v-img>
        </v-col>
        <v-col class="pa-0">
          <div id="execute_routine_id" class="text-left padTop mr-4">
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
a {
  text-decoration: none;
  color: white;
}

.fun_p {
  color: white;
  font-size: 20px;
}

.card {
  margin: 20px;
  background-color: white;
  border-radius: 8px;
}

.rounded_card {
  margin: 20px;
  border-radius: 24px;
}

.functionalities {
  background-color: #3b3ae0;
}
.fun_title {
  font-size: 30px;
  color: white;
}
.title {
  font-size: 50px;
  color: blueviolet;
}

.padTop {
  padding-top: 15%;
}

p {
  font-size: 20px;
}
</style>

<script setup></script>
