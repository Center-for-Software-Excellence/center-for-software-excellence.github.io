import { Publication } from '@/config/home';

const publicationsCache = new Map<string, any>();

export function usePublications(): Publication[] {
  const cacheKey = 'publications';

  if (publicationsCache.has(cacheKey)) {
    const result = publicationsCache.get(cacheKey);

    if (result instanceof Error) {
      throw result;
    }

    if (result instanceof Promise) {
      throw result;
    }

    return result;
  }

  const promise = fetch('/data/publications.json')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch publications: ${response.status}`);
      }
      return response.json();
    })
    .then((data: Publication[]) => {
      // Sort by date (newest first)
      const sortedPublications = data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
      publicationsCache.set(cacheKey, sortedPublications);
      return sortedPublications;
    })
    .catch((error) => {
      const errorObj =
        error instanceof Error ? error : new Error('Unknown error occurred');
      publicationsCache.set(cacheKey, errorObj);
      throw errorObj;
    });

  publicationsCache.set(cacheKey, promise);
  throw promise;
}
