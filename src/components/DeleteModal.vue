<template>
  <v-btn variant="tonal" color="red-lighten-1" prepend-icon="mdi-delete" block>
    Borrar
    <v-dialog v-model="dialog" activator="parent" width="500">
      <v-card max-width="600">
        <v-card-title class="text-h5 text-primary mt-4 ml-4"
          >¿Seguro que quiere borrar?</v-card-title
        >
        <v-card-text class="ml-3 mt-4">
          Esta accion no se puede revertir
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="tonal"
            color="primary"
            @click="dialog = false"
            prepend-icon="mdi-close"
            >Cancelar</v-btn
          >
          <v-btn
            @click="submit()"
            variant="tonal"
            color="red-lighten-1"
            prepend-icon="mdi-delete"
            >Borrar</v-btn
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
