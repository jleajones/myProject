import { QUERY } from '@serverLib/constants';

export default (query, data) => {
  let filteredData = [...data];
  const params = Object.keys(query);
  params.forEach(param => {
    if (param === QUERY) {
      const qv = query[param].toLowerCase();
      filteredData = data.reduce((acc, curr) => {
        if (curr.toLowerCase().includes(qv)) {
          return [...acc, curr];
        }
        return acc;
      }, []);
    }
  });

  return filteredData;
};
