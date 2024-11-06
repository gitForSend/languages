import 'server-only';

const dictionaries = { 
    en: () => import('../../../public/dictionaries/en.json').then((module) => module.default),
    zh: () => import('../../../public/dictionaries/zh.json').then((module) => module.default),
  };

const getDictionary = async (locale) => {
  return dictionaries[locale]();
};
export default getDictionary
