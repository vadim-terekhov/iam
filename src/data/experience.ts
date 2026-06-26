export type ExperienceItem = {
  company: string
  role: string
  period: string
  description: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Интаро',
    role: 'Frontend Engineer → Senior Frontend',
    period: '2022 — настоящее время',
    description:
      'Разработка и поддержка крупных e-commerce витрин. Работа в продуктовых командах: проектирование архитектуры фронта, миграции с legacy, оптимизация производительности.',
    bullets: [
      'Ralf Ringer — Senior FE: архитектура, перевод на новый дизайн, Core Web Vitals в «зелёной» зоне',
      'Европос Групп — настройка проекта с нуля, B2B-каталог',
      'Lacoste — постраничная миграция с jQuery на Vue без даунтайма',
      'MebelVia, Modi — поддержка legacy, фичи, багфиксы',
    ],
  },
  {
    company: 'Route 256 / Ozon',
    role: 'Студент курса Frontend',
    period: '2021',
    description:
      'Программа подготовки фронтенд-разработчиков Ozon: алгоритмы, React, инструменты, проектная работа.',
    bullets: [
      'Алгоритмы и структуры данных в JS',
      'Принципы построения SPA, паттерны компонентов',
    ],
  },
  {
    company: 'Фриланс',
    role: 'Full-stack веб-разработчик',
    period: '2018 — 2021',
    description:
      'Сайты под ключ для малого бизнеса и проекты для друзей: лендинги, корпоративные сайты, небольшие интернет-магазины.',
    bullets: [
      'WordPress: лендинги и корпоративные сайты под ключ',
      'Laravel: сайт по продаже мёда, агентство недвижимости, логистическая компания, магазин майнингового оборудования',
      'Сам брал требования, верстал, собирал бэк, деплоил',
    ],
  },
]
