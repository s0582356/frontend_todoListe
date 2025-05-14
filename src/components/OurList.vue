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


    <div v-for="(item, index) in items" :key="index">
      [ ] {{ item }}
    </div>
  </div>
</template>

<style scoped>

div {
  font-size: 18px;
  color: green;
  margin: 10px;
  padding: 5px;
}
</style>
