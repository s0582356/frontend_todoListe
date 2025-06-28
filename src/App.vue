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
header {
  background-color: #282828;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

nav a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem;
  transition: color 0.3s;
}

nav a:hover {
  background-color: transparent;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 600px) {
  nav {
    justify-content: center;
  }
}
</style>


