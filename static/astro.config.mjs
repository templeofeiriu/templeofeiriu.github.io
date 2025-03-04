// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import markdoc from '@astrojs/markdoc';
// https://astro.build/config
export default defineConfig({
	// site: 'https://www.templeofeiriu.com',
	// image: {
	// remotePatterns: [{ protocol: "https" }],
	// domains: [''],
  // },
	site: 'https://www.templeofeiriu.ie',
	// base: '/templeofeiriu/',
	integrations: [mdx(), sitemap()],
	assets: {
		fallback: {
			directories: ['src/content/images']
		}
	},
	redirects: {
		// '/_events': '/event-info',
		// '/_events/[...slug]': '/event-info/[...slug]',
		'/event-info': '/eventinfo',
		'/event-info/[...slug]': '/eventinfo/[...slug]',
		// take Header Links from menu and redirect to blog
		'aisling-eala': '/blog/aisling-eala',
		'/about': '/blog/about',
		'about-5-1': '/blog/about-5-1',
		'about-6': '/blog/about-6',
		'about-3': '/blog/about-3',
		'information-and-guidelines': '/blog/information-and-guidelines',
		'recent-newsletter': 'https://us7.campaign-archive.com/?u=595dd0ef2732ce0467c9cdb30&id=c270073da0',
		'awakening-the-songlines-of-the-land': '/blog/awakening-the-songlines-of-the-land',
		'/contact': '/blog/contact',
		'home': '/blog/home',
		'/services-7': '/blog/services-7',
		'life-ceremonies': '/blog/life-ceremonies',
		'/weddings-1': '/blog/weddings-1',
		'fire-festivals': '/blog/fire-festivals',
		'/workshops': '/blog/workshops',
		'/images': '/blog/images',
//		'/[...slug]': '/blog/[...slug]'
	}
});
