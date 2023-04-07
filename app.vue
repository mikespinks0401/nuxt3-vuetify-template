<script setup lang="ts">
import { ref } from "vue"
const num = ref(0)

const incrementCount = () => {
  num.value++
}
</script>

<template>
  <div>
    <v-app>
    <NuxtPage />
    </v-app>
  </div>
</template>
