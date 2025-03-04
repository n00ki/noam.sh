import haydeFavicon from '$lib/assets/favicons/hayde.png';
import snippetryFavicon from '$lib/assets/favicons/snippetry.png';
import skoFavicon from '$lib/assets/favicons/omakase.png';
import bokerFavicon from '$lib/assets/favicons/boker.png';
import personalWebsiteFavicon from '$lib/assets/favicons/noamshemesh.png';
import sailkitFavicon from '$lib/assets/favicons/sailkit.png';
import daliasFavicon from '$lib/assets/favicons/dalias.png';
import ninetyPercentFavicon from '$lib/assets/favicons/90.png';
import theFilipinoFavicon from '$lib/assets/favicons/filipino.png';

export type Project = {
  title: string;
  description: string;
  icon: string;
  role: string;
  link?: string;
  type: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: 'Hayde!',
    description:
      'Where Your Music Meets the World! 🎺 Hayde! is a non-profit platform offering a suite of powerful tools to help independent artists and labels create and manage stunning landing pages for their releases. Promote your music, engage with followers, and amplify your reach—all in one place. Completely free, forever.',
    icon: haydeFavicon,
    role: 'Developer',
    link: 'https://hayde.link',
    type: 'dev',
    tags: ['sveltekit', 'tailwindcss', 'vercel']
  },
  {
    title: 'SailKit',
    description:
      'an open-source toolkit for composing responsive email templates in SvelteKit applications. It provides a set of Svelte 5 primitives and utilities to help you create optimized and responsive production-ready emails.',
    icon: sailkitFavicon,
    role: 'Creator & Maintainer',
    link: 'https://sailkit.xyz',
    type: 'dev',
    tags: ['sveltekit', 'tailwindcss', 'open-source']
  },
  {
    title: 'SvelteKit Omakase',
    description:
      'an open source template for kickstarting SvelteKit projects with pre-configured authentication and a few other goodies out of the box.',
    icon: skoFavicon,
    role: 'Creator & Maintainer',
    link: 'https://github.com/n00ki/sveltekit-omakase',
    type: 'dev',
    tags: ['sveltekit', 'tailwindcss', 'typescript', 'vercel']
  },
  {
    title: 'Snippetry',
    description:
      'Snippetry is a fun little brain training game. level up your cognitive muscles by transforming famous quotes into code and share it with everyone.',
    icon: snippetryFavicon,
    role: 'Developer',
    link: 'https://snippetry.com',
    type: 'dev',
    tags: ['sveltekit', 'tailwindcss', 'supabase', 'cloudinary', 'vercel']
  },
  {
    title: 'boker.app',
    description:
      "a digital notebook for morning pages, a stream-of-consciousness writing practice developed by Julia Cameron (author of The Artist's Way). currently built in hebrew for my local community",
    icon: bokerFavicon,
    role: 'Developer',
    link: 'https://boker.app',
    type: 'dev',
    tags: ['sveltekit', 'typescript', 'tailwindcss', 'vercel', 'railway']
  },
  {
    title: "DALIA'S Collective",
    description:
      "DALIA'S Collective aimed to assist promising talents and bridge the gap between local musicians and relevant audiences, focusing on creating meaningful content and establishing creative performing environments.",
    icon: daliasFavicon,
    role: 'Co-Founder & Member',
    type: 'community',
    tags: ['non curricular', 'community', 'music', 'events']
  },
  {
    title: '90%',
    description:
      'Naama Guggenheim’s debut album, released in 2021. "A lifetime of questioning, and only one conclusion. The imperfect is Perfect. The broken is whole. 90% is actually 100%".',
    link: 'https://open.spotify.com/album/14Sknxi0kQfcaQwvThTVWP?si=HpvxpkFURM6hd74tRkKfbw',
    icon: ninetyPercentFavicon,
    role: 'Music Producer & Sound Engineer',
    type: 'music',
    tags: ['non curricular', 'music', 'sound engineering', 'production']
  },
  {
    title: 'The Filipino (הפיליפינית)',
    description: "Yakir Aharon's second single, released in 2020.",
    link: 'https://open.spotify.com/track/2fEa0e1ho8jjUzGwAcsBqY?si=3da1e575833d487e',
    icon: theFilipinoFavicon,
    role: 'Music Producer & Sound Engineer',
    type: 'music',
    tags: ['non curricular', 'music', 'sound engineering', 'production']
  }
];
