# Vadim Terekhov — personal CV site

Резюме-сайт фронтенд-инженера. Single-page, тёмная тема, скролл-навигация
по якорям, портфолио проектов с реальными превью.

**Live:** https://vadim-terekhov.github.io/myself/

## Стек

- Vue 3 (Composition API, `<script setup>`)
- JavaScript(TS)
- Vite
- Pinia
- Vue Router 4 (hash history — для деплоя под `/myself/`)

Никаких UI-китов, иконочных пакетов и тяжёлых зависимостей. Дизайн-токены
и компоненты — ручные. Иконки — inline SVG.

## Что внутри

```
src/
├── App.vue
├── main.ts
├── router/index.ts
├── styles/
│   ├── tokens.css      ← дизайн-токены
│   └── global.css      ← reset + утилиты
├── views/
│   └── HomePage.vue    ← композиция секций
├── components/
│   ├── AppHeader.vue   ← scrollspy nav
│   ├── AppFooter.vue
│   ├── ProjectCard.vue
│   └── sections/       ← Hero/About/Stack/Projects/Experience/Education/Contact
└── data/               ← контент отдельно от вёрстки
    ├── projects.ts
    ├── stack.ts
    ├── experience.ts
    ├── education.ts
    └── contacts.ts
```

## Локальный запуск

```sh
npm install
npm run dev          # vite dev server
npm run build        # type-check + продакшен билд
npm run preview      # посмотреть собранный билд локально
npm run deploy       # vite build && gh-pages -d dist
```

## Производительность

| Метрика         | До               | После      |
| --------------- | ---------------- | ---------- |
| CSS (gzip)      | 39 KB            | 3.9 KB     |
| JS (gzip)       | 38 KB            | 43 KB      |
| Dep. count      | 4 prod           | 3 prod     |
| Иконочный пакет | @mdi/font (3 МБ) | inline SVG |
| `<html lang>`   | пустой           | `ru`       |
| OG/Twitter мета | минимум          | полный     |
