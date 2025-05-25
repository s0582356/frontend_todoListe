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
  <div class="wrapper">
    <h1>Komponente direkt vom Frontend mit einer einfachen ToDo-Liste</h1>
    <h3>( Das hat nichts mit dem Backend zu tun ! )</h3>
    <p><em>Diese Liste wurde im Meilenstein 2 erstellt, als wir das Frontend mit Vue.js aufgesetzt haben</em></p>

    <ul class="todo-list">
    <li v-for="(item, index) in items" :key="index">
      <span class="checkbox">[ ]</span> {{ item }}
    </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 12px;
}

h1 {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 8px;
}

h3 {
  font-size: 18px;
  color: #e74c3c;
  margin-bottom: 12px;
}

p {
  color: #555;
  margin-bottom: 20px;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  font-size: 18px;
  color: #34495e;
  margin: 8px 0;
  padding: 8px 12px;
  background-color: #ecf0f1;
  border-radius: 6px;
  display: flex;
  align-items: center;
}

.checkbox {
  color: #16a085;
  margin-right: 10px;
  font-weight: bold;
}
</style>
