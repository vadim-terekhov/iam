<script setup lang="ts">
import { experience } from '../../data/experience'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <span class="section-eyebrow">Опыт</span>
      <h2 class="section-title">Карьерная траектория</h2>
      <p class="section-lead">
        От&nbsp;сайтов на&nbsp;WordPress под&nbsp;ключ — к&nbsp;роли Senior&nbsp;FE на&nbsp;флагманской
        витрине бренда с&nbsp;30-летней историей.
      </p>

      <ol class="tl">
        <li v-for="job in experience" :key="job.company" class="tl__item">
          <div class="tl__dot" />
          <div class="tl__card card">
            <header class="tl__head">
              <div>
                <h3>{{ job.role }}</h3>
                <p class="tl__company">{{ job.company }}</p>
              </div>
              <span class="chip">{{ job.period }}</span>
            </header>
            <p class="tl__desc">{{ job.description }}</p>
            <ul class="tl__bullets">
              <li v-for="b in job.bullets" :key="b">{{ b }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.tl {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.tl::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(180deg, var(--accent), transparent);
  border-radius: 2px;
}

.tl__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 18px;
  align-items: flex-start;
  margin-bottom: 22px;
}

.tl__dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-3);
  border: 2px solid var(--accent);
  box-shadow: 0 0 0 6px rgba(124, 131, 255, 0.12);
  margin-top: 18px;
}

.tl__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.tl__head h3 {
  font-size: 1.1rem;
  margin-bottom: 2px;
}

.tl__company {
  color: var(--accent-2);
  font-family: var(--font-mono);
  font-size: 0.84rem;
}

.tl__desc {
  color: var(--text-mute);
  font-size: 0.94rem;
  margin-bottom: 12px;
}

.tl__bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tl__bullets li {
  position: relative;
  padding-left: 18px;
  color: var(--text);
  font-size: 0.92rem;
}

.tl__bullets li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-2);
  font-family: var(--font-mono);
}
</style>
