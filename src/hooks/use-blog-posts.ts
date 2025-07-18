import { Blog } from '@/config/home';

const blogPostsCache = new Map<string, any>();

export function useBlogPosts(): Blog[] {
  const cacheKey = 'blogPosts';

  if (blogPostsCache.has(cacheKey)) {
    const result = blogPostsCache.get(cacheKey);

    if (result instanceof Error) {
      throw result;
    }

    if (result instanceof Promise) {
      throw result;
    }

    return result;
  }

  const promise = fetch('/data/blogs.json')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status}`);
      }
      return response.json();
    })
    .then((data: Blog[]) => {
      blogPostsCache.set(cacheKey, data);
      return data;
    })
    .catch((error) => {
      const errorObj =
        error instanceof Error ? error : new Error('Unknown error occurred');
      blogPostsCache.set(cacheKey, errorObj);
      throw errorObj;
    });

  blogPostsCache.set(cacheKey, promise);
  throw promise;
}

