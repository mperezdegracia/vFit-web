
<template>
    <v-footer class="bg-secondary">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn> 
        <v-col class="text-center mt-8" cols="12">
          {{ new Date().getFullYear() }} — <strong>VFit <Icon icon="ph:copyright-bold" /></strong>
        </v-col>
        <v-col class="text-left mt-4" cols="9">
          <Icon icon="mdi:instagram" class="mr-2"/>
          <Icon icon="ic:baseline-facebook" class="mr-2"/>
          <Icon icon="mdi:twitter" class="mr-2"/>
        </v-col>
      </v-row>
    </v-footer>
  </template>


<script default>
    
  import { Icon } from '@iconify/vue';
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Contact Us',
      ],
    }),
    components: {
    Icon,
  },
  }
</script>

