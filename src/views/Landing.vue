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
                ¡Construye un mejor tú!
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
              ¡Entrena donde quieras con el equipo que tienes!
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
              <p class="text-white text-h7">Entrena en casa o en el gimnasio</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Entrena todo lo que puedas</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Con o sin equipo</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">¡Quemar calorías!</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">Aumenta tu salud mental</p>
            </v-col>
            <v-col cols="2">
              <p class="text-white text-h7">¡Empiece a desarrollar músculos!</p>
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
                V-Fit: Lo único que necesitas para entrenar
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
          <h1 class="text-center">¡Descubre nuestras funcionalidades!</h1>
        </v-col>

        <v-row class="ma-2">
          <v-col cols="4" align="center" justify="center">
            <a class="text-decoration-none text-white" href="#add_routine_id">
              <v-img :width="100" cover src="/add_routine.svg" />
              <p>Crear una rutina</p>
            </a>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <a
              class="text-decoration-none text-white"
              href="#search_routine_id"
            >
              <v-img :width="100" cover src="/search_routine.svg" />
              <p>Buscar una rutina</p>
            </a>
          </v-col>

          <v-col cols="4" align="center" justify="center">
            <a
              class="text-decoration-none text-white"
              href="#execute_routine_id"
            >
              <v-img :width="100" cover src="/execute_routine.svg" />
              <p>Ejecutar una rutina</p>
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
              Crea tus propias rutinas
            </h1>
            <p>
              Nuestro innovador creador de rutinas es tu arquitecto físico
              personal. Con esta función, puedes diseñar fácilmente un diseño
              personalizado y un plan de ejercicios adaptado a sus objetivos, ya
              sea desarrollar músculos, perder peso o mejorar la resistencia.
              Elige entre un amplia gama de ejercicios la cual tu puedes crear,
              establece las repeticiones deseadas, selecciona las duraciones, e
              incluso incorpora grupos musculares específicos. Genera una rutina
              estructurada que se adapta a tu nivel de condición física,
              manteniéndote motivado y encaminado. Di adiós a entrenamientos
              únicos para todos y hola a un fitness personalizado que le
              permitirá alcanzar sus objetivos más rápido que nunca.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="pa-0">
          <div id="search_routine_id" class="text-right ml-4">
            <h1 class="text-primary text-h2 font-weight-bold">Busca rutinas</h1>
            <p>
              Inspírate y encuentra la rutina de ejercicios perfecta que se
              alinee con tus objetivos y preferencias. Puedes buscar y explorar
              una vasta biblioteca de rutinas creadas por nuestra comunidad de
              fitness. Filtrado por tipo de entrenamiento, duración, nivel de
              condición física o disponibilidad de equipo para descubrir rutinas
              diseñadas exclusivamente para usted. Si te gusta entrenamiento de
              fuerza, cardio o flexibilidad, descubrirás un mundo de
              posibilidades de fitness a tu alcance. Eleva tu condición física
              aprendiendo de los demás y descubriendo nuevas y motivadoras
              rutinas. Se trata de encontrar la opción adecuada para sus
              objetivos y nuestra función de búsqueda hace que parezca sencillo.
              ¡Encuentra tu próxima aventura de entrenamiento hoy!
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
              Ejecuta rutinas
            </h1>
            <p>
              Haz realidad tus planes de fitness con un solo clic. Con nuestra
              función de ejecución de entrenamiento, puede ejecutar el
              entrenamiento sin problemas, que usted u otros han creado. Sigue
              paso a paso instrucciones, ver demostraciones de ejercicios y
              realice un seguimiento de su progreso en tiempo real, todo desde
              la palma de tu mano. Si estás en el gimnasio o haciendo ejercicio
              en casa, esta funcionalidad te garantiza que te mantengas
              encaminado, mantengas la forma adecuada y logre su objetivos
              físico. Es como tener un entrenador personal en tu bolsillo,
              ¡haciendo que cada repetición y cada serie cuenten!
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
