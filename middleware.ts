import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es', 'fr', 'zh', 'hi'],
  defaultLocale: 'pt',
});

export const config = {
  // Aplica o middleware em todas as rotas de páginas
  matcher: ['/((?!_next|.*\\..*).*)'],
};
