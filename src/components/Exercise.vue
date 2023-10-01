<template>
  <v-card class="mx-auto" max-width="500">
    <v-img src="src/assets/routine.png" height="200px" cover class="bg-white"></v-img>

    <v-card-title>{{ name }}</v-card-title>
    <div v-if="!show">

      <v-card-subtitle>
        <b>Difficulty: </b>
        <Icon :icon="'icon-park-solid:rectangle'" :color="difficultyColor(1)" />
        <Icon :icon="'icon-park-solid:rectangle'" :color="difficultyColor(2)" />
        <Icon :icon="'icon-park-solid:rectangle'" :color="difficultyColor(3)" />
        <Icon :icon="'icon-park-solid:rectangle'" :color="difficultyColor(4)" />
        <Icon :icon="'icon-park-solid:rectangle'" :color="difficultyColor(5)" />
      </v-card-subtitle>

      <v-card-subtitle>
        <b>Rate:</b>
        <v-icon color="yellow" v-for="index in 5" :key="index"
          :class="{ 'mdi-star': rate >= index, 'mdi-star-outline': rate < index }"></v-icon>
      </v-card-subtitle>

      <v-card-subtitle>
        <b>By: </b>{{ user }}
      </v-card-subtitle>


    </div>
   <v-expand-transition>
    <div v-if="show" class="details">
    <div class="exercises">
      <div class="columns">
        <div v-for="(cycle, index) in exercises" :key="index" class="column">
          <p class="subtitle-1">{{ cycle.name }}</p>
          <div v-for="(item, index) in cycle.items" :key="index" class="item">
            <p class="subtitle-2">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</v-expand-transition>
    <v-card-actions>
      <v-btn color="secondary" variant="tonal" class="btn-start">Edit</v-btn>
      <v-btn color="red" variant="outlined" class="btn-start">Remove</v-btn>

      <v-spacer></v-spacer>

      <v-icon :color="show ? 'primary' : 'grey'" @click="show = !show">mdi-information</v-icon>
    </v-card-actions>



  </v-card>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  data() {
    return {
      show: false,
    };
  },

  props: {
    name: String,
    rate: Number,
    dif: Number,
    user: String,
    exercises: Array,
    description: String,
  },

  components: {
    Icon,
  },

  computed: {
    difficultyColor() {
      return (index) => {
        if (this.dif >= index) {
          switch (this.dif) {
            case 1:
            case 2:
              return '#2ff18d'; // green
            case 3:
              return '#fcbd00'; // yellow
            default:
              return 'red';
          }
        } else {
          return 'dimgrey';
        }
      };
    },
  },
};
</script>

<style>
.details-enter-active,
.details-leave-active {
  transition: all 0.8s ease;
}

.details-enter,
.details-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.exercises {
  display: flex;
  justify-content: center;
}

.cycle {
  width: 100%;
}
.columns {
  display: flex;
  
}

.column {
  width: calc(100/4% - 10px);
  margin-left: 10px;
  margin-right: 5px;

}
.subtitle-1{
  margin-bottom: 5px;
}
.item {
  width: 100%;
  margin-bottom: 2px;;
 
}

.details {
  opacity: 1;
  transform: translateY(0);
}
</style>