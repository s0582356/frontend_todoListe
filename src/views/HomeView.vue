<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1 class="fade-in delay-1 glow">Willkommen bei deiner To-Do Liste!</h1>
    <p class="fade-in delay-2">Behalte den Überblick über deine Aufgaben...</p>
    <TheWelcome class="fade-in delay-3" />

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

@keyframes fancyEntrance {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    filter: blur(2px);
  }
  80% {
    transform: translateY(-5px) scale(1.03);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fade-in {
  opacity: 0;
  animation: fancyEntrance 1.2s ease-out forwards;
}
.glow {
  text-shadow: 0 0 10px rgba(0, 255, 213, 0.6), 0 0 20px rgba(0, 255, 213, 0.3);
}

</style>
