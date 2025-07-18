import { Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import { BlogsSkeleton, ResearchSkeleton } from '@/components/common/skeleton';
import { Button } from '@/components/common/ui/button';
import { Divider } from '@/components/common/ui/divider';
import { UnderlineLink } from '@/components/common/underline-link';
import { BlogCard } from '@/components/home/blog-card';
import { CollaboratorCard } from '@/components/home/collaborator-card';
import { ResearchCard } from '@/components/home/research-card';
import { getHomeConfig } from '@/config/home';
import { useBlogPosts } from '@/hooks/use-blog-posts';
import { usePublications } from '@/hooks/use-publications';
import { cn } from '@/lib/utils';
import Layout from '../docs/layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ResearchSection {
  base: string;
  title: string;
  description: string;
  viewAll: string;
}

function LatestResearchSection({
  researchSection,
}: {
  researchSection: ResearchSection;
}) {
  const publications = usePublications();
  const { base, title, description, viewAll } = researchSection;

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto mt-16 flex max-w-4xl flex-col justify-center px-8 text-start">
        <div className="item-center flex justify-between">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">{title}</h2>
          <UnderlineLink href={base}>
            <span className="flex items-center gap-2">
              {viewAll} <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </UnderlineLink>
        </div>
        <p className="mb-8 text-base text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="flex w-full flex-col items-center gap-4 p-4 md:px-8">
          {publications.slice(0, 3).map((pub, idx) => (
            <ResearchCard key={'research-' + idx} pub={pub} />
          ))}
        </div>
      </div>
    </section>
  );
}

export interface BlogsSection {
  base: string;
  title: string;
  description: string;
  viewAll: string;
}

function LatestBlogsSection({ blogsSection }: { blogsSection: BlogsSection }) {
  const blogs = useBlogPosts();
  const { base, title, description, viewAll } = blogsSection;

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto mt-16 flex max-w-4xl flex-col justify-center px-8 text-start">
        <div className="item-center flex justify-between">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">{title}</h2>
          <UnderlineLink href={base}>
            <span className="flex items-center gap-2">
              {viewAll} <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </UnderlineLink>
        </div>
        <p className="mb-8 text-base text-muted-foreground">{description}</p>
      </div>
      <div className="mx-auto max-w-4xl">
        <div
          className={cn(
            'grid max-w-4xl grid-cols-1 justify-items-center gap-4 p-4',
            blogs.length < 3
              ? 'px-8 md:grid-cols-1 md:grid-rows-1'
              : 'md:grid-cols-2 md:grid-rows-2',
          )}
        >
          {blogs.length > 0 && (
            <BlogCard
              key="blog-0"
              blog={blogs[0]}
              className={cn(
                'md:row-span-2',
                blogs.length < 3 ? 'md:w-full' : 'md:w-96',
              )}
            />
          )}
          {blogs.slice(1, 3).map((blog, idx) => (
            <BlogCard blog={blog} key={'blog-' + (idx + 1)} clamp={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollaboratorsSection({
  collaborators,
  collaboratorsTitle,
}: {
  collaborators: any[];
  collaboratorsTitle: string;
}) {
  const [displayedCollaborators, setDisplayedCollaborators] = useState<any[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDisplayedCollaborators([...collaborators, ...collaborators]);
  }, [collaborators]);

  useEffect(() => {
    const loadMoreCollaborators = () => {
      if (isLoading) return;

      setIsLoading(true);
      setTimeout(() => {
        setDisplayedCollaborators((prev) => [...prev, ...collaborators]);
        setIsLoading(false);
      }, 200);
    };
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isNearEnd = scrollLeft + clientWidth >= scrollWidth - 200;

      if (isNearEnd && !isLoading) {
        loadMoreCollaborators();
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [collaborators, isLoading]);

  return (
    <section className="w-full overflow-hidden py-20">
      <div className="mx-auto flex max-w-4xl flex-col justify-center px-8 text-start">
        <div className="item-center flex justify-center">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            {collaboratorsTitle}
          </h2>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="collaborators-scroll-container scrollbar-hide relative overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div
            ref={trackRef}
            className="collaborators-scroll-track flex gap-6 px-8 py-4"
          >
            {displayedCollaborators.map((collaborator, index) => (
              <CollaboratorCard
                key={`collaborator-${index}`}
                collaborator={collaborator}
              />
            ))}
            {isLoading && (
              <div className="flex w-64 flex-shrink-0 items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const { collaborators, researchSection, blogsSection, collaboratorsTitle } =
    getHomeConfig();

  return (
    <Layout isArticle={false} showSidebar={false}>
      <div className="min-h-screen w-full overflow-x-hidden">
        {/* About Section */}
        <section className="relative flex min-h-[50vh] items-center">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
              </linearGradient>
              <pattern
                id="gridPattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            {/* Grid background */}
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>
          <span className="absolute inset-y-0 left-1/2 h-full w-5xl -translate-x-1/2 bg-radial from-transparent via-background/20 to-background"></span>

          <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="my-6 text-4xl font-bold text-foreground md:text-5xl">
                Center for Software Excellence
              </h1>
              <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                We are a team of researchers and innovators passionate about
                exploring the frontiers of artificial intelligence and software
                engineering. Our mission is to advance the state of the art in
                AI and software development through cutting-edge research,
                open-source projects, and collaboration with industry leaders.
              </p>
              <div className="relative mx-auto flex max-w-lg flex-col justify-center gap-6 sm:flex-row">
                <Button className="left-0 rounded-full bg-foreground px-8 py-4 text-lg text-background transition-all duration-300 hover:scale-110 hover:border hover:border-foreground hover:bg-background hover:text-foreground sm:absolute">
                  <Link
                    to="/docs/research"
                    className="flex items-center hover:no-underline"
                  >
                    View Research <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="right-0 rounded-full bg-transparent px-8 py-4 text-lg sm:absolute"
                >
                  Open Positions
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Divider />
        {/* blogs section */}
        <Suspense fallback={<BlogsSkeleton />}>
          <LatestBlogsSection blogsSection={blogsSection} />
        </Suspense>
        {/* research section */}
        <Suspense fallback={<ResearchSkeleton />}>
          <LatestResearchSection researchSection={researchSection} />
        </Suspense>
        <Divider className="mt-28" />
        {/* Collaborators Section */}
        <CollaboratorsSection
          collaborators={collaborators}
          collaboratorsTitle={collaboratorsTitle}
        />
      </div>
    </Layout>
  );
}
