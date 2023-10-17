<template>
  <v-footer class="bg-primary">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        <h3 class="txt-btn">
          {{ link }}
        </h3>
      </v-btn>
      <v-col class="text-center mt-8" cols="12">
        {{ new Date().getFullYear() }} —
        <strong
          >VFit
          <Icon icon="ph:copyright-bold" />
        </strong>
      </v-col>
      <v-col class="text-center mt-4" cols="9">
        <a href="https://www.instagram.com/" target="_blank">
          <Icon icon="mdi:instagram" class="mr-2 icon-lg" />
        </a>
        <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
          <Icon icon="ic:baseline-facebook" class="mr-2 icon-lg" />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <Icon icon="mdi:twitter" class="mr-2 icon-lg" />
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
.icon-lg {
  font-size: 30px;
  transition: color 0.5s;
  color: aliceblue;
}

.icon-lg:hover {
  color: darkblue;
}

.txt-btn {
  transition: color 0.1s;
}

.txt-btn:hover {
  color: darkblue;
}
</style>

<script default>
import { Icon } from "@iconify/vue";

export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Contact Us"],
  }),
  components: {
    Icon,
  },
};
</script>
