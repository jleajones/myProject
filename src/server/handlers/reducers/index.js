import { lever2Dispay } from '@serverLib/groupMappings';
import { generateSlug } from '@serverLib/utils';

export const titleReducer = (
  acc,
  { id, text, applyUrl, categories: { team } }
) => {
  if (text) {
    const slug = generateSlug(text);
    return [
      ...acc,
      { id, text, applyUrl, slug, cat: lever2Dispay[team] || `INT-${team}` }
    ];
  } else {
    return acc;
  }
};

// export const jobReducer = (acc, curr, idx, col, jobSlug) => {
//   const slug = generateSlug(curr.text);
//   if (slug === jobSlug) {
//     return [...acc, curr];
//   } else {
//     return acc;
//   }
// };
