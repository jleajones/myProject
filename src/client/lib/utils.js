/**
 *
 * @param WrappedComponent
 * @returns {*|string}
 */
export const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

/**
 *
 * @param str
 * @returns {*}
 */
export const camelCase = str =>
  str
    .split(' ')
    .map((piece, idx) => {
      if (idx > 0) return piece.charAt(0).toUpperCase() + piece.slice(1);

      return piece;
    })
    .join('');
