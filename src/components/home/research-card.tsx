import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

import { cn, formatDate } from '@/lib/utils';
import { Badge } from '../common/badge';
import { Card, CardContent } from '../common/ui/card';
import { Divider } from '../common/ui/divider';

export function ResearchCard({
  pub,
  className,
}: {
  pub: {
    title: string;
    abstract: string;
    date: string;
    authors: string[];
    type: string;
    link: string;
  };
  className?: string;
}) {
  return (
    <Link
      to={`/docs/research/publication-index?title=${encodeURIComponent(pub.title)}`}
      className={cn('group w-full', className)}
    >
      <Card
        className={cn(
          'h-full w-full rounded border-none bg-transparent py-2 shadow-none transition-all duration-300 hover:border-foreground dark:bg-transparent dark:hover:border-active',
        )}
      >
        <CardContent className="p-6 transition-all duration-300 ease-in-out group-hover:translate-y-[2px] group-hover:scale-[95%]">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <Badge
                  className={cn(
                    'border-border group-hover:border-foreground dark:group-hover:border-active/50 dark:group-hover:bg-active/10 dark:group-hover:text-active',
                    {
                      'bg-muted text-muted-foreground': pub.type === 'Preprint',
                      'bg-primary text-primary-foreground':
                        pub.type === 'Journal',
                      'bg-secondary text-secondary-foreground':
                        pub.type === 'Conference',
                      'bg-accent text-accent-foreground': pub.type === 'Other',
                    },
                  )}
                >
                  {pub.type}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {formatDate(pub.date)}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors dark:group-hover:text-active">
                {pub.title}
              </h3>
              <p className="mb-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {pub.abstract}
              </p>
              <p className="mb-2 text-xs text-accent-foreground">
                {pub.authors.join(', ')}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 dark:text-active" />
          </div>
        </CardContent>
        <div className="relative mb-8 flex w-full items-center justify-center overflow-x-visible">
          <span
            className={cn(
              'animate-expand-x absolute left-1/2 h-px w-full -translate-x-1/2 bg-[linear-gradient(to_right,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)] md:w-[calc(100vw-17.5rem)]',
            )}
          />
          <span
            className={cn(
              'animate-expand-x absolute left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-[linear-gradient(to_right,transparent_0%,var(--foreground)_10%,var(--foreground)_90%,transparent_100%)] opacity-0 transition-all duration-300 ease-in-out group-hover:scale-x-100 group-hover:opacity-100 md:w-[calc(100vw-17.5rem)] dark:bg-[linear-gradient(to_right,transparent_0%,var(--color-active)_10%,var(--color-active)_90%,transparent_100%)]',
            )}
          />
        </div>
      </Card>
    </Link>
  );
}
