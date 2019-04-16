export const generateSlug = str =>
  str
    .toLowerCase()
    .replace(/,|\/ |\(|\)|\.|& |- /g, '')
    .replace(/ /g, '-');
