export const COURSES = [
  {
    slug: 'healthcare-assistant-caregiver',
    title: 'Healthcare Assistant (Caregiver)',
    category: 'Healthcare',
    accent: 'primary',
    duration: '4 Months',
    entryGrade: 'Any Grade',
    price: 'Ksh 43,000',
    image: 'https://picsum.photos/seed/dti-course-healthcare/700/500',
    description:
      'Train to provide compassionate, professional care to patients and the elderly, covering basic clinical skills, hygiene, first aid, and patient support techniques used in homes, clinics, and care facilities.',
  },
  {
    slug: 'autism-awareness',
    title: 'Autism Awareness',
    category: 'Healthcare',
    accent: 'red',
    duration: '6 Sessions (6 Weeks)',
    entryGrade: 'Any Grade',
    price: 'Ksh 10,000',
    image: 'https://picsum.photos/seed/dti-course-autism/700/500',
    description:
      'A short, practical course covering how to recognize, understand, and support individuals with autism spectrum conditions at home, school, and in the community.',
  },
  {
    slug: 'computer-packages',
    title: 'Computer Packages',
    category: 'Technology',
    accent: 'primary',
    duration: '1 Month',
    entryGrade: 'ID Only',
    price: 'Ksh 4,000',
    image: 'https://picsum.photos/seed/dti-course-computer/700/500',
    description:
      'Build core digital skills including Microsoft Word, Excel, PowerPoint, email, and internet basics — essential for office work and everyday digital literacy.',
  },
  {
    slug: 'nails-technology',
    title: 'Nails Technology',
    category: 'Beauty',
    accent: 'red',
    duration: '3 Months',
    entryGrade: 'ID Only',
    price: 'Ksh 9,000',
    image: 'https://picsum.photos/seed/dti-course-nails/700/500',
    description:
      'Learn professional manicure, pedicure, gel, and acrylic nail application techniques, plus hygiene and client care standards for a career in the beauty industry.',
  },
  {
    slug: 'makeup-artistry',
    title: 'Make Up Artistry',
    category: 'Beauty',
    accent: 'primary',
    duration: '6 Weeks',
    entryGrade: 'ID Only',
    price: 'Ksh 11,000',
    image: 'https://picsum.photos/seed/dti-course-makeup/700/500',
    description:
      'Master makeup application for everyday, bridal, and special-occasion looks, including skin prep, color theory, and working with different skin tones.',
  },
  {
    slug: 'barbering',
    title: 'Barbering',
    category: 'Beauty',
    accent: 'red',
    duration: '3 Months',
    entryGrade: 'ID Only',
    price: 'Ksh 7,000',
    image: 'https://picsum.photos/seed/dti-course-barbering/700/500',
    description:
      'Hands-on training in modern cutting, fading, shaving, and grooming techniques to prepare you for work in a barbershop or to start your own.',
  },
  {
    slug: 'hairdressing',
    title: 'Hairdressing',
    category: 'Beauty',
    accent: 'primary',
    duration: '6 Months',
    entryGrade: 'ID Only',
    price: 'Ksh 25,000',
    image: 'https://picsum.photos/seed/dti-course-hairdressing/700/500',
    description:
      'A comprehensive program covering cutting, styling, coloring, relaxing, and braiding, preparing graduates for salon employment or self-employment.',
  },
  {
    slug: 'cosmetology',
    title: 'Cosmetology (Nails, Barbering, Make Up, Hair)',
    category: 'Beauty',
    accent: 'red',
    duration: '9 Months',
    entryGrade: 'ID Only',
    price: 'Ksh 42,000',
    image: 'https://picsum.photos/seed/dti-course-cosmetology/700/500',
    description:
      'Our most comprehensive beauty program, combining nails, barbering, makeup, and hairdressing into one qualification for graduates seeking an all-round beauty career.',
  },
  {
    slug: 'massage-therapy',
    title: 'Massage Therapy',
    category: 'Wellness',
    accent: 'primary',
    duration: '6 Sessions',
    entryGrade: 'ID Only',
    price: 'Ksh 11,000',
    image: 'https://picsum.photos/seed/dti-course-massage/700/500',
    description:
      'Learn therapeutic massage techniques for relaxation and wellness, including body mechanics, client assessment, and professional spa practice.',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    category: 'Technology',
    accent: 'red',
    duration: '3 Months',
    entryGrade: 'Comp Cert',
    price: 'Ksh 15,000',
    image: 'https://picsum.photos/seed/dti-course-graphic/700/500',
    description:
      'Get hands-on with industry-standard design tools to create logos, posters, and digital graphics — a practical skill for freelance or agency work.',
  },
]

export function getCourseBySlug(slug) {
  return COURSES.find((course) => course.slug === slug)
}
