<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick, ref } from 'vue'

const sections = [
  { id: 'about', label: 'О себе' },
  { id: 'stack', label: 'Стек' },
  { id: 'projects', label: 'Проекты' },
  { id: 'experience', label: 'Опыт' },
  { id: 'education', label: 'Образование' },
  { id: 'contacts', label: 'Контакты' },
]

const active = ref<string>('about')
const scrolled = ref(false)
const open = ref(false)

const HEADER_OFFSET = 96
let ticking = false

const recompute = () => {
  scrolled.value = window.scrollY > 12

  const docH = document.documentElement.scrollHeight
  const viewH = window.innerHeight
  const hasOverflow = docH > viewH + 4
  const atBottom = hasOverflow && viewH + window.scrollY >= docH - 4

  const first = sections[0]!
  const last = sections[sections.length - 1]!

  if (atBottom) {
    active.value = last.id
    return
  }

  const probe = HEADER_OFFSET + 8
  let current = ''
  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top <= probe) current = s.id
    else break
  }
  active.value = current || first.id
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    recompute()
    ticking = false
  })
}

onMounted(async () => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  await nextTick()
  recompute()
  requestAnimationFrame(recompute)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

const goTo = (id: string) => {
  open.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <header class="hdr" :class="{ 'hdr--scrolled': scrolled }">
    <div class="container hdr__row">
      <a class="hdr__brand" href="#about" @click.prevent="goTo('about')">
        <span class="hdr__brand-dot" />
        <span class="hdr__brand-text">
          <strong>Вадим Терехов</strong>
          <span>Frontend / Vue · JS(TS)</span>
        </span>
      </a>

      <button class="hdr__burger" :aria-expanded="open" aria-label="Меню" @click="open = !open">
        <span /><span /><span />
      </button>

      <nav class="hdr__nav" :class="{ 'hdr__nav--open': open }" aria-label="Разделы">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          :aria-current="active === s.id ? 'page' : undefined"
          :class="['hdr__link', { 'hdr__link--active': active === s.id }]"
          @click.prevent="goTo(s.id)"
        >
          {{ s.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(11, 16, 32, 0.55);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;
}

.hdr--scrolled {
  background: rgba(11, 16, 32, 0.82);
  border-bottom-color: var(--line);
}

.hdr__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  height: 64px;
}

.hdr__brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.hdr__brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-grad);
  box-shadow: 0 0 0 4px rgba(124, 131, 255, 0.18);
}

.hdr__brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.hdr__brand-text strong {
  font-size: 0.98rem;
  letter-spacing: -0.01em;
}

.hdr__brand-text span {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-mute);
}

.hdr__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.hdr__link {
  position: relative;
  padding: 8px 12px;
  font-size: 0.92rem;
  color: var(--text-mute);
  border-radius: 8px;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.hdr__link:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.hdr__link--active {
  color: var(--text);
}

.hdr__link--active::after {
  content: '';
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent-grad);
}

.hdr__burger {
  display: none;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
}

.hdr__burger span {
  width: 18px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

@media (max-width: 840px) {
  .hdr__burger {
    display: flex;
  }

  .hdr__nav {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    background: rgba(11, 16, 32, 0.96);
    border-bottom: 1px solid var(--line);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .hdr__nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .hdr__link {
    padding: 12px;
    font-size: 1rem;
  }
}
</style>
