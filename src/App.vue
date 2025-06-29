<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/todos">Deine Todos</RouterLink>  <!-- Dieser Link wurde für Meilenstein 3 erstellt -->

      </nav>
  </header>

  <main>
  <RouterView />
    </main>

</template>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* =======================
   DARK MODE STYLES
======================= */
.todo-app.dark {
  background: #2c3e50;
  color: white;
}

.todo-app.dark .todo-form input,
.todo-app.dark .filters input,
.todo-app.dark .filters select {
  background-color: #486683;
  color: #e6e6e6;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  transition: background-color 0.2s, border-color 0.2s;
}

.todo-app.dark .todo-form input::placeholder,
.todo-app.dark .filters input::placeholder {
  color: #cccccc;
  opacity: 1;
}

.todo-app.dark .todo-form input:focus,
.todo-app.dark .filters input:focus,
.todo-app.dark .filters select:focus {
  outline: none;
  border-color: #00ffd5;
  background-color: #5a7997;
  color: #f0f0f0;
}

.todo-app.dark .todo-form button {
  background-color: #00b894;
  color: white;
}

.todo-app.dark .todo-form button:hover {
  background-color: #00ffd5;
  transform: scale(1.05);
}

.todo-app.dark .delete-all-btn {
  background-color: #ff69b4;
  color: white;
}

.todo-app.dark .delete-all-btn:hover {
  background-color: #d94f9f;
  transform: scale(1.05);
}

.todo-app.dark .show-btn {
  background: #42b983;
  color: white;
}

/* =======================
   LIGHT MODE STYLES
======================= */
.todo-app.light {
  background: #f9f9f9;
  color: #222222;
}

.todo-app.light .todo-form input,
.todo-app.light .filters input,
.todo-app.light .filters select {
  background-color: #ffffff;
  color: #222;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  transition: background-color 0.2s, border-color 0.2s;
}

.todo-app.light .todo-form input::placeholder,
.todo-app.light .filters input::placeholder {
  color: #888;
  opacity: 1;
}

.todo-app.light .todo-form input:focus,
.todo-app.light .filters input:focus,
.todo-app.light .filters select:focus {
  outline: none;
  border-color: #42b983;
  background-color: #f0f0f0;
  color: #000;
}

.todo-app.light .todo-form button {
  background-color: #26a69a;
  color: white;
}

.todo-app.light .todo-form button:hover {
  background-color: #42e8d8;
  transform: scale(1.05);
}

.todo-app.light .delete-all-btn {
  background-color: #e74c3c;
  color: white;
}

.todo-app.light .delete-all-btn:hover {
  background-color: #ff6b6b;
  transform: scale(1.05);
}

.todo-app.light .show-btn {
  background: #42b983;
  color: white;
}

/* =======================
   GENERISCHE STYLES
======================= */
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-form button,
.delete-all-btn,
.show-btn {
  border: none;
  border-radius: 6px;
  font-weight: 600;
  padding: 8px 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
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
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 5px;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
}


/* =======================
   NAVIGATION STYLES
======================= */
header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: linear-gradient(90deg, #1f2e47 0%, #2c3e50 100%);
  padding: 0.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: #ddd;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 6px;
}

nav a:hover {
  color: #00d4ff;
  background-color: rgba(0, 212, 255, 0.08);
  box-shadow: 0 0 6px rgba(0, 212, 255, 0.3);
  transform: scale(1.05);
}

nav a.router-link-exact-active {
  color: #00ffd5;
  border-bottom: 2px solid #00ffd5;
}

nav a:first-of-type {
  border: 0;
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

.fade-in.delay-1 {
  animation-delay: 0.3s;
}

.fade-in.delay-2 {
  animation-delay: 0.6s;
}

.fade-in.delay-3 {
  animation-delay: 0.9s;
}

.glow {
  text-shadow: 0 0 10px rgba(0, 255, 213, 0.6), 0 0 20px rgba(0, 255, 213, 0.3);
}


</style>



