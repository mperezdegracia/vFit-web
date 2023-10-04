<template>
  <div class="bg-contrast justify-center align-center">
    <h1 class="text-h2 pt-10 text-secondary text-center">Welcome Back!</h1>
    <div class="search-div">
      <SearchBar></SearchBar>
      <v-btn color="primary new-button">New Routine</v-btn>
    </div>
    <v-divider class="mx-auto divider mb-2 mt-10  "></v-divider>

    <h1 class="w-50 text-center font-weight-medium text-h4 slide-title"> Recommended</h1>
    <div class="d-flex justify-center flex-scroll-container">
      <div class="scroll-container">
        <RoutineScroll :routines="routines"></RoutineScroll>
      </div>
    </div>


    <h1 class="w-50 text-center font-weight-medium text-h4 slide-title"> Liked</h1>
    <div class="d-flex justify-center flex-scroll-container">
      <div class="scroll-container">
        <RoutineScroll :routines="routines"></RoutineScroll>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBar from "@/components/SearchBar.vue";
import RoutineScroll from "@/components/RoutineScroll.vue";
import  routines from "@/data/mockRoutines.js";
</script>

<style>
.new-button {
  position: absolute;
  margin-left: 62%;
  min-height: 45px;
  margin-bottom: 18px;
  opacity: 90%;
}

.divider {
  width: 90%;
}

.scroll-container {
  margin-top: 40px;
  align-items: center;
  width: 80%;
}

.flex-scroll-container {}

.slide-title {
  font-family: 'Courier New', Courier, monospace;
}

.search-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .search-div {
    display: block;
  }
}
</style>
