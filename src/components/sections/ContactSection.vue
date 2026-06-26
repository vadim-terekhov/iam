<script setup lang="ts">
import { contacts, type ContactLink } from '../../data/contacts'

const icons: Record<ContactLink['icon'], string> = {
  mail: 'M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5zm2.7-.5 6.3 5.1L18.3 6zM19 8.4l-6.3 5a1 1 0 0 1-1.2 0L5 8.4v9.1c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5z',
  telegram:
    'M9.5 15.5 9.3 19c.3 0 .5-.1.7-.3l1.6-1.5 3.3 2.4c.6.3 1 .2 1.2-.6l2.2-10.3c.2-1-.4-1.4-1-1.2L4.5 11.7c-1 .4-1 1 .2 1.3l3.3 1z',
  github:
    'M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.1-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.85-2.35 4.7-4.58 4.94.36.31.67.92.67 1.85v2.74c0 .27.18.59.69.49A10 10 0 0 0 12 2',
}
</script>

<template>
  <section id="contacts" class="section">
    <div class="container">
      <span class="section-eyebrow">Контакты</span>
      <h2 class="section-title">Открыт к&nbsp;офферам</h2>
      <p class="section-lead">
        Барнаул, формат — remote / гибрид / офис. Готов&nbsp;к тестовому и&nbsp;техническому
        интервью. Самый быстрый способ связи — Telegram.
      </p>

      <div class="contact__grid">
        <a
          v-for="c in contacts"
          :key="c.label"
          :href="c.href"
          target="_blank"
          rel="noopener"
          class="contact__card card"
        >
          <span class="contact__ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path :d="icons[c.icon]" fill="currentColor" />
            </svg>
          </span>
          <span class="contact__label">{{ c.label }}</span>
          <span class="contact__value">{{ c.value }}</span>
          <span class="contact__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}

.contact__card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'icon label arrow'
    'icon value arrow';
  gap: 2px 16px;
  align-items: center;
  padding: 20px 22px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact__card:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.contact__ic {
  grid-area: icon;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}

.contact__label {
  grid-area: label;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-mute);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.contact__value {
  grid-area: value;
  font-weight: 600;
  font-size: 1rem;
  word-break: break-word;
  min-width: 0;
}

.contact__arrow {
  grid-area: arrow;
  color: var(--text-dim);
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.contact__card:hover .contact__arrow {
  color: var(--accent-2);
  transform: translate(2px, -2px);
}
</style>
