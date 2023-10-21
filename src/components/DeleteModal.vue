<template>
  <v-btn variant="tonal" class="p-0 btn" color="red-lighten-1" size="30" prepend-icon="mdi-delete" >
    
    <v-dialog v-model="dialog" activator="parent" width="500">
      <v-card max-width="600">
        <v-card-title class="text-h5 text-primary mt-4 ml-4"
          >¿Seguro que quiere borrar?</v-card-title
        >
        <v-card-text class="mx-2">
          Esta accion no se puede revertir
        </v-card-text>
        <v-card-actions>
          <v-container>
            <v-row class="pt-4 pb-2" align="center">
              <v-col cols="12" sm="6" class="py-1">
                <v-btn
                  @click="submit()"
                  variant="tonal"
                  color="red-lighten-1"
                  prepend-icon="mdi-delete"
                  block
                  >Borrar</v-btn
                >
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-btn
                  variant="tonal"
                  color="black"
                  @click="dialog = false"
                  prepend-icon="mdi-close"
                  block
                  >Cancelar</v-btn
                >
              </v-col>
            </v-row></v-container
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    object: {
      required: true,
    },
    deleteAction: {
      required: true,
    },
    postDeleteAction: {
      required: true,
    },
  },
  methods: {
    async submit() {
      try {
        await this.deleteAction(this.object);
        await this.postDeleteAction();
        this.dialog = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
