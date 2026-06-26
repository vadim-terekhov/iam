<script setup lang="ts">
import { stackGroups } from '../../data/stack'

const groupIcons: Record<string, string> = {
  'Frontend Core': 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6z',
  'Vue Ecosystem': 'M2 4h4l6 10 6-10h4L12 22z',
  'Build & Tooling':
    'M22.7 19 13.6 9.9c.9-2.3.4-5-1.5-6.9-2-2-5-2.5-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5L19 22.6c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1 0-1.3z',
  'Performance & Quality':
    'M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8zm0 2v6l4.2 4.2 1.4-1.4L13 9.6V4z',
  'Backend (по необходимости)':
    'M4 4h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm3 3v0M4 12h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm3 3v0',
  'Layout & Design':
    'M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1.1.9-2 2-2h2.3a4.2 4.2 0 0 0 4.2-4.2C21.5 6 17.2 2 12 2zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
}
</script>

<template>
  <section id="stack" class="section">
    <div class="container">
      <span class="section-eyebrow">Стек</span>
      <h2 class="section-title">Чем работаю каждый день</h2>
      <p class="section-lead">
        Основной стек — Vue&nbsp;3 + JavaScript(TS) + Vite + Pinia. По&nbsp;необходимости подключаю
        Node.js на&nbsp;бэке. Знаю, как выйти за&nbsp;рамки шаблонной задачи.
      </p>

      <div class="stack__grid">
        <article v-for="g in stackGroups" :key="g.title" class="stack__group card">
          <header>
            <span class="stack__ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path :d="groupIcons[g.title]" fill="currentColor" />
              </svg>
            </span>
            <div>
              <h3>{{ g.title }}</h3>
              <p>{{ g.caption }}</p>
            </div>
          </header>
          <ul>
            <li v-for="item in g.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.stack__group header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.stack__ic {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--accent-soft);
  border: 1px solid rgba(124, 131, 255, 0.28);
  color: var(--accent);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.stack__group h3 {
  font-size: 1.05rem;
  margin-bottom: 2px;
}

.stack__group header p {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-mute);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stack__group ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
