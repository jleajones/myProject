export const someOtherThing = () => {};

/**
 *
 * @param actionTypes
 */
export const createAsyncActionTypes = actionTypes => {
  const asyncTypes = {};
  actionTypes.forEach(type => {
    asyncTypes[type] = {
      PENDING: `${type}.PENDING`,
      ERROR: `${type}.ERROR`,
      SUCCESS: `${type}.SUCCESS`
    };
  });

  return asyncTypes;
};
