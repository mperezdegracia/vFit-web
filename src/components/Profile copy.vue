<template>
  <!-- Avatar del usuario -->
  <div class="bg-contrast p-0">
    <div class="d-flex justify-start align-end">
      <v-avatar size="150" style="align: center">
        <img :src="user.avatarUrl" height="150" width="150" alt="Foto del usuario" />
      </v-avatar>
    </div>

    <!-- Datos del usuario -->
    <v-row align="center" justify="center" class="w-75">
      <v-col cols="12">
        <v-text-field class="w-50" label="Nombre" v-model="user.username" :readonly="!edit"></v-text-field>
      </v-col>
      <v-col cols="12">
        <!-- Campo de entrada de texto deshabilitado para el correo electrónico -->
        <v-text-field class="w-50" label="Correo Electrónico" v-model="user.email" :readonly="!edit"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <!-- Campo de entrada de texto deshabilitado para la edad -->
        <!-- <v-text-field
        label="Edad"
        v-model="usuario.edad"
        :disabled="!edicionHabilitada"
        :readonly="!edicionHabilitada"
        :rules="ageRules"
      ></v-text-field> -->
      </v-col>
      <v-col cols="12" md="6">
        <!-- Campo de entrada de texto deshabilitado para el sexo -->
        <!-- <v-text-field label="Sexo" v-model="usuario.sexo" readonly></v-text-field> -->
        <v-select label="Sexo" v-model="user.gender" :items="['Masculine', 'Femenine', 'Other']"
          :readonly="!edit"></v-select>
      </v-col>
    </v-row>
    <v-row class="w-75" justify="center" align="center">
      <v-col cols="12" md="6">
        <v-btn block color="primary" class="ml-0" @click="edit = true" v-if="!edit" prepend-icon="mdi-pencil">
          Editar perfil
        </v-btn>
        <v-btn block color="primary" class="ml-0" @click="edit = false" prepend-icon="mdi-content-save" v-else>
          Guardar cambios
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn block color="primary" prepend-icon="mdi-password">
          Cambiar contraseña
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <div class="bg-contrast">
        <v-card-title class="headline">Confirmación</v-card-title>
        <v-card-text>
          ¿Estás seguro de que deseas guardar los cambios?
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="guardarCambios()">Guardar</v-btn>
          <v-btn color="primary" text @click="deshacerCambios()">Cancelar</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>

  </div>
</template>

<script>
import { useSecurityStore } from "@/stores/SecurityStore";
import { mapActions } from "pinia";

export default {
  data: () => ({
    user: {},
    edit: false,
    dialog: false,
  }),
  methods: {
    ...mapActions(useSecurityStore, {
      $getCurrentUser: "getCurrentUser",
    }),

    toggleModoEdicion() {
      // Verifica si el usuario está cancelando los cambios
      let isValid = true;
      for (const rule of this.nameRules) {
        const result = rule(this.usuario.nombre);
        if (result !== true) {
          isValid = false;
          console.error(result);
          return; // No guardar si no cumple con las reglas
        }
      }

      // Validar las reglas de edad
      for (const rule of this.ageRules) {
        const result = rule(this.usuario.edad);
        if (result !== true) {
          isValid = false;
          console.error(result);
          return; // No guardar si no cumple con las reglas
        }
      }
      if (isValid) {
        if (!this.edit) {
          this.dialog = false;
        } else {
          this.dialog = true;
        }
        this.edit = !this.edit;
      }
    },
    guardarCambios() {
      // Agregar la lógica para guardar los cambios
      // aca hacer la logica de la api
      this.dialog = false;
    },
    deshacerCambios() {
      //this.usuario = datos traido de la api
      this.dialog = false;
      // logica para deshacer cambios
    },
  },
  async beforeMount() {
    try {
      this.user = await this.$getCurrentUser();
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
