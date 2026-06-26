<script setup lang="ts">
import avatar from '../../assets/my.jpg'

const stats = [
  { value: '4+', label: 'года в коммерческой\nразработке' },
  { value: '5', label: 'крупных e-com\nпроектов в проде' },
  { value: 'Vue 3', label: 'JavaScript(TS), Vite, Pinia — основной стек' },
]
</script>

<template>
  <section id="hero" class="hero section">
    <div class="container hero__grid">
      <div class="hero__intro">
        <span class="section-eyebrow">Frontend Engineer · открыт к офферам</span>
        <h1 class="hero__title">
          Делаю быстрые <span class="hero__accent">e-commerce</span>
          интерфейсы на Vue&nbsp;3
        </h1>
        <p class="hero__lead">
          4+ года в коммерческой разработке. Lacoste, Modi, MebelVia, Европос, Ralf&nbsp;Ringer —
          переезжал витрины на современный стек, чинил Core&nbsp;Web&nbsp;Vitals, забирал legacy
          в&nbsp;Vue без даунтайма.
        </p>

        <div class="hero__cta">
          <a class="btn btn--primary" href="#projects"> Посмотреть проекты </a>
          <a class="btn" href="./docs/Terekhov2026.pdf" target="_blank" rel="noopener">
            Скачать CV (PDF)
          </a>
          <a class="btn" href="#contacts">Написать</a>
        </div>

        <dl class="hero__stats">
          <div v-for="s in stats" :key="s.value" class="hero__stat">
            <dt>{{ s.value }}</dt>
            <dd>{{ s.label }}</dd>
          </div>
        </dl>
      </div>

      <aside class="hero__card">
        <div class="hero__avatar">
          <img
            :src="avatar"
            alt="Портрет Вадима Терехова"
            width="280"
            height="280"
            fetchpriority="high"
          />
          <span class="hero__pulse" />
        </div>
        <div class="hero__meta">
          <p class="hero__meta-name">Вадим Терехов</p>
          <p class="hero__meta-role">Senior Frontend Engineer</p>
          <ul class="hero__bullets">
            <li><span /> Барнаул · готов к remote / гибриду</li>
            <li><span /> RU native · English — Intermediate (читаю/пишу)</li>
            <li><span /> Грейд: Middle+ / Senior FE</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(48px, 6vw, 80px);
  padding-bottom: clamp(40px, 5vw, 64px);
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
}

.hero__title {
  font-size: clamp(2.1rem, 5.2vw, 3.4rem);
  margin: 12px 0 18px;
}

.hero__accent {
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__lead {
  font-size: 1.05rem;
  color: var(--text-mute);
  max-width: 56ch;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin: 40px 0 0;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, var(--bg-2), rgba(17, 23, 43, 0.4));
}

.hero__stat dt {
  font-family: var(--font-mono);
  font-size: 1.6rem;
  font-weight: 700;
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__stat dd {
  margin: 4px 0 0;
  color: var(--text-mute);
  font-size: 0.84rem;
  white-space: pre-line;
  line-height: 1.35;
}

.hero__card {
  position: relative;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(140% 90% at 0% 0%, rgba(124, 131, 255, 0.18), transparent 60%),
    linear-gradient(180deg, var(--bg-2), var(--bg-1));
  box-shadow: var(--shadow);
}

.hero__avatar {
  position: relative;
  width: clamp(180px, 22vw, 240px);
  aspect-ratio: 1;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  margin-bottom: 22px;
}

.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__pulse {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55);
  animation: pulse 1.8s ease-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55);
  }
  100% {
    box-shadow: 0 0 0 14px rgba(52, 211, 153, 0);
  }
}

.hero__meta-name {
  font-size: 1.15rem;
  font-weight: 700;
}

.hero__meta-role {
  color: var(--accent-2);
  font-family: var(--font-mono);
  font-size: 0.84rem;
  margin: 2px 0 16px;
}

.hero__bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-mute);
}

.hero__bullets li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero__bullets li span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-2);
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__card {
    order: -1;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 18px;
    align-items: center;
  }

  .hero__avatar {
    margin-bottom: 0;
    width: 140px;
  }

  .hero__stats {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
