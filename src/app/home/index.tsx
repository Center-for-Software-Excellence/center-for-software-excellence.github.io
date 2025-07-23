import { Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MoreHorizontal } from 'lucide-react';
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
        <div className="item-start flex justify-between">
          <h2 className="mb-4 h-8 text-xl font-bold md:text-2xl">{title}</h2>
          <UnderlineLink href={base} className="flex h-8 items-center">
            <span className="flex items-center gap-2">
              {viewAll} <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </UnderlineLink>
        </div>
        <p className="mb-8 text-base text-muted-foreground">{description}</p>
      </div>
      <div className="relative mx-auto max-w-4xl">
        <div className="flex w-full flex-col items-center gap-4 p-8 md:px-8">
          {publications.slice(0, 3).map((pub, idx) => (
            <ResearchCard key={'research-' + idx} pub={pub} isArticle={true} />
          ))}
          <div className="flex w-full justify-end pr-12">
            <Link to={base}>
              <MoreHorizontal className="h-6 w-6 text-muted-foreground transition-all duration-300 ease-in-out hover:scale-120 hover:text-foreground dark:hover:text-active" />
            </Link>
          </div>
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
        <div className="item-start flex justify-between">
          <h2 className="mb-4 h-8 text-xl font-bold md:text-2xl">{title}</h2>
          <UnderlineLink href={base} className="flex h-8 items-center">
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const items = [...collaborators, ...collaborators];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;

      if (!isPaused) {
        setScrollPosition((prev) => {
          const newPosition = prev + 0.07 * deltaTime;
          const maxScroll = scrollContainer.scrollWidth / 2;

          if (newPosition >= maxScroll) {
            return newPosition - maxScroll;
          }
          return newPosition;
        });
      }

      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollLeft = scrollPosition;
  }, [scrollPosition]);

  return (
    <section className="w-full py-20">
      <div className="mx-auto mb-12 max-w-6xl px-8">
        <h6 className="relateive w-full rounded-lg pt-4 text-xl font-bold md:p-4 md:text-2xl">
          <span className="text-zinc-400 dark:text-active">Our </span>
          {collaboratorsTitle}
        </h6>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="scrollbar-hide overflow-x-hidden overflow-y-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex w-max gap-6 px-8 py-8">
            {items.map((collaborator, index) => (
              <CollaboratorCard
                key={`collaborator-${index}`}
                collaborator={collaborator}
              />
            ))}
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
              <h1 className="my-6 text-3xl font-bold text-foreground md:text-5xl">
                Centre for Software Excellence
              </h1>
              <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-xl">
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
                  <Link
                    to="https://huaweicanada.recruitee.com/?jobs-7d390cc9%5Bcity%5D%5B%5D=Kingston"
                    className="flex items-center hover:no-underline"
                  >
                    Open Positions
                  </Link>
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
        {/* Collaborators Section */}
        <CollaboratorsSection
          collaborators={collaborators}
          collaboratorsTitle={collaboratorsTitle}
        />
      </div>
    </Layout>
  );
}
