<template>
  <div class="bg-contrast p-0">
    <!-- Avatar del usuario -->
    <div class="d-flex justify-start align-end">
      <v-avatar size="100" style="align: center">
        <img :src="user.avatarUrl" height="150" width="150" alt="Foto del usuario" />
      </v-avatar>
    </div>

    <!-- Información del usuario -->
    <div class="d-flex flex-column align-start ml-10 mt-2">
      <h2 class="text-body-1 text-grey">Nombre de Usuario:</h2>
      <div class="d-flex align-end ml-5 w-50 p-0 m-0">
        <p class="text-body-1">{{ user.username }}</p>
        <v-spacer></v-spacer>
        <v-btn class="mb-0 mr-5" size="40" variant="tonal" color="primary" icon="mdi-pencil" @click="editField('username')"></v-btn>
      </div>
      <v-divider class="w-50 mt-1"></v-divider>
      <h2 class="text-body-1 text-grey mt-3">Mail:</h2>
      <div class="d-flex align-center ml-5  w-50">
        <p class="text-body-1">{{ user.email }}</p>
        <v-spacer ></v-spacer>
        <v-btn class="mb-0 mr-5" size="40" variant="tonal" color="primary" icon="mdi-pencil"  @click="editField('email')"></v-btn>

      </div>
      <v-divider class="w-50"></v-divider>
      <h2 class="text-body-1 text-grey mb-2 mt-3">Sexo:</h2>

      <div class="d-flex align-center ml-5 w-50">
        <!-- <p class="text-h6">{{ user.sex }}</p> -->
        <p class="text-body-1"> Masculino</p> 
        <v-spacer ></v-spacer>
        <v-btn class="mb-0 mr-5" size="40" variant="tonal" color="primary" icon="mdi-pencil"  @click="editField('sex')"></v-btn>
      </div>
      <v-divider class="w-50"></v-divider>

    </div>

    <!-- Diálogo de edición -->
    <v-dialog v-model="editing[editFieldKey]" max-width="400">
      <div class="bg-contrast">
        <v-card-title class="headline">{{ editFieldTitle }}</v-card-title>
        <v-card-text>
          <v-text-field v-if="editFieldKey === 'username'" v-model="editedUser.username" label="Nombre de usuario"
            :rules="nameRules"></v-text-field>
          <v-text-field v-if="editFieldKey === 'email'" v-model="editedUser.email"
            label="Correo electrónico"></v-text-field>
          <v-text-field v-if="editFieldKey === 'age'" v-model="editedUser.age" label="Edad"
            :rules="ageRules"></v-text-field>
          <v-select v-if="editFieldKey === 'sex'" v-model="editedUser.sex" :items="sexOptions" label="Sexo"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="guardarCambios()">Guardar</v-btn>
          <v-btn color="primary" text @click="cancelarCambios()">Cancelar</v-btn>
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
    editing: {
      username: false,
      email: false,
      sex: false,
    },
    user: {},
    editFieldKey: "",
    editFieldTitle: "",
    editedUser: {
      username: "",
      email: "",
      age: "",
      sex: "",
    },
    sexOptions: ["Masculino", "Femenino", "Otro"],
    nameRules: [
      (v) => !!v || "El nombre es requerido",
      (v) => v.length <= 20 || "El nombre debe tener menos de 20 caracteres",
    ],
    ageRules: [
      (v) => !!v || "La edad es requerida",
      (v) => v >= 18 || "Debes ser mayor de edad",
    ],
  }),
  computed: {

  },
  methods: {
    ...mapActions(useSecurityStore, {
      $getCurrentUser: "getCurrentUser",
    }),

    editField(key) {
      this.editFieldKey = key;
      this.editFieldTitle = `Editar ${key}`;
      this.editedUser[key] = this.user[key];
      this.editing[key] = true;
    },
    guardarCambios() {
      this.updateUser(this.editedUser);
      this.editing[this.editFieldKey] = false;
    },
    cancelarCambios() {
      this.editing[this.editFieldKey] = false;
      this.editedUser = {
        username: "",
        email: "",
        age: "",
        sex: "",
      };
    },
  },
  async beforeMount() {
    try {
      this.user = await this.$getCurrentUser();
    } catch (e) {
      console.error(e);
    }
  }
};
</script>