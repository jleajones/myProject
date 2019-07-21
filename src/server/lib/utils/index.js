export const someOtherUtilFn = () => {};

/**
 *
 * @param str
 * @returns {string}
 */
export const generateSlug = str =>
  str
    .toLowerCase()
    .replace(/,|\/ |\(|\)|\.|& |- /g, '')
    .replace(/ /g, '-');
