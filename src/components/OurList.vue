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
    <h1>Komponente direkt vom Frontend mit einer einfachen ToDo-Liste</h1>
    <h3>( Das hat nichts mit dem Backend zu tun ! )</h3>
    <p><em>Diese Liste wurde im Meilenstein 2 erstellt, als wir das Frontend mit Vue.js aufgesetzt haben</em></p>


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
