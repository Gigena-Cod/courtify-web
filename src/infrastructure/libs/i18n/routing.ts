import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/sign-in': {
      es: '/iniciar-sesion',
      pt: '/entrar'
    },
    '/dashboard': {
      es: '/dashboard',
      pt: '/dashboard'
    },
    '/contacts': {
      es: '/contactos',
      pt: '/contatos'
    },
    '/schedule': {
      es: '/agenda',
      pt: '/agenda'
    },
    '/financy': {
      es: '/finanzas',
      pt: '/financas'
    },
    '/users': {
      es: '/usuarios',
      pt: '/usuarios'
    }
  }
});
