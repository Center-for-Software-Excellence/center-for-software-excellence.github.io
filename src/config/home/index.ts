import { BlogsSection, ResearchSection } from '@/app/home';

export interface Blog {
  title: string;
  abstract: string;
  date: string;
  category: string;
  link: string;
}
export interface Publication {
  title: string;
  abstract: string;
  date: string;
  authors: string[];
  type: string;
  link: string;
  paperLink?: string;
}

export interface Collaborator {
  image: string;
  name: string;
}

export interface HomeConfig {
  researchSection: ResearchSection;
  blogsSection: BlogsSection;
  collaboratorsTitle: string;
  blogs: Blog[];
  publications: Publication[];
  collaborators: Collaborator[];
}

export const getHomeConfig = (): HomeConfig => ({
  researchSection: {
    base: '/docs/research',
    title: 'Recent Research',
    description: 'Description about the research we do',
    viewAll: 'View All',
  },
  blogsSection: {
    base: '/docs/blog',
    title: 'Recent Blogs',
    description: 'Description about the blogs we posts',
    viewAll: 'View All',
  },
  collaboratorsTitle: 'Our Collaborators',
  // TODO: we need dynamically read from the directory to get the blogs and sort them by date
  blogs: [
    {
      title: 'Agent Scaffold Blog',
      abstract:
        'Introducing SWE-Lens, a new leaderboard evaluating AI Software Engineering agents under resource constraints.',
      date: 'Jul 16, 2025',
      category: 'LLM',
      link: 'https://github.com/Center-for-Software-Excellence/SWE-Lens',
    },
    {
      title: 'placeholder blog',
      abstract: 'placeholder blog description',
      date: 'Mar 26, 2025',
      category: 'placeholder',
      link: '/docs/blog/placeholder-blog',
    },
    {
      title: 'blog 2',
      abstract: 'This is the second blog post.',
      date: 'Mar 26, 2025',
      category: 'placeholder',
      link: '/docs/blog/blog-2',
    },
    {
      title: 'blog 3',
      abstract: 'This is the thrid blog post.',
      date: 'Mar 26, 2025',
      category: 'placeholder',
      link: '/docs/blog/blog-3',
    },
  ],
  // these can be mannually defined but need to sort by date
  publications: [
    {
      title: 'Publication Title',
      abstract:
        'This is a brief abstract of the publication. It summarizes the key findings and contributions of the research.',
      date: 'Jan 1, 2025',
      authors: ['Author One', 'Author Two', 'Author Three'],
      type: 'Conference',
      link: '/docs/research/publication-title',
      paperLink: 'https://example.com/paper-link',
    },
    {
      title: 'Another Publication',
      abstract:
        'This publication explores a different aspect of software engineering, providing insights into new methodologies and practices.',
      date: 'Feb 15, 2025',
      authors: ['Author Four', 'Author Five'],
      type: 'Journal',
      link: '/docs/research/another-publication',
      paperLink: 'https://example.com/paper-link',
    },
    {
      title: 'Another Publication',
      abstract:
        'This publication explores a different aspect of software engineering, providing insights into new methodologies and practices.',
      date: 'Feb 15, 2025',
      authors: ['Author Four', 'Author Five'],
      type: 'Journal',
      link: '/docs/research/another-publication',
      paperLink: 'https://example.com/paper-link',
    },
  ],
  collaborators: [
    {
      image: '/logos/Huawei-logo.svg?height=120&width=120',
      name: 'Huawei',
    },
    {
      image: '/logos/CUHK-logo.svg?height=120&width=120',
      name: 'The Chinese University of Hong Kong',
    },
    {
      image: '/logos/KCL-logo.svg?height=120&width=120',
      name: 'King’s College London',
    },
  ],
});
