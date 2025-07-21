import { Suspense } from 'react';

import { ResearchPageSkeleton } from '@/components/common/skeleton';
import { ResearchList } from '@/components/docs/article-list';
import { FrontmatterForTSX } from '@/components/md/frontmatter';
import { usePublications } from '@/hooks/use-publications';

function ResearchContent() {
  const publications = usePublications();
  return <ResearchList itemsPerPage={5} content={publications} />;
}

export default function ResearchPage() {
  return (
    <div className="mx-auto py-8 md:px-4">
      <FrontmatterForTSX
        frontmatter={{
          title: 'Research',
        }}
      />
      <div className="mt-8">
        <Suspense fallback={<ResearchPageSkeleton />}>
          <ResearchContent />
        </Suspense>
      </div>
    </div>
  );
}
