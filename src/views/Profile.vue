<template>
    <v-card elevation="0" class="w-50 mx-auto custom_card ">
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
                :readonly="!edicionHabilitada"></v-text-field>
        </v-card-title>

        <v-card-text>
            <!-- Datos del usuario -->
            <v-row>
                <v-col cols="12">
                    <!-- Campo de entrada de texto deshabilitado para el correo electrónico -->
                    <v-text-field label="Correo Electrónico" v-model="usuario.correo" :disabled="!edicionHabilitada"
                        readonly></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <!-- Campo de entrada de texto deshabilitado para la edad -->
                    <v-text-field label="Edad" v-model="usuario.edad" :disabled="!edicionHabilitada"
                        :readonly="!edicionHabilitada"></v-text-field>
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
    </v-card>

    <v-dialog v-model="mostrarConfirmacion" max-width="400">
        <v-card>
            <v-card-title class="headline">Confirmación</v-card-title>
            <v-card-text>
                ¿Estás seguro de que deseas guardar los cambios?
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="guardarCambios">Guardar</v-btn>
                <v-btn color="primary" text @click="deshacerCambios">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
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
                foto: '../src/photos/perfil1.jpg'
            },
            usuarioOriginal: {},
            sexos: ['Masculino', 'Femenino'],
            edicionHabilitada: false,
            mostrarConfirmacion: false,
        };
    },
    components: {
        Icon,
    },

    methods: {
        toggleModoEdicion() {
            // Verifica si el usuario está cancelando los cambios
            if (!this.edicionHabilitada) {
                this.mostrarConfirmacion = false;
            } else {
                this.mostrarConfirmacion = true;
            }
            this.edicionHabilitada = !this.edicionHabilitada;
        },
        guardarCambios() {
            // Agregar la lógica para guardar los cambios
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
  