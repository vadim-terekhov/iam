<script setup lang="ts">
import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <span class="section-eyebrow">Проекты</span>
      <h2 class="section-title">5 e-commerce витрин в проде</h2>
      <p class="section-lead">
        Реальные магазины, в&nbsp;которых я&nbsp;писал код. Кликабельны — можно открыть и&nbsp;посмотреть,
        как это работает сейчас.
      </p>

      <div class="projects__list">
        <ProjectCard
          v-for="(p, i) in projects"
          :key="p.slug"
          :project="p"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
