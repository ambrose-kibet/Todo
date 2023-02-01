/**
 * @jest-environment jsdom
 */

import List from './src/Modules/ListClass';

const TestFile = new List();
// Add
describe('Add functionality', () => {
  it('should be defined', () => {
    expect(TestFile.addItem('me')).toBeDefined();
  });

  it(' should return an array length of 2', () => {
    expect(TestFile.addItem('hello').length).toBe(2);
  });
});
// delete
