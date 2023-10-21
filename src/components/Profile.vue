<template>
  <v-form validate-on="submit lazy" @submit.prevent="submit">
    <v-row justify="center" align="center">
      <v-avatar size="150" class="elevation-1">
        <img
          :src="user.avatarUrl || '/no_user_photo.svg'"
          height="150"
          width="150"
          alt="Foto del usuario"
        />
      </v-avatar>
    </v-row>

    <v-row class="pt-8">
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="Nombre de Usuario"
          v-model="user.username"
          prepend-inner-icon="mdi-account"
          :readonly="true"
        ></v-text-field>
      </v-col>
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="Correo Electrónico"
          v-model="user.email"
          prepend-inner-icon="mdi-email"
          :readonly="true"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="Nombre"
          v-model="user.firstName"
          :rules="maxLength50Rule"
          prepend-inner-icon="mdi-text"
          :counter="50"
          :readonly="!edit"
        ></v-text-field>
      </v-col>
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="Apellido"
          v-model="user.lastName"
          :rules="maxLength50Rule"
          prepend-inner-icon="mdi-text"
          :counter="50"
          :readonly="!edit"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="6" cols="12" class="py-1">
        <v-select
          label="Genero"
          v-model="user.gender"
          :rules="requiredRule"
          prepend-inner-icon="mdi-gender-male-female"
          :items="['male', 'female', 'other']"
          :readonly="!edit"
        ></v-select>
      </v-col>
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="Fecha de nacimiento"
          type="date"
          v-model="birthdate"
          prepend-inner-icon="mdi-cake"
          :readonly="!edit"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="Telefono"
          type="number"
          v-model="user.phone"
          prepend-inner-icon="mdi-phone"
          :counter="50"
          :readonly="!edit"
        ></v-text-field>
      </v-col>
      <v-col md="6" cols="12" class="py-1">
        <v-text-field
          label="URL de avatar"
          v-model="user.avatarUrl"
          :rules="maxLength255Rule"
          prepend-inner-icon="mdi-image-outline"
          :counter="255"
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
          type="submit"
          block
          variant="tonal"
          color="green"
          :loading="loading"
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
          @click="reset()"
          prepend-icon="mdi-close"
        >
          Cancelar cambios
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { User } from "@/api/user";
import { useSecurityStore } from "@/stores/SecurityStore";
import { mapActions } from "pinia";

export default {
  data: () => ({
    loading: false,
    edit: false,

    user: {},
    backupUser: {},
    birthdate: "",

    requiredRule: [
      (value) => {
        if (value) return true;
        return "Este campo es obligatorio.";
      },
    ],
    maxLength50Rule: [
      (value) => {
        if (value?.length <= 50) return true;
        return "El campo tiene que tener menos de 50 caracteres.";
      },
    ],
    maxLength100Rule: [
      (value) => {
        if (value?.length <= 100) return true;
        return "El campo tiene que tener menos de 100 caracteres.";
      },
    ],
    maxLength255Rule: [
      (value) => {
        if (value?.length <= 255) return true;
        return "El campo tiene que tener menos de 255 caracteres.";
      },
    ],
  }),
  computed: {},
  methods: {
    ...mapActions(useSecurityStore, {
      $getCurrentUser: "getCurrentUser",
    }),
    ...mapActions(useSecurityStore, {
      $modifyUser: "modify",
    }),

    async submit(event) {
      const results = await event;
      if (!results.valid) return;

      try {
        this.loading = true;
        const user = new User(
          this.user.username,
          this.user.email,
          this.user.password,
          this.user.firstName,
          this.user.lastName,
          this.user.gender,
          Math.floor(new Date(this.user.birthdate).getTime() / 1000),
          this.user.phone || "",
          this.user.avatarUrl || ""
        );
        this.user = await this.$modifyUser(user);
        this.backupUser = { ...this.user };
      } catch (e) {
        console.error(e);
        this.reset();
      }
      this.loading = false;
      this.edit = false;
    },

    reset() {
      this.edit = false;
      this.user = { ...this.backupUser };
    },
  },
  async beforeMount() {
    try {
      this.user = await this.$getCurrentUser();
      this.backupUser = { ...this.user };

      this.birthdate = new Date(this.user.birthdate * 1000)
        .toISOString()
        .split("T")[0];
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
