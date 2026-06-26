<script setup lang="ts">
type IconKey = 'bolt' | 'wrench' | 'shield' | 'chat'

const icons: Record<IconKey, string> = {
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
  wrench:
    'M14.7 6.3a4 4 0 0 1 5 5l-2.7-1-1.5 1.5 1 2.7a4 4 0 0 1-5-5l1 .5L9.2 14 4 19.2A1.5 1.5 0 1 0 6.1 21.3l5.2-5.2 3.7-3.7-.5-1z',
  shield:
    'M12 2 4 5v7c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V5zm-1.2 13.5-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4z',
  chat:
    'M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z',
}

const principles: { title: string; text: string; icon: IconKey }[] = [
  {
    title: 'Производительность',
    text: 'Lighthouse, Core Web Vitals, bundle analysis — измеримые улучшения, а не «кажется быстрее».',
    icon: 'bolt',
  },
  {
    title: 'Поддерживаемость',
    text: 'Чистый, читаемый код. Минимум магии, осмысленные имена, тесты там, где они окупаются.',
    icon: 'wrench',
  },
  {
    title: 'Бережно к legacy',
    text: 'Постраничные миграции без даунтайма. Бизнес не должен платить простоем за рефакторинг.',
    icon: 'shield',
  },
  {
    title: 'Партнёрство с продуктом',
    text: 'Спрашиваю «зачем», читаю аналитику, предлагаю простые решения вместо красивых.',
    icon: 'chat',
  },
]
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <span class="section-eyebrow">О себе</span>
      <h2 class="section-title">Инженер, который любит, когда сайт реально быстрый</h2>
      <p class="section-lead">
        Дипломированный инженер, общий опыт в&nbsp;программировании 8+&nbsp;лет, из&nbsp;них
        4+&nbsp;года в&nbsp;коммерческой e-commerce разработке. Фокус на&nbsp;производительности,
        чистоте и&nbsp;поддерживаемости кодовой базы. Открыт к&nbsp;нестандартным задачам с&nbsp;высокой
        нагрузкой и&nbsp;строгими требованиями к&nbsp;качеству.
      </p>

      <div class="about__grid">
        <article v-for="p in principles" :key="p.title" class="about__item card">
          <span class="about__ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path :d="icons[p.icon]" fill="currentColor" />
            </svg>
          </span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.about__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about__ic {
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--accent-soft);
  border: 1px solid rgba(124, 131, 255, 0.28);
  color: var(--accent);
  margin-bottom: 4px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.about__item h3 {
  font-size: 1.05rem;
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.about__item p {
  color: var(--text-mute);
  font-size: 0.94rem;
}
</style>
