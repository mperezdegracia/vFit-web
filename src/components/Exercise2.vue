<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374" min-width="374" min-height="500">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>
    <vue-flip v-model="show">
      <template v-slot:front>
        <div>
          <v-img cover height="250" :src="image"></v-img>

          <v-card-item>
            <v-card-title>{{ name }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">{{ user }}</span>

              <v-icon color="error" icon="mdi-account" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :model-value="rate" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>

              <div class="text-grey ms-4">
                {{ rate }} <span>({{ reviews }})</span>
              </div>
              <v-spacer></v-spacer>
              <v-card-subtitle>
                <b>Difficulty: </b>
                <template v-for="index in 5">
                  <Icon :icon="'icon-park-solid:rectangle'" :color="difficultyColor(index)" />
                </template>
              </v-card-subtitle>

            </v-row>

          </v-card-text>

          <v-divider class="mx-4 mb-4 mt-4"></v-divider>


          <div class="px-4">
              <v-chip v-for="(tag, index) in tags" color="secondary" class="mr-1" >{{ tag }}</v-chip>
          </div>
          <v-card-actions>
            <v-btn color="primary" variant="tonal" class="btn-start" @click="edit">Edit</v-btn>
            <v-btn color="red" variant="outlined" class="btn-start" @click="remove">Delete</v-btn>
            <v-spacer></v-spacer>

            <v-icon :color="show ? 'primary' : 'grey'" @click="show = !show">mdi-information</v-icon>
          </v-card-actions>

        </div>
      </template>
      <template v-slot:back>
        <v-container class="details-container" :key="1">
          <v-row class="details-row" no-gutters>
            <v-col class="details-col" v-for="(cycle, index) in cyclesToShow" :key="index" cols="6" no-gutters>
              <v-list dense class="cycle" no-padding>
                <v-list-subheader color="secondary">{{ cycle.name }}</v-list-subheader>
                <v-divider class="mr-4"></v-divider>
                <v-list-item class="list-item" v-for="(item, i) in cycle.items" :key="i" color="primary"
                  :selectable="false">
                  <div class="d-flex align-items-center item">
                    <v-icon color="grey">mdi-dumbbell</v-icon>
                    <v-list-item-title class="ml-2 icon-info" style="line-height: 1.5"
                      v-text="item.name"></v-list-item-title>
                  </div>

                </v-list-item>
              </v-list>
            </v-col>
          </v-row>

        </v-container>
        <div v-if="exercises.length > 4" class="d-flex mr-10">
          <v-spacer></v-spacer>
          <v-tooltip location="top">
            <template v-slot:activator="{ props }">
              <v-btn icon variant="tonal" color="secondary" v-bind="props" height="35px" width="35px">
                {{ exercises.length - 4 }}+
              </v-btn>
            </template>
            <span>{{ `There ${(exercises.length - 4) === 1 ? 'is' : 'are'} ${(exercises.length - 4)} more
                          section${(exercises.length - 4) === 1 ? '' : 's'} in this workout!` }}</span>
          </v-tooltip>

        </div>

        <v-card-actions>
          <v-btn color="primary" variant="tonal" class="btn-start" @click="edit">Edit</v-btn>
          <v-btn color="red" variant="outlined" class="btn-start" @click="remove">Delete</v-btn>
          <v-spacer></v-spacer>

          <v-icon :color="show ? 'primary' : 'grey'" @click="show = !show">mdi-information</v-icon>
        </v-card-actions>
      </template>
    </vue-flip>


  </v-card>
</template>


<script>
import { VueFlip } from 'vue-flip';
import { Icon } from '@iconify/vue';


export default {
  data: () => ({
    loading: false,
    show: false,
  }),
  props: {
    name: String,
    rate: Number,
    reviews: Number,
    dif: Number,
    user: String,
    exercises: Array,
    description: String,
    image: String,
    tags: Array
  },

  components: {
    Icon,
    'vue-flip': VueFlip,

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
    cyclesToShow() {
      return this.exercises.slice(0, 4);
    },

  },
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    remove() {

    },
    edit() {

    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.v-tooltip__content {
  z-index: 9999;
  /* set the z-index to a high value */
}

.details-container {
  min-height: inherit;
  display: flex;
  flex-direction: row;
  padding-bottom: 0;
}

.icon-info {
  margin: 0px;
}

.cycle {
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.v-card {
  height: 500px;
  /* set a fixed height */
  position: relative;
}

@media (max-width: 768px) {
  .v-card {
    height: 400px;
    /* adjust the height for smaller screens */
  }
}

.v-card-actions {
  position: absolute;
  bottom: calc(-500px);
  left: 0px;
  right: 0px;
}
</style>