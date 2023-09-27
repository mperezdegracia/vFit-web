
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
        <h3 clase="txt-btn"          
          :class="{ 'hover': isHovered(link) }"
          @mouseover="setHovered(link, true)"
          @mouseout="setHovered(link, false)">
            {{ link }}
        </h3>
        </v-btn> 
        <v-col class="text-center mt-8" cols="12">
          {{ new Date().getFullYear() }} — <strong>VFit <Icon icon="ph:copyright-bold" /></strong>
        </v-col>
        <v-col class="text-center mt-4" cols="9">
          <a href="https://www.instagram.com/" target="_blank">
            <Icon icon="mdi:instagram" class="mr-2 icon-lg" :class="{'hover': instagramHover}" @mouseover="instagramHover = true" @mouseout="instagramHover = false"/>
          </a>
          <a href="https://www.facebook.com/?locale=es_LA" target="_blank">
            <Icon icon="ic:baseline-facebook" class="mr-2 icon-lg" :class="{'hover': facebookHover}" @mouseover="facebookHover = true" @mouseout="facebookHover = false"/>
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <Icon icon="mdi:twitter" class="mr-2 icon-lg" :class="{'hover': twitterHover}" @mouseover="twitterHover = true" @mouseout="twitterHover = false"/>
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
  .hover {
    color:darkblue ; 
  }
  .txt-btn{
    transition: color 0.1s; 
  }
</style>

<script default>
    
  import { Icon } from '@iconify/vue';
  export default {
    data() {
      return {
        links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Contact Us',
        ],
        hoveredLinks: {},
        instagramHover: false,
        facebookHover: false,
        twitterHover: false,
      };
    },

    methods: {
      isHovered(link) {
        return this.hoveredLinks[link];
      },
      setHovered(link, isHovered) {
        console.log(link);
        this.hoveredLinks[link] = isHovered;
      },
    },

    components: {
      Icon,
    },

  }
</script>

