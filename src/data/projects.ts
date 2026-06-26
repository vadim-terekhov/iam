export type Project = {
  slug: string
  brand: string
  title: string
  role: string
  period: string
  url: string
  image: string
  summary: string
  highlights: string[]
  stack: string[]
  accent: string
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    slug: 'ralf-ringer',
    brand: 'Ralf Ringer',
    title: 'Флагманский интернет-магазин обуви',
    role: 'Senior Frontend Engineer',
    period: '2024 — настоящее время',
    url: 'https://ralf.ru',
    image: `${base}projects/ralf.webp`,
    summary:
      'Переезд legacy-витрины на новый дизайн без даунтайма. Архитектура фронта, рефакторинг, метрики Core Web Vitals.',
    highlights: [
      'Проектирование архитектуры фронта и плана миграции с legacy (vanilla JS + jQuery)',
      'Перевод сайта на новый дизайн постранично — выпуск без отката витрины',
      'Улучшение Core Web Vitals: LCP, CLS, FCP — стабильно в «зелёной» зоне Lighthouse',
      'Менторство команды по Vue, code review, технические интервью',
    ],
    stack: ['Vue 3', 'JavaScript(TS)', 'Vite', 'Pinia', 'SCSS', 'Web Vitals'],
    accent: '#d97706',
  },
  {
    slug: 'europos',
    brand: 'Европос Групп',
    title: 'B2B-магазин POS-материалов',
    role: 'Frontend Engineer (lead на FE)',
    period: '2023 — 2024',
    url: 'https://www.europos.ru',
    image: `${base}projects/europos.webp`,
    summary:
      'Проектирование архитектуры фронта с нуля, настройка сборки и разработка интерфейса B2B-каталога с большим деревом категорий.',
    highlights: [
      'Архитектура фронтенда и настройка сборки проекта',
      'Каталог с фильтрами, личным кабинетом и историей заказов B2B-клиента',
      'Адаптивная вёрстка под десктоп/планшет/мобильный',
    ],
    stack: ['Vue 3', 'JavaScript(TS)', 'Vite', 'BEM', 'SCSS'],
    accent: '#2563eb',
  },
  {
    slug: 'lacoste',
    brand: 'Lacoste',
    title: 'Поэтапная миграция витрины на Vue',
    role: 'Frontend Engineer',
    period: '2022 — 2023',
    url: 'https://lacoste.ru',
    image: `${base}projects/lacoste.webp`,
    summary:
      'Доработка функциональности в высоконагруженном e-com, постраничная миграция с jQuery на Vue без остановки продаж.',
    highlights: [
      'Постраничный перевод фронта с vanilla JS + jQuery на Vue',
      'Карточки товара, корзина, фильтры каталога',
      'Совместимость со старыми разделами на время переходного периода',
    ],
    stack: ['Vue 2/3', 'JavaScript', 'jQuery (legacy)', 'Webpack'],
    accent: '#00643c',
  },
  {
    slug: 'mebelvia',
    brand: 'MebelVia',
    title: 'Гипермаркет мебели',
    role: 'Frontend Engineer',
    period: '2022 — 2023',
    url: 'https://mebelvia.ru',
    image: `${base}projects/mebelvia.webp`,
    summary:
      'Поддержка и развитие крупной витрины с тысячами SKU. Работа с legacy-кодом, исправление багов, разработка фич.',
    highlights: [
      'Доработка функционала каталога и карточки товара',
      'Стабилизация legacy-кода (vanilla JS + jQuery)',
      'Багфиксы и улучшения UX на проверках в проде',
    ],
    stack: ['JavaScript', 'jQuery', 'Bitrix-фронт', 'SCSS'],
    accent: '#f97316',
  },
  {
    slug: 'modi',
    brand: 'Modi',
    title: 'Розничная сеть товаров для дома',
    role: 'Frontend Engineer',
    period: '2022',
    url: 'https://modi.ru',
    image: `${base}projects/modi.webp`,
    summary:
      'Развитие интерфейса магазина с большим ассортиментом и региональным выбором города/доставки.',
    highlights: [
      'Доработка корзины, чекаута, регионального выбора',
      'Исправление ошибок, ускорение слабых страниц',
      'Работа в команде через GitFlow + code review',
    ],
    stack: ['JavaScript', 'jQuery (legacy)', 'SCSS'],
    accent: '#ec4899',
  },
]
