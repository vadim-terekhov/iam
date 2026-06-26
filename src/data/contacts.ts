export type ContactLink = {
  label: string
  value: string
  href: string
  icon: 'mail' | 'telegram' | 'github'
}

export const contacts: ContactLink[] = [
  {
    label: 'Telegram',
    value: '@vados_555',
    href: 'https://t.me/vados_555',
    icon: 'telegram',
  },
  {
    label: 'E-mail',
    value: 'vadim_ftf_555@mail.ru',
    href: 'mailto:vadim_ftf_555@mail.ru',
    icon: 'mail',
  },
  {
    label: 'GitHub',
    value: 'vadim-terekhov',
    href: 'https://github.com/vadim-terekhov',
    icon: 'github',
  },
]
