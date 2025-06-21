<script setup lang="ts">
import { ref } from 'vue';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const newTodo = ref({ title: '', description: '', completed: false });
const showTodos = ref(false);
const isLoading = ref(false);

const API_URL = 'http://localhost:8080/api';

// Todos laden oder Liste verbergen
const loadTodos = async () => {
  if (showTodos.value) {
    showTodos.value = false;
    return;
  }

  isLoading.value = true;
  try {
    const response = await fetch(`${API_URL}/todos`);
    todos.value = await response.json();
    showTodos.value = true;
  } catch (error) {
    console.error('Fehler:', error);
    alert('Fehler beim Laden der Todos!');
  } finally {
    isLoading.value = false;
  }
};

// Todo hinzufügen
const addTodo = async () => {
  if (!newTodo.value.title.trim()) {
    alert('Titel ist erforderlich!');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo.value)
    });

    const createdTodo = await response.json();
    todos.value.push(createdTodo);
    newTodo.value = { title: '', description: '', completed: false };
  } catch (error) {
    console.error('Fehler:', error);
    alert('Speichern fehlgeschlagen!');
  }
};

// Alle Todos löschen
const deleteAllTodos = async () => {
  if (todos.value.length === 0) return;

  if (!confirm('Wirklich ALLE Todos löschen?')) return;

  try {
    await fetch(`${API_URL}/todos`, { method: 'DELETE' });
    todos.value = [];
    showTodos.value = false;
  } catch (error) {
    console.error('Löschen fehlgeschlagen:', error);
    alert('Löschen aller Todos fehlgeschlagen!');
  }
};

const toggleTodo = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/todos/${id}`,{ method: 'PUT'});

    if (!response.ok) throw new Error();

    const updatedTodo = await response.json();
    const index = todos.value.findIndex(t => t.id === id);
    if (index > -1) {
      todos.value[index] = updatedTodo;
    }
  } catch (error) {
    console.error('Fehler beim Umschalten:', error);
    alert('Todo konnte nicht aktualisiert werden!');
  }
};
</script>

<template>
  <div class="todo-app">
    <h2>Meine Todos</h2>

    <!-- Eingabeformular -->
    <div class="todo-form">
      <input v-model="newTodo.title" placeholder="Titel*" required>
      <input v-model="newTodo.description" placeholder="Beschreibung">
      <button @click="addTodo">Hinzufügen</button>
    </div>

    <!-- Steuerungs-Buttons -->
    <div class="controls">
      <button @click="loadTodos" class="show-btn" :disabled="isLoading">
        {{ isLoading ? 'Lädt...' : showTodos ? 'Liste verbergen' : 'Zeige Todos' }}
      </button>
      <button
        @click="deleteAllTodos"
        class="delete-all-btn"
        :disabled="todos.length === 0 || !showTodos"
      >
        🗑️ Alle löschen
      </button>
    </div>

    <!-- Todo-Liste -->
    <div v-if="showTodos && todos.length > 0" class="todo-list">
      <div v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.description }}</p>
        </div>
        <div class="todo-status">
          <button @click="toggleTodo(todo.id)">
            {{ todo.completed ? '✅' : '❌' }}</button>
        </div>
      </div>
    </div>

    <div v-else-if="showTodos" class="empty-state">
      Keine Todos vorhanden
    </div>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-form input {
  flex: 1;
  padding: 8px;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.show-btn {
  background: #42b983;
  color: white;
}

.delete-all-btn {
  background: #ff4757;
  color: white;
}

button:disabled {
  background: #ddd;
  cursor: not-allowed;
}

.todo-list {
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.todo-content {
  flex: 1;
}

.todo-status {
  margin-left: 15px;
}

.empty-state {
  text-align: center;
  color: #888;
  padding: 20px;
}
</style>
