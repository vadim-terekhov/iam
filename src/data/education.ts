export type EducationItem = {
  institution: string
  faculty?: string
  speciality?: string
  degree: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: 'Алтайский Государственный Университет (АлтГУ)',
    faculty: 'Физико-технический',
    speciality: 'Вычислительные машины, комплексы, системы и сети',
    degree: 'Инженер',
    period: '2005 — 2010',
  },
  {
    institution: 'АлтГТУ им. И. И. Ползунова',
    faculty: 'Информационные технологии',
    speciality: 'Вычислительные системы и информационная безопасность',
    degree: 'Аспирантура',
    period: '2010 — 2015',
  },
  {
    institution: 'Route 256 — школа Ozon',
    degree: 'Курс Frontend разработки',
    period: '2021',
  },
]
