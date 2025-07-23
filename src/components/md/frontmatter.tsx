import { cn } from '@/lib/utils';
import { useContentStore } from '@/stores/content';
import { useTocStore } from '@/stores/toc';
import { H1, H4, Lead, Muted } from '.';
import { Divider } from '../common/ui/divider';

export function Frontmatter({ className }: { className?: string }) {
  const { frontmatter } = useContentStore();
  const { headings } = useTocStore();
  return (
    frontmatter && (
      <div className={cn('flex flex-col', className)}>
        <H1 className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text leading-tight font-bold tracking-tight text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400">
          {frontmatter?.title}
        </H1>
        {frontmatter?.description && <Lead>{frontmatter?.description}</Lead>}
        {frontmatter?.date && <Muted>{frontmatter?.date}</Muted>}
        {Object.entries(frontmatter).length !== 0 && (
          <Divider hasToc={headings.length > 0} />
        )}
      </div>
    )
  );
}

export function FrontmatterForTSX({
  className,
  frontmatter,
}: {
  className?: string;
  frontmatter: Record<string, any>;
}) {
  return (
    frontmatter && (
      <div className={cn('flex flex-col', className)}>
        <H4 className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text leading-tight font-bold tracking-tight text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400">
          {frontmatter?.title}
        </H4>
        {frontmatter?.description && <Lead>{frontmatter?.description}</Lead>}
        {frontmatter?.date && <Muted>{frontmatter?.date}</Muted>}
      </div>
    )
  );
}
