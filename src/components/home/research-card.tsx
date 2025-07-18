import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

import { cn } from '@/lib/utils';
import { Badge } from '../common/badge';
import { Card, CardContent } from '../common/ui/card';

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
          'h-full w-full py-2 transition-all duration-300 hover:border-foreground dark:hover:border-active',
        )}
      >
        <CardContent className="p-6">
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
                  {pub.date}
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
      </Card>
    </Link>
  );
}
