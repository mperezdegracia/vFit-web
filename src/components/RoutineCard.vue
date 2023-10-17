<template>
  <div class="routine-card">
    <!-- <div class="d-flex"> -->
    <!--   <v-spacer></v-spacer> -->
    <!--   <v-btn -->
    <!--     class="like-icon" -->
    <!--     variant="text" -->
    <!--     :color="isLiked ? 'red-lighten-3' : 'grey'" -->
    <!--     :icon="isLiked ? 'mdi-heart' : 'mdi-heart-outline'" -->
    <!--     @click="toggleLike" -->
    <!--   ></v-btn> -->
    <!-- </div> -->

    <v-card :loading="loading" class="bg-grey-lighten-4">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <VueFlip v-model="show">
        <template v-slot:front>
          <div>
            <v-img cover height="160" :src="routine.image">
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular
                    color="grey-lighten-4"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </template>
            </v-img>

            <v-card-item>
              <v-card-title>{{ routine.name }}</v-card-title>
              <v-card-subtitle class="mt-1">
                <v-icon color="error" icon="mdi-account" size="small"></v-icon>
                <span class="ms-1">{{ routine.user.username }}</span>
              </v-card-subtitle>
            </v-card-item>

            <v-card-text class="pr-0 mt-0">
              <v-row align="center" class="mx-0">
                <v-rating
                  :model-value="routine.rate"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                  size="small"
                ></v-rating>

                <div class="text-grey ml-1">
                  {{ routine.rate }} <span>({{ routine.reviews }})</span>
                </div>
                <v-card-subtitle class="px-2">
                  <b>Difficulty: </b>
                  <template v-for="index in 5">
                    <Icon
                      :icon="'icon-park-solid:rectangle'"
                      :color="difficultyColor(index)"
                    />
                  </template>
                </v-card-subtitle>
              </v-row>
            </v-card-text>

            <v-divider class="mx-4 mb-2 mt-1"></v-divider>

            <div class="px-4 mt-3">
              <v-chip
                v-for="(tag, index) in routine.tags"
                :key="index"
                color="primary"
                class="mr-1"
                >{{ tag }}</v-chip
              >
            </div>
            <v-card-actions class="ml-2 mt-0">
              <v-btn
                variant="tonal"
                class="text-body-2 me-2"
                color="primary"
                prepend-icon="mdi-open-in-new"
              >
                DETAILS
              </v-btn>
              <v-spacer></v-spacer>
              <v-icon :color="show ? 'primary' : 'grey'" @click="show = !show"
                >mdi-information</v-icon
              >
            </v-card-actions>
          </div>
        </template>
        <template v-slot:back>
          <v-container class="details-container pt-0 px-1" :key="1">
            <v-row class="details-row" no-gutters>
              <v-col
                class="details-col"
                v-for="(cycle, index) in cyclesToShow"
                :key="index"
                cols="6"
                no-gutters
              >
                <v-list
                  dense
                  class="cycle mx-auto pt-0 pb-0 pr-0 bg-grey-lighten-4"
                  no-padding
                >
                  <v-list-subheader color="primary">{{
                    cycle.name
                  }}</v-list-subheader>
                  <v-divider class="mr-4"></v-divider>
                  <v-list-item
                    min-height="20"
                    class="list-item px-0"
                    v-for="(item, i) in cycle.items"
                    :key="i"
                    color="primary"
                    :selectable="false"
                  >
                    <div class="d-flex align-items-center item">
                      <v-icon color="grey">mdi-dumbbell</v-icon>
                      <v-list-item-title
                        class="ml-2 icon-info"
                        v-text="item.name"
                      ></v-list-item-title>
                    </div>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions class="info-actions">
            <v-spacer></v-spacer>
            <!-- <div v-if="routine.cycles.length > 4" class="d-flex mt-10 mr-2"> -->
            <!--   <v-spacer></v-spacer> -->
            <!--   <v-tooltip location="top"> -->
            <!--     <template v-slot:activator="{ props }"> -->
            <!--       <v-btn -->
            <!--         icon -->
            <!--         variant="tonal" -->
            <!--         color="primary" -->
            <!--         v-bind="props" -->
            <!--         density="comfortable" -->
            <!--       > -->
            <!--         {{ routine.cycles.length - 4 }}+ -->
            <!--       </v-btn> -->
            <!--     </template> -->
            <!--     <span> -->
            <!--       There {{ routine.cycles.length - 4 === 1 ? "is" : "are" }} -->
            <!--       {{ routine.cycles.length - 4 }} more section{{ -->
            <!--         routine.cycles.length - 4 === 1 ? "" : "s" -->
            <!--       }} -->
            <!--       in this workout! -->
            <!--     </span> -->
            <!--   </v-tooltip> -->
            <!-- </div> -->

            <v-icon
              class="mt-10"
              :color="show ? 'primary' : 'grey'"
              @click="show = !show"
              >mdi-information</v-icon
            >
          </v-card-actions>
        </template>
      </VueFlip>
    </v-card>
  </div>
</template>

<script>
import { VueFlip } from "vue-flip";
import { Icon } from "@iconify/vue";

export default {
  data: () => ({
    loading: false,
    show: false,
    isLiked: false,
    difficulty: null,
    difficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
  }),
  props: {
    routine: {
      type: Object,
      required: true,
    },
  },
  components: {
    Icon,
    VueFlip,
  },
  computed: {
    difficultyColor() {
      return (index) => {
        if (this.difficultyIndex() >= index) {
          switch (this.routine.difficulty) {
            case "rookie":
            case "beginner":
              return "#2ff18d"; // green
            case "expert":
              return "red";
            default:
              return "#fcbd00"; // yellow
          }
        } else {
          return "dimgrey";
        }
      };
    },
    cyclesToShow() {
      // return this.routine.cycles.slice(0, 4);
    },
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
    },

    difficultyIndex() {
      if (!this.difficulty)
        this.difficulty = this.difficulties.findIndex(
          (dif) => dif === this.routine.difficulty,
        ) + 1;
      return this.difficulty;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.routine-card {
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
}

.routine-card:hover {
  transform: scale(1.05);
}

.flip-card {
  position: relative;
}

.like-icon {
  position: relative !important;
  top: 45px;
  right: -5px;
  z-index: 1;
  transition: color 2s ease-in-out;
}

.details-container {
  min-height: inherit;
  display: flex;
  flex-direction: row;
  padding-bottom: 0;
}

.details-row,
.details-col,
.icon-info {
  font-size: 12px;
}

.cycle {
  width: 80%;
  padding: 0px;
}

/* min-width="320" max-width="320" min-height="370" max-height="370" */
.v-card,
.routine-card {
  min-width: 320px;
  min-height: 350px;
  max-width: 320px;
}

@media (max-width: 768px) {
  .v-card {
    min-height: 350px;
    /* adjust the height for smaller screens */
  }
}

.info-actions {
  position: absolute;
  bottom: calc(-350px);
  left: 0px;
  right: 0px;
}
</style>
