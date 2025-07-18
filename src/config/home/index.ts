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
  image?: string;
  name: string;
  org: string;
}

export interface HomeConfig {
  researchSection: ResearchSection;
  blogsSection: BlogsSection;
  collaboratorsTitle: string;
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
  collaborators: [
    {
      image: '',
      name: 'Julia Rubin',
      org: 'UBC',
    },
    {
      image: '',
      name: 'Elisa Banlassad',
      org: 'UBC',
    },
    {
      image: '',
      name: 'Dongwook Yoon',
      org: 'UBC',
    },
    {
      image: '',
      name: 'Konstantin Beznosov',
      org: 'UBC',
    },
    {
      image: '',
      name: 'Ivan Beschastnikh',
      org: 'UBC',
    },
    {
      image: '',
      name: 'Ali Mesbah',
      org: 'UBC',
    },
    {
      image: '',
      name: 'Shaowei Wang',
      org: 'University of Manitoba',
    },
    {
      image: '',
      name: 'Weiyi Shang',
      org: 'University of Waterloo',
    },
    {
      image: '',
      name: 'Lionel Briand',
      org: 'University of Ottawa',
    },
    {
      image: '',
      name: 'Rongxing Lu',
      org: 'University of New Brunswick',
    },
    {
      image: '',
      name: 'Ying Zou',
      org: 'Queen’s University',
    },
    {
      image: '',
      name: 'Yue Li',
      org: 'University of Alberta',
    },
    {
      image: '',
      name: 'Yongsheng Li',
      org: 'University of Alberta',
    },
    {
      image: '',
      name: 'Bram Adams',
      org: "Queen's University",
    },
    {
      image: '',
      name: 'James Cordy',
      org: "Queen's University",
    },
    {
      image: '',
      name: 'Ying Zou',
      org: "Queen's University",
    },
    {
      image: '',
      name: 'Jinqiu Yang',
      org: 'Concordia University',
    },
    {
      image: '',
      name: 'Peter Chen',
      org: 'Concordia University',
    },
    {
      image: '',
      name: 'Foutse Khomh',
      org: 'Polytechnique Montreal',
    },
    {
      name: 'Jack Jiang',
      org: 'York University',
    },
    {
      name: 'Song Wang',
      org: 'York University',
    },
    {
      name: 'Zhenhao Li',
      org: 'York University',
    },
    {
      name: 'Shurui Zhou',
      org: 'University of Toronto',
    },
  ],
});
