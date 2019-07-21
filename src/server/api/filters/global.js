import { GROUP, TEAM } from '@serverLib/constants';
import { lever2Group } from '@serverLib/groupMappings';
import { generateSlug } from '@serverLib/utils';

/**
 *
 * @param query
 * @param data
 * @returns {...*[]}
 */
export default (query, data) => {
  let fv;
  let filteredData = [...data];
  const params = Object.keys(query);
  params.forEach(param => {
    fv = query[param].toLowerCase();
    if (param === GROUP) {
      filteredData = data.reduce((acc, curr) => {
        const {
          categories: { team }
        } = curr;
        if (team && generateSlug(lever2Group[team].toLowerCase()) === fv) {
          return [...acc, curr];
        }
        return acc;
      }, []);
    }

    if (param === TEAM) {
      filteredData = data.reduce((acc, curr) => {
        const {
          categories: { team }
        } = curr;
        if (team && team.toLowerCase() === fv) {
          return [...acc, curr];
        }
        return acc;
      }, []);
    }
  });

  return filteredData;
};
