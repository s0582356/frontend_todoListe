<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Willkommen bei deiner To-Do Liste!</h1>
    <p>Behalte den Überblick über deine Aufgaben, organisiere deinen Tag und erreiche deine Ziele.</p>
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  color: #555;
}
</style>
