import { getHomeConfig } from '../home';

export const researchRecords = () => {
  const { publications } = getHomeConfig();
  const records = publications.map((pub, idx) => {
    return {
      id: pub.title + idx,
      title: pub.title,
      section: 'Research / ' + pub.title,
      description: pub.abstract,
      slug: pub.link,
      tags: pub.type ? [pub.type] : [],
    };
  });
  return records;
};
