<template>
  <!-- Avatar del usuario -->
  <v-row justify="center" align="center">
    <v-avatar size="150">
      <img
        :src="user.avatarUrl || '/no_user_photo.svg'"
        height="150"
        width="150"
        alt="Foto del usuario"
      />
    </v-avatar>
  </v-row>

  <!-- Datos del usuario -->

  <v-row class="pt-4">
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="Nombre de Usuario"
        v-model="user.username"
        prepend-inner-icon="mdi-account"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="Correo Electrónico"
        v-model="user.email"
        prepend-inner-icon="mdi-email"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="Nombre"
        v-model="user.firstName"
        prepend-inner-icon="mdi-text"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="Apellido"
        v-model="user.lastName"
        prepend-inner-icon="mdi-text"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col md="6" sm="12" class="py-1">
      <v-select
        label="Genero"
        v-model="user.gender"
        prepend-inner-icon="mdi-gender-male-female"
        :items="['male', 'female', 'other']"
        :readonly="!edit"
      ></v-select>
    </v-col>
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="Fecha de nacimiento"
        type="date"
        v-model="user.birthdate"
        prepend-inner-icon="mdi-cake"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="Telefono"
        type="number"
        v-model="user.phone"
        prepend-inner-icon="mdi-phone"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
    <v-col md="6" sm="12" class="py-1">
      <v-text-field
        label="URL de avatar"
        v-model="user.avatarUrl"
        prepend-inner-icon="mdi-image-outline"
        :readonly="!edit"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row v-if="!edit">
    <v-col class="py-1">
      <v-btn
        block
        color="primary"
        @click="edit = true"
        prepend-icon="mdi-pencil"
      >
        Editar perfil
      </v-btn>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col md="6" sm="12" class="py-1">
      <v-btn
        block
        variant="tonal"
        color="green"
        class="ml-0"
        @click="edit = false"
        prepend-icon="mdi-content-save"
      >
        Guardar cambios
      </v-btn>
    </v-col>
    <v-col md="6" sm="12" class="py-1">
      <v-btn
        block
        variant="tonal"
        color="black"
        class="ml-0"
        @click="edit = false"
        prepend-icon="mdi-close"
      >
        Cancelar cambios
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { useSecurityStore } from "@/stores/SecurityStore";
import { mapActions } from "pinia";

export default {
  data: () => ({
    user: {},
    edit: false,
  }),
  methods: {
    ...mapActions(useSecurityStore, {
      $getCurrentUser: "getCurrentUser",
    }),
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
