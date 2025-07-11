export type Link = {
  title: string;
  href: string;
  disabled?: boolean;
};

interface SidebarUIConfig {
  indexTitle: string;
  mobileBottomLinks: Link[];
}

interface TopbarUIConfig {
  title: string;
  searchEnabled: boolean;
  links: Link[];
}

interface FooterUIConfig {
  title: string;
  subtitle: string;
  rights: string;
  links: Link[];
}

const mainLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Research',
    href: '/docs/research',
  },
  {
    title: 'Blog',
    href: '/docs/blog',
  },
];

const getSidebarUIConfig = (): SidebarUIConfig => ({
  indexTitle: '',
  mobileBottomLinks: mainLinks,
});

const getTopbarUIConfig = (): TopbarUIConfig => ({
  title: 'CSE Lab',
  searchEnabled: true,
  links: mainLinks,
});

const getFooterUIConfig = (): FooterUIConfig => ({
  title: 'Center for Software Excellence',
  subtitle: '',
  rights: '© 2025 All rights reserved.',
  links: [
    {
      href: 'mailto:cse@huawei.com',
      title: 'Contact',
    },
    {
      href: 'https://huaweicanada.recruitee.com/?jobs-7d390cc9%5Bcity%5D%5B%5D=Kingston',
      title: 'Join Us',
    },
  ],
});

export { getSidebarUIConfig, getTopbarUIConfig, getFooterUIConfig };
