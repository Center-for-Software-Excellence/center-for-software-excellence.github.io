import { BlogsList } from '@/components/docs/article-list';
import { FrontmatterForTSX } from '@/components/md/frontmatter';
import { useBlogPosts } from '@/hooks/use-blog-posts';

export default function BlogsPage() {
  const blogs = useBlogPosts();
  return (
    <div className="mx-auto px-4 py-8">
      <FrontmatterForTSX
        frontmatter={{
          title: 'Blogs',
        }}
      />
      <div className="mt-8">
        <BlogsList itemsPerPage={5} content={blogs} />
      </div>
    </div>
  );
}
