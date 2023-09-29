<template>
    <v-card
    class="mx-auto"
    max-width="344"
    >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-subtitle>
      <b>Difficulty: </b>
      <Icon :icon="dif < 1 ? 'icon-park-solid:rectangle' : 'icon-park-solid:rectangle'" :color="dif < 1 ? 'dimgrey' : '#0404ac'"/>
      <Icon :icon="dif < 2 ? 'icon-park-solid:rectangle' : 'icon-park-solid:rectangle'" :color="dif < 2 ? 'dimgrey' : '#2ff18d'"/>
      <Icon :icon="dif < 3 ? 'icon-park-solid:rectangle' : 'icon-park-solid:rectangle'" :color="dif < 3 ? 'dimgrey' : '#fcbd00'"/>
      <Icon :icon="dif < 4 ? 'icon-park-solid:rectangle' : 'icon-park-solid:rectangle'" :color="dif < 4 ? 'dimgrey' : '#f64c1a'"/>
      <Icon :icon="dif < 5 ? 'icon-park-solid:rectangle' : 'icon-park-solid:rectangle'" :color="dif < 5 ? 'dimgrey' : 'red'"/>

    </v-card-subtitle>

    <v-card-subtitle>
      <br/>
      <b>By: </b>{{ user }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        START
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
          v-for="ex in exercises"
          color="black"
        >
         - {{ ex }} 
        </v-card-text>
        
        <v-card-subtitle>
          Rate: 
        </v-card-subtitle>

        <v-card-subtitle>
          <v-icon color="yellow" v-for="index in 5" :key="index">
            <template v-if="rate >= index">
              mdi-star
            </template>
            <template v-else>
              mdi-star-outline
            </template>
          </v-icon>
        </v-card-subtitle>

      </div>
    </v-expand-transition>
  </v-card>
  </template>


<script>
//import Exercise from '@/components/Exercise.vue';
import { Icon } from '@iconify/vue';
export default{
  data() {
    return {
      name: 'Routine 1',
      user:'User 1',
      rate: 4,
      dif:3,
      exercises: [
        'Abs',
        'Legs',
        'Push up',
        'Abs',
        'Legs',
      ],
      show:false,
    };
  },
  components: {
    Icon,
  },
}
</script>