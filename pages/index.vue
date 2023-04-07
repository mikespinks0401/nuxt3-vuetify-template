<script setup>
const num = ref(0);

const incrementCount = () => {
    num.value++;
};
</script>
<template>
    <div class="h-100 d-flex justify-center align-center">
        <v-btn @click="incrementCount"> CLICK ME </v-btn>
        <p class="text-h1">
            With Vuetify-<span data-test="number">{{ num }}</span>
        </p>
    </div>
</template>
