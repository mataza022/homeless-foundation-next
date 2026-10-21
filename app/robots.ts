import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Prevent crawling API routes
    },
    sitemap: 'https://homelesschildandwidowfoundation.org/sitemap.xml',
  };
}
