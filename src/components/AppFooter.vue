<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <div class="container ftr__row">
      <p>© {{ year }} Вадим Терехов · Frontend Engineer</p>
      <p class="ftr__hint">
        Сайт собран на Vue 3 + TS + Vite ·
        <a href="https://github.com/vadim-terekhov/iam" target="_blank" rel="noopener"
          >исходники на GitHub</a
        >
      </p>
    </div>
  </footer>
</template>

<style scoped>
.ftr {
  border-top: 1px solid var(--line);
  padding-block: 32px;
  margin-top: 80px;
  color: var(--text-mute);
  font-size: 0.86rem;
}

.ftr__row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.ftr__hint a {
  color: var(--accent-2);
}

.ftr__hint a:hover {
  text-decoration: underline;
}
</style>
