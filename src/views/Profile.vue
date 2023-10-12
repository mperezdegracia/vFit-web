<template>
    <center>
        <div style="max-width: 600px; align-items: center;">
            <!-- Avatar del usuario -->
            <br />
            <div class="d-flex justify-start align-end">
                <v-avatar size="150" style="align: center;">
                    <img :src="usuario.foto" height="150" width="150" alt="Foto del usuario">
                </v-avatar>
            </div>
            <br />
            <v-card-title class="text-h5">
                <v-text-field label="Nombre" v-model="usuario.nombre" :disabled="!edicionHabilitada"
                    :readonly="!edicionHabilitada" :rules="nameRules"></v-text-field>
            </v-card-title>

            <v-card-text>
                <!-- Datos del usuario -->
                <v-row>
                    <v-col cols="12">
                        <!-- Campo de entrada de texto deshabilitado para el correo electrónico -->
                        <v-text-field label="Correo Electrónico" v-model="usuario.correo" disabled readonly></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <!-- Campo de entrada de texto deshabilitado para la edad -->
                        <v-text-field label="Edad" v-model="usuario.edad" :disabled="!edicionHabilitada"
                            :readonly="!edicionHabilitada" :rules="ageRules"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <!-- Campo de entrada de texto deshabilitado para el sexo -->
                        <!-- <v-text-field label="Sexo" v-model="usuario.sexo" readonly></v-text-field> -->
                        <v-select label="Sexo" v-model="usuario.sexo" :items="sexos" :readonly="!edicionHabilitada"
                            :disabled="!edicionHabilitada"></v-select>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-row>
                <!-- <v-col cols="1"></v-col> -->
                <v-col cols="12" md="6">
                    <v-btn block color="primary" class="ml-0" @click="toggleModoEdicion">
                        {{ edicionHabilitada ? 'Guardar cambios' : 'Editar perfil' }}
                        <v-icon>{{ edicionHabilitada ? 'mdi-content-save' : 'mdi-pencil' }}</v-icon>
                    </v-btn>

                </v-col>
                <v-col cols="12" md="6">
                    <v-btn block color="primary">
                        Cambiar contraseña
                        <Icon icon="mdi:password" />
                    </v-btn>
                </v-col>
                <!-- <v-col cols="1"></v-col> -->
            </v-row>

            <br />
        </div>
    </center>
    <v-dialog v-model="mostrarConfirmacion" max-width="400">
        <div class="bg-white">
            <v-card-title class="headline">Confirmación</v-card-title>
            <v-card-text>
                ¿Estás seguro de que deseas guardar los cambios?
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="guardarCambios">Guardar</v-btn>
                <v-btn color="primary" text @click="deshacerCambios">Cancelar</v-btn>
            </v-card-actions>
        </div>
    </v-dialog>
</template>
  
<style scoped>
/* Estilo para los campos de texto deshabilitados */
.custom-disabled-textfield {
    color: black;
    /* Cambia el color del texto a negro */
}
</style>

<script>

import { Icon } from '@iconify/vue';

function getImageURL(name) {
    return new URL(`../photos/${name}`, import.meta.url).href
}

export default {
    data() {
        return {
            usuario: {
                nombre: 'Nombre del Usuario',
                correo: 'correo@example.com',
                edad: 25,
                sexo: 'Masculino',
                foto: '../src/photos/perfil1.jpg',
                cantRoutines: 5
            },
            nameRules: [
                (value) => {
                    if (value) return true;
                    return "Title is required.";

                },
                (value) => {
                    if (value?.length <= 30) return true;
                    return "Name must be less than 30 characters.";
                },
            ],
            ageRules: [
                value => !!value || 'Age is required',
                value => /^[0-9]+$/.test(value) || 'Age must be a number',
                value => (value >= 16 && value <= 100) || 'Age must be between 16 and 100',
            ],
            usuarioOriginal: {},
            sexos: ['Masculino', 'Femenino'],
            edicionHabilitada: false,
            mostrarConfirmacion: false,
            deshabilitarGuardarCambios: false,
        };
    },
    components: {
        Icon,
    },

    methods: {
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
                if (!this.edicionHabilitada) {
                    this.mostrarConfirmacion = false;
                } else {
                    this.mostrarConfirmacion = true;
                }
                this.edicionHabilitada = !this.edicionHabilitada;
            }

        },
        guardarCambios() {

            // Agregar la lógica para guardar los cambios
            // aca hacer la logica de la api
            this.mostrarConfirmacion = false;

        },
        deshacerCambios() {
            //this.usuario = datos traido de la api
            this.mostrarConfirmacion = false;
            // logica para deshacer cambios
        }
    },
};
</script>
  