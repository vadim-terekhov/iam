<script setup lang="ts">
import { education } from '../../data/education'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <span class="section-eyebrow">Образование</span>
      <h2 class="section-title">Профильное инженерное + ИБ + Frontend-курс Ozon</h2>
      <p class="section-lead">
        Сильная база по&nbsp;вычислительным системам и&nbsp;информационной безопасности.
        Регулярно дообучаюсь под&nbsp;задачи.
      </p>

      <div class="edu__grid">
        <article v-for="e in education" :key="e.institution + e.period" class="edu__card card">
          <span class="chip">{{ e.period }}</span>
          <h3>{{ e.institution }}</h3>
          <p v-if="e.faculty" class="edu__line">
            <span>Факультет:</span> {{ e.faculty }}
          </p>
          <p v-if="e.speciality" class="edu__line">
            <span>Специальность:</span> {{ e.speciality }}
          </p>
          <p class="edu__degree">{{ e.degree }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.edu__card h3 {
  font-size: 1.05rem;
  margin: 14px 0 12px;
}

.edu__line {
  font-size: 0.92rem;
  color: var(--text-mute);
  margin-bottom: 4px;
}

.edu__line span {
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-right: 6px;
}

.edu__degree {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed var(--line);
  font-weight: 600;
  color: var(--accent-2);
}
</style>
