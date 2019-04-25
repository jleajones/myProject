export const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export const camelCase = str =>
  str
    .split(' ')
    .map((str, idx) => {
      if (idx > 0) return str.charAt(0).toUpperCase() + str.slice(1);

      return str;
    })
    .join('');
