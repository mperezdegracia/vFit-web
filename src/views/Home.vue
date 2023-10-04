<template>
  <div class="bg-contrast min h-screen justify-center align-center">
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
const routines = [
  {
    name: "Routine 1",
    user: "User 1",
    rate: 4,
    dif: 3,
    reviews: 10,
    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",
    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 2",
    user: "User 2",
    rate: 5,
    dif: 2,
    reviews: 70,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 3",
    user: "User 3",
    rate: 2,
    dif: 5,
    reviews: 23,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 3",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 1",
    user: "User 1",
    rate: 4,
    dif: 3,
    reviews: 10,
    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",
    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 2",
    user: "User 2",
    rate: 5,
    dif: 2,
    reviews: 70,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 3",
    user: "User 3",
    rate: 2,
    dif: 5,
    reviews: 23,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 3",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 1",
    user: "User 1",
    rate: 4,
    dif: 3,
    reviews: 10,
    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",
    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 2",
    user: "User 2",
    rate: 5,
    dif: 2,
    reviews: 70,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 3",
    user: "User 3",
    rate: 2,
    dif: 5,
    reviews: 23,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 3",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 1",
    user: "User 1",
    rate: 4,
    dif: 3,
    reviews: 10,
    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",
    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 2",
    user: "User 2",
    rate: 5,
    dif: 2,
    reviews: 70,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Routine 3",
    user: "User 3",
    rate: 2,
    dif: 5,
    reviews: 23,

    tags: ["Abs", "Upper Body"],
    image: "src/assets/routine.png",

    cycles: [
      {
        name: "Warm-up",
        items: [
          {
            name: "Jumping jacks",
            duration: 30,
          },
          {
            name: "High knees",
            duration: 30,
          },
          {
            name: "Butt kicks",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 1",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cycle 2",
        items: [
          {
            name: "Crunches",
            duration: 30,
          },
          {
            name: "Plank",
            duration: 30,
          },
          {
            name: "Leg raises",
            duration: 30,
          },
        ],
      },
      {
        name: "Cycle 3",
        items: [
          {
            name: "Squats",
            duration: 60,
          },
          {
            name: "Lunges",
            duration: 60,
          },
          {
            name: "Push ups",
            duration: 60,
          },
        ],
      },
      {
        name: "Cool-down",
        items: [
          {
            name: "Stretching",
            duration: 60,
          },
        ],
      },
    ],
  },
];
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
