import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: 'Vale Studio',
  author: 'Robin Vale',
  role: 'Art direction & interface design',
  title: 'Vale Studio — Art direction & interface design',
  description:
    'Portfolio of Robin Vale, an independent art director and interface designer working with small product teams on identity, interface and design systems.',
  url: import.meta.env.SITE ?? 'https://swp-freelancer-portfolio.pages.dev',
  ogImage: '/og-default.png',
  locale: 'en',
  themeColor: '#c8f14d',

  contact: {
    email: 'hello@example.com',
    phone: '+1 (000) 555-0100',
    phoneHref: '+10005550100',
    location: 'Remote — working across nine time zones',
    availability: 'Two project slots open from September',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'Dribbble', href: 'https://dribbble.com/', icon: 'dribbble' },
    { label: 'Behance', href: 'https://www.behance.net/', icon: 'behance' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  ],

  about:
    'An independent art direction and design practice for teams of under twenty. Fewer clients, harder questions early, and a handover that does not quietly depend on me.',

  copyrightHolder: 'Vale Studio',
};

export default siteConfig;
