/**
 * @jest-environment jsdom
 */

import List from './Modules/ListClass';

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
describe('delete functionality', () => {
  it('should return a length of zero ', () => {
    expect(TestFile.deleteItem()).not.toBeUndefined();
    TestFile.addItem('world');
    TestFile.deleteItem(0);
    expect(TestFile.listItems.length).toBe(2);
  });
});