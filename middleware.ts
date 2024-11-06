import { NextRequest } from 'next/server';
import Negotiator from 'negotiator'; 

const defaultLocale = 'en'; 
const locales = ['en', 'zh', 'fr']; 

// Функция для сопоставления языков
function match(languages: string[], locales: string[], defaultLocale: string): string {
  for (let language of languages) {
    if (locales.includes(language)) {
      return language;
    }
  }
  return defaultLocale;
}

function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale; 

  const headers = { "accept-language": acceptLang }; 
  const languages = new Negotiator({ headers }).languages(); 

  return match(languages, locales, defaultLocale); 
}
