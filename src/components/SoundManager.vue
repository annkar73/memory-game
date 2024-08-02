<script setup lang="ts">
import { ref } from 'vue';

import flipSound from '@/assets/sounds/flip-sound.mp3';
import matchSound from '@/assets/sounds/match-sound.mp3';
import winningSound from '@/assets/sounds/winning-sound.mp3';

const flipAudio = new Audio(flipSound);
const matchAudio = new Audio(matchSound);
const winningAudio = new Audio(winningSound);

const playFlipSound = () => {
    flipAudio.play();
};

const playMatchSound = () => {
    matchAudio.play();
};

const playWinningSound = () => {
    winningAudio.play();
};

export { playFlipSound, playMatchSound, playWinningSound };

</script>

<template>

<!-- no visual content -->

</template>

<style scoped>

</style>