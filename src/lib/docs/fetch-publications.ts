const pubs = [];

function determineType(pubInfo) {
  if (!pubInfo) return 'other';
  const lower = pubInfo.toLowerCase();

  if (
    lower.includes('journal') ||
    lower.includes('transactions') ||
    lower.includes('letters') ||
    lower.includes('review') ||
    lower.includes('magazine')
  ) {
    return 'journal';
  }
  if (
    lower.includes('conference') ||
    lower.includes('proceedings') ||
    lower.includes('workshop') ||
    lower.includes('symposium') ||
    lower.includes('acm') ||
    lower.includes('ieee')
  ) {
    return 'conference';
  }
  if (lower.includes('arxiv') || lower.includes('preprint')) {
    return 'preprint';
  }
  if (lower.includes('book') || lower.includes('chapter')) {
    return 'book';
  }
  if (lower.includes('thesis') || lower.includes('dissertation')) {
    return 'thesis';
  }
  return 'other';
}

document.querySelectorAll('.gsc_a_tr').forEach((row) => {
  const title = row.querySelector('.gsc_a_t a')?.textContent?.trim();
  const grayElements = row.querySelectorAll('.gsc_a_t .gs_gray');
  const authors = grayElements[0]?.textContent
    ?.trim()
    .split(',')
    .map((a) => a.trim());
  const pubInfo = grayElements[1]?.textContent?.trim();
  const year = parseInt(row.querySelector('.gsc_a_y')?.textContent?.trim());

  if (title && year && year >= 2021) {
    pubs.push({
      title,
      abstract: '',
      date: year.toString(),
      authors: authors || [],
      type: determineType(pubInfo),
      link: `/docs/research/${title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')}`,
      paperLink: '',
    });
  }
});

console.log(JSON.stringify(pubs, null, 2));
