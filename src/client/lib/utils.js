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

export const hexToRgba = (hex, alpha = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${alpha})`
    : null;
};
