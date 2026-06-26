<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <a class="skip-link" href="#main">Перейти к содержимому</a>
  <AppHeader />
  <main id="main">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style>
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  background: var(--accent);
  color: #0b1020;
  padding: 10px 16px;
  border-radius: 0 0 12px 0;
  font-weight: 600;
  z-index: 1000;
}

.skip-link:focus {
  left: 0;
}
</style>
