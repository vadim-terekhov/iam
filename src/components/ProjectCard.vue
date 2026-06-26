<script setup lang="ts">
import type { Project } from '../data/projects'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="proj">
    <a
      class="proj__media"
      :href="project.url"
      target="_blank"
      rel="noopener"
      :aria-label="`Открыть ${project.brand} в новой вкладке`"
    >
      <span class="proj__num">0{{ index + 1 }}</span>
      <img
        :src="project.image"
        :alt="`Превью сайта ${project.brand}`"
        width="1024"
        height="640"
        loading="lazy"
        decoding="async"
      />
      <span class="proj__overlay" :style="{ background: project.accent }" />
    </a>

    <div class="proj__body">
      <div class="proj__head">
        <div>
          <h3 class="proj__brand">{{ project.brand }}</h3>
          <p class="proj__title">{{ project.title }}</p>
        </div>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="proj__link"
          :aria-label="`Открыть ${project.brand}`"
          >↗</a
        >
      </div>

      <p class="proj__meta">
        <span class="chip chip--accent">{{ project.role }}</span>
        <span class="chip">{{ project.period }}</span>
      </p>

      <p class="proj__summary">{{ project.summary }}</p>

      <ul class="proj__highlights">
        <li v-for="h in project.highlights" :key="h">{{ h }}</li>
      </ul>

      <div class="proj__stack">
        <span v-for="t in project.stack" :key="t" class="chip">{{ t }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.proj {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  background: linear-gradient(180deg, var(--bg-2), var(--bg-1));
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}

.proj:hover {
  border-color: var(--line-strong);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.proj:nth-child(even) {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
}

.proj:nth-child(even) .proj__media {
  order: 2;
}

.proj__media {
  position: relative;
  display: block;
  overflow: hidden;
  background: var(--bg-3);
}

.proj__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  transition: transform 0.6s ease;
}

.proj__media:hover img {
  transform: scale(1.03);
}

.proj__overlay {
  position: absolute;
  inset: 0;
  mix-blend-mode: multiply;
  opacity: 0.18;
  pointer-events: none;
}

.proj__num {
  position: absolute;
  top: 14px;
  left: 16px;
  z-index: 2;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(7, 9, 15, 0.7);
  border: 1px solid var(--line-strong);
  color: var(--text);
  backdrop-filter: blur(8px);
}

.proj__body {
  padding: 28px clamp(20px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.proj__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.proj__brand {
  font-size: 1.45rem;
  margin-bottom: 2px;
}

.proj__title {
  color: var(--text-mute);
  font-size: 0.94rem;
}

.proj__link {
  font-size: 1.4rem;
  width: 40px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.proj__link:hover {
  background: var(--accent-soft);
  border-color: var(--accent);
  transform: translate(2px, -2px);
}

.proj__meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.proj__summary {
  color: var(--text);
  font-size: 0.98rem;
}

.proj__highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.proj__highlights li {
  position: relative;
  padding-left: 22px;
  color: var(--text-mute);
  font-size: 0.92rem;
}

.proj__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 12px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent-grad);
}

.proj__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 4px;
}

@media (max-width: 820px) {
  .proj,
  .proj:nth-child(even) {
    grid-template-columns: 1fr;
  }

  .proj:nth-child(even) .proj__media {
    order: 0;
  }

  .proj__media {
    aspect-ratio: 16 / 10;
  }
}
</style>
