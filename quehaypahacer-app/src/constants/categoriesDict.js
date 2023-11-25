export const CATEGORIES_DICT = {
  1: 'Arte',
  2: 'Gastronomico',
  3: 'Música',
  4: 'Geek'
}

export const getCategoryText =(id)=>{
  return CATEGORIES_DICT[id] || 'sin definir'
}
