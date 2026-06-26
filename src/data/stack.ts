export type StackGroup = {
  title: string
  caption: string
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    title: 'Frontend Core',
    caption: 'Языки и базовые технологии',
    items: ['TypeScript', 'JavaScript (ES2024)', 'HTML5', 'CSS3 / SCSS', 'BEM'],
  },
  {
    title: 'Vue Ecosystem',
    caption: 'Основной стек',
    items: ['Vue 3 (Composition API)', 'Pinia', 'Vue Router', 'Vuetify', 'Nuxt (изучаю)'],
  },
  {
    title: 'Build & Tooling',
    caption: 'Сборка, инфраструктура, релизы',
    items: ['Vite', 'Webpack', 'Gulp', 'Docker / Docker Compose', 'Git / GitHub Actions'],
  },
  {
    title: 'Performance & Quality',
    caption: 'Производительность и качество',
    items: [
      'Core Web Vitals (LCP, CLS, FCP, INP)',
      'Lighthouse',
      'Bundle analysis',
      'A11y (WCAG basics)',
      'Code review',
    ],
  },
  {
    title: 'Backend (по необходимости)',
    caption: 'Что могу прикрутить сам',
    items: ['Node.js', 'Express', 'REST API', 'MySQL', 'Sequelize ORM'],
  },
  {
    title: 'Layout & Design',
    caption: 'От макета до пикселя',
    items: ['Figma', 'Адаптив (mobile-first)', 'CSS Grid / Flexbox', 'Анимации, transitions'],
  },
]
