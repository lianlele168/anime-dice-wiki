import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://animedice.robloxwikihub.com';
  const lastModified = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/calculator', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/codes', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/traits-tier-list', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/units-database', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/dice-guide', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/grades-guide', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/rebirth-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/beginner-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
    ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}/`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
