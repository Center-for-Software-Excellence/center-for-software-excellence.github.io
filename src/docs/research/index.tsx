import { ResearchList } from '@/components/docs/article-list';
import { FrontmatterForTSX } from '@/components/md/frontmatter';
import { getHomeConfig } from '@/config/home';

export default function ResearchPage() {
  const { publications } = getHomeConfig();
  return (
    <div className="mx-auto px-4 py-8">
      <FrontmatterForTSX
        frontmatter={{
          title: 'Research',
        }}
      />
      <div className="mt-8">
        <ResearchList itemsPerPage={5} content={publications} />
      </div>
    </div>
  );
}
