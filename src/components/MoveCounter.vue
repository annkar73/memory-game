<script setup lang="ts">

const props = defineProps<{
    moveCount: number;
}>();

</script>

<template>
    <div class="move-counter">
        Antal drag: {{ props.moveCount }}
    </div>
</template>

<style scoped>
.move-counter {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 20px;
}
</style>