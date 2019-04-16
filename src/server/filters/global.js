import { GROUP, TEAM } from '../lib/constants';
import { lever2Group } from '../lib/groupMappings';
import { generateSlug } from '../lib/utils';

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
        } else {
          return acc;
        }
      }, []);
    }

    if (param === TEAM) {
      filteredData = data.reduce((acc, curr) => {
        const {
          categories: { team }
        } = curr;
        if (team && team.toLowerCase() === fv) {
          return [...acc, curr];
        } else {
          return acc;
        }
      }, []);
    }
  });

  return filteredData;
};
