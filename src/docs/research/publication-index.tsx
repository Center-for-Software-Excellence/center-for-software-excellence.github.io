import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

import { Badge } from '@/components/common/badge';
import { Button } from '@/components/common/ui/button';
import { getHomeConfig, type Publication } from '@/config/home';

export default function PublicationIndex() {
  const [searchParams] = useSearchParams();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const title = searchParams.get('title');
    if (!title) {
      setLoading(false);
      return;
    }

    const config = getHomeConfig();
    const foundPublication = config.publications.find(
      (pub) => pub.title === title,
    );

    setPublication(foundPublication || null);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!publication) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-destructive">Publication not found</div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full p-6">
      <div className="p-8">
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-3">
            <Badge
              variant={publication.type === 'Journal' ? 'default' : 'secondary'}
            >
              {publication.type}
            </Badge>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            {publication.title}
          </h1>
          <p className="mb-4 text-sm text-accent-foreground">
            By {publication.authors.join(', ')}
          </p>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {publication.date}
          </span>
          {publication.paperLink && (
            <Button className="rounded-full bg-foreground px-8 py-4 text-lg text-background transition-all duration-300 hover:scale-110 hover:border hover:border-foreground hover:bg-background hover:text-foreground">
              <Link
                to={publication.paperLink}
                className="flex items-center hover:no-underline"
              >
                Read the paper <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
        <div className="my-6">
          <h2 className="my-3 text-xl font-semibold">Abstract</h2>
          <p className="leading-relaxed text-muted-foreground">
            {publication.abstract}
          </p>
        </div>
      </div>
    </div>
  );
}

