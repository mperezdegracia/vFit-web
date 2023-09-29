<template>
    <v-card elevation="0" class="w-50 mx-auto custom_card ">
        <!-- Avatar del usuario -->
        <br />
        <div class="d-flex justify-start align-end">       
            <v-avatar size="150" style="align: center;">
                <img src="../photos/perfil1.jpg" height="150" width="150" alt="Foto del usuario">
            </v-avatar>
        </div>
        <br/>
        <v-card-title class="text-h5">
            <v-text-field label="Nombre" v-model="usuario.nombre" readonly></v-text-field>
        </v-card-title>

        <v-card-text>
            <!-- Datos del usuario -->
            <v-row>
                <v-col cols="12">
                    <!-- Campo de entrada de texto deshabilitado para el correo electrónico -->
                    <v-text-field label="Correo Electrónico" v-model="usuario.correo" readonly></v-text-field>
                </v-col>
                <v-col cols="6">
                    <!-- Campo de entrada de texto deshabilitado para la edad -->
                    <v-text-field label="Edad" v-model="usuario.edad" readonly></v-text-field>
                </v-col>
                <v-col cols="6">
                    <!-- Campo de entrada de texto deshabilitado para el sexo -->
                    <!-- <v-text-field label="Sexo" v-model="usuario.sexo" readonly></v-text-field> -->
                    <v-select
                        label="Sexo"
                        v-model="usuario.sexo"
                        :items="sexos"
                        readonly
                    ></v-select>
                </v-col>
            </v-row>
        </v-card-text>
        <v-row>
            <!-- <v-col cols="1"></v-col> -->
            <v-col cols="6">
                <v-btn block color="primary" class="ml-0">
                    Editar perfil <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn block color="primary">
                    Cambiar contraseña <Icon icon="mdi:password" />
                </v-btn>
            </v-col>
            <!-- <v-col cols="1"></v-col> -->
        </v-row>
        <br/>
    </v-card>
</template>
  
<script>

import { Icon } from '@iconify/vue';

export default {
    data() {
        return {
            usuario: {
                nombre: 'Nombre del Usuario',
                correo: 'correo@example.com',
                edad: 25,
                sexo: 'Masculino',
                foto: '"../photos/perfil1.jpg"'
            },
        };
    },
    components: {
        Icon,
    },
};
</script>
  