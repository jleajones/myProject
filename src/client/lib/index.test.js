import * as utils from './utils';

describe('Utility Fn', () => {
  test('camelCase', () => {
    const testString = 'this is a string';
    const finalString = utils.camelCase(testString);

    expect(finalString).toBe('thisIsAString');
  });

  test('getDisplayName', () => {
    const componentName = 'HomePage';
    const defaultName = 'Component';
    let componentDisplayName = utils.getDisplayName({
      displayName: componentName
    });
    expect(componentDisplayName).toBe(componentName);

    componentDisplayName = utils.getDisplayName({
      name: componentName
    });
    expect(componentDisplayName).toBe(componentName);

    componentDisplayName = utils.getDisplayName({});
    expect(componentDisplayName).toBe(defaultName);
  });
});
