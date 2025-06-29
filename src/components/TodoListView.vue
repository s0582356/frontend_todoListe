<script setup lang="ts">
import { computed, ref } from 'vue'

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
const filter = ref<'Alle' | 'Erledigt' | 'Offen'>('Alle');
const sortBy = ref<'Status' | 'Alphabetisch'>('Status');
const search = ref('');
const isDarkMode = ref(true);

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

const deleteOneTodo = async (id: number) => {
  if(!confirm('Dieses Todo wirklich löschen?')) return

  try {
    const response = await fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' });

    if (!response.ok) throw new Error();
    todos.value = todos.value.filter(todo => todo.id !== id);
  } catch (error) {
    console.error('Fehler beim Löschen:', error);
    alert('Todo konnte nicht gelöscht werden!');
  }
}

const filteredAndSortedTodos = computed(() => {
  let filtered = todos.value;

  if (filter.value === 'Erledigt') {
    filtered = filtered.filter(t => t.completed);
  } else if (filter.value === 'Offen') {
    filtered = filtered.filter(t => !t.completed);
  }

  if (search.value.trim()) {
    const term = search.value.toLowerCase();
    filtered = filtered.filter(t => t.title.toLowerCase().includes(term) || t.description.toLowerCase().includes(term));
  }

  if (sortBy.value === 'Alphabetisch') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy.value === 'Status') {
    filtered = [...filtered].sort((a, b) => Number(a.completed) - Number(b.completed));
  }
  return filtered;
});
</script>

<template>
  <div :class="['todo-app', isDarkMode ? 'dark' : 'light']">
    <button @click="isDarkMode = !isDarkMode">
      {{ isDarkMode ? '🌞 Light' : '🌙 Dark' }}
    </button>

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

    <div class="filters">
      <input v-model="search" type="text" placeholder="suchen..." />

      <select v-model= "filter">
        <option value="Alle">Alle</option>
        <option value="Erledigt">Erledigt</option>
        <option value="Offen">Offen</option>
      </select>

      <select v-model= "sortBy">
        <option value="Status">Status</option>
        <option value="Alphabetisch">Alphabetisch</option>
      </select>
    </div>

    <!-- Todo-Liste -->
    <div v-if="showTodos && todos.length > 0" class="todo-list">
      <div v-for="todo in filteredAndSortedTodos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.description }}</p>
        </div>
        <div class="todo-status">
          <button @click="toggleTodo(todo.id)">
            {{ todo.completed ? '✅' : '❌' }}</button>
          <button @click="deleteOneTodo(todo.id)" class="delete-one-btn">🗑️</button>
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
  background: #2c3e50;
  color: white;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-form input {
  flex: 1;
  padding: 8px;
  background-color: #486683;     /* dunkler, angenehmer Farbton */
  color: #e6e6e6;                   /* heller Text */
  border: 1px solid rgba(68, 68, 68, 0.99);
  border-radius: 6px;
  transition: background-color 0.2s, border-color 0.2s;
}

.todo-form input::placeholder,
.filters input::placeholder {
  color: #cccccc; /* weißlich-blassgrau */
  opacity: 1;
}

.filters input:focus,
.filters select:focus {
  outline: none;
  border-color: #00ffd5;
  background-color: #5a7997;
  color: #f0f0f0;
}


.todo-form input:focus {
  outline: none;
  border-color: #00ffd5;         /* leuchtendes Türkis beim Fokus */
  background-color: #3d566e;
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
  background-color: #ff6b6b;   /* Sichtbare Grundfarbe */
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  padding: 8px 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}


.delete-all-btn:hover {
  background-color: #ff8787;   /* etwas heller beim Hover */
  transform: scale(1.05);
}


.todo-form button {
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.todo-form button:hover {
  background-color: #00ffd5;
  transform: scale(1.05);
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
.delete-one-btn {
  margin-left: 10px;
  background: #ff6b6b;
  color: white;
}
.filters {
  display: flex;
  gap: 5px;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
}
.filters input,
.filters select {
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #486683;
  color: #e6e6e6;
  font-size: 14px;
  transition: background-color 0.2s, border-color 0.2s;
}

</style>
// dieser veranlasst Änderung auch außerhalb des jeweiligen div Containers
<style>

  body {
    background-color: #1f2e47;
    margin: 0;
    padding: 0;
  }


</style>

