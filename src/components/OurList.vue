<script setup lang="ts">
// OurList.vue
// Fest definierte Liste (manuell)
const items = [
  "Erste Aufgabe: Wohnung putzen",
  "Zweite Aufgabe: Einkaufen gehen",
  "Dritte Aufgabe: Abendessen kochen"
]
</script>

<template>
  <div>
    <h1>Unsere Komponente mit einer einfachen ToDo-Liste</h1>

    <!-- Einfachste v-for Implementierung -->
    <div v-for="(item, index) in items" :key="index">
      [ ] {{ item }} <!-- So wird es garantiert angezeigt -->
    </div>
  </div>
</template>

<style scoped>
/* Zwingendes Basis-Styling für Sichtbarkeit */
div {
  font-size: 18px;
  color: green; /* Sicherstellen dass Text sichtbar ist */
  margin: 10px;
  padding: 5px;
}
</style>
