<script setup lang="ts">
import { vConfetti } from "@neoconfetti/vue";

import { useConfetti } from "./hooks";
import Board from "./components/Board.vue";

const { showConfetti } = useConfetti();
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
</script>

<template>
  <Board />

  <div
    v-if="showConfetti"
    style="position: absolute; left: 50%; top: 30%"
    v-confetti="{
      force: 0.7,
      stageWidth: windowHeight,
      stageHeight: windowWidth,
      colors: ['#ff3e00', '#40b3ff', '#676778'],
    }"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
