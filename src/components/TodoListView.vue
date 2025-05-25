<script setup lang="ts">         // Diese Komponente für Meilenstein 3 erstellt
import { ref, onMounted } from 'vue'

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todos = ref<Todo[]>([])

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL

onMounted(async () => {
  try {
    const response = await fetch(baseUrl + '/todos')
    todos.value = await response.json()
  } catch (error) {
    console.error('Fehler beim Laden:', error)
  }
})
</script>

<template>
  <div class="todo-container">
    <h2>Meine Todos vom Backend</h2>
    <div v-for="todo in todos" :key="todo.title" class="todo-item">
      <h3>{{ todo.title }}</h3>
      <p>{{ todo.description }}</p>
      <p>Status: {{ todo.completed ? '✅ Fertig' : '❌ Offen' }}</p>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.todo-item {
  background: #f8f9fa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.todo-item h3 {
  margin-top: 0;
  color: #2c3e50;
}
</style>
