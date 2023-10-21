<template>
  <v-btn variant="tonal" color="primary" prepend-icon="mdi-open-in-new" block
    >Detalles
    <v-dialog v-model="dialog" activator="parent" width="800">
      <v-card max-width="800" min-height="400" class="rounded-lg">
        <v-card-title class="text-h5 text-primary mt-4 ml-4">
          <div class="d-flex align-items-center item">
            {{ routine.name }}
            <v-spacer></v-spacer>
            <v-btn
              :icon="
                routine.metadata?.liked ? 'mdi-heart' : 'mdi-heart-outline'
              "
              :color="routine.metadata?.liked ? 'pink' : 'grey'"
              variant="tonal"
              @click="toggleFavorite()"
            ></v-btn>
          </div>
        </v-card-title>

        <v-card-subtitle class="text-center">
          {{ routine.detail }}
        </v-card-subtitle>

        <v-card-text>
          <v-row>
            <v-col
              v-for="(cycle, index) in routine.cycles"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              no-gutters
            >
              <v-list>
                <v-list-subheader color="secondary">
                  {{ cycle.name }}
                </v-list-subheader>
                <v-divider></v-divider>
                <v-list-item
                  min-height="20"
                  class="list-item px-0"
                  color="primary"
                  v-for="(exercise, exerciseIdx) in cycle.exercises"
                  :key="exerciseIdx"
                  :selectable="false"
                >
                  <div class="d-flex align-items-center item">
                    <v-icon color="grey">mdi-dumbbell</v-icon>
                    <v-list-item-title
                      class="ml-2 icon-info"
                      v-text="exercise.exercise.name"
                    ></v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-icon color="grey">mdi-clock</v-icon>
                    <v-list-item-title class="ml-2 icon-info">
                      <span v-if="exercise.repetitions != 0"
                        >{{ exercise.repetitions }} reps / </span
                      >{{ exercise.duration }}s
                    </v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-container>
            <v-row class="pt-4 pb-2" align="end">
              <v-col v-if="canEdit" cols="12" sm="4" class="py-1">
                <v-btn
                  :to="`/routine/${routine.id}`"
                  variant="tonal"
                  color="secondary"
                  prepend-icon="mdi-pencil"
                  block
                  >Editar</v-btn
                ></v-col
              >
              <v-col v-if="canEdit" cols="12" sm="4" class="py-1">
                <DeleteModal
                  block
                  :object="routine"
                  :deleteAction="$deleteRoutine"
                  :postDeleteAction="closeAndGetAllRoutines"
                />
              </v-col>
              <v-col class="py-1">
                <v-btn
                  variant="tonal"
                  color="black"
                  @click="dialog = false"
                  prepend-icon="mdi-close"
                  block
                  >Cerrar</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
import { useRoutineStore } from "@/stores/RoutineStore";
import { useFavoriteStore } from "@/stores/FavoriteStore";
import DeleteModal from "./DeleteModal.vue";
import { mapActions } from "pinia";
import { useSecurityStore } from "@/stores/SecurityStore";

export default {
  data: () => ({
    dialog: false,
    canEdit: false,
  }),
  props: {
    routine: {
      required: true,
    },
    getAllRoutines: {
      required: true,
    },
  },
  methods: {
    ...mapActions(useSecurityStore, {
      $getCurrentUser: "getCurrentUser",
    }),
    ...mapActions(useRoutineStore, {
      $deleteRoutine: "delete",
    }),
    ...mapActions(useFavoriteStore, {
      $addFavorite: "create",
      $removeFavorite: "delete",
    }),

    async toggleFavorite() {
      try {
        if (this.routine.metadata?.liked)
          await this.$removeFavorite(this.routine);
        else await this.$addFavorite(this.routine);
      } catch (e) {
        console.error(e);
      }
    },

    async closeAndGetAllRoutines() {
      try {
        await this.getAllRoutines();
        this.dialog = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
  async beforeMount() {
    try {
      const user = await this.$getCurrentUser();
      this.canEdit = this.routine.user.id == user.id;
    } catch (e) {
      console.error(e);
    }
  },
  components: {
    DeleteModal,
  },
};
</script>
