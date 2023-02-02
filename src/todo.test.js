/**
 * @jest-environment jsdom
 */

import List from './Modules/ListClass';
// display items mock fn
const displayItems = jest.fn((list) => {
  const displayList = list
    .sort((a, b) => a.index - b.index)
    .map((item) => {
      const { description, index, completed } = item;
      return ` <li class="todo-item" data-id="${index}">
            <div class="wrapper">
              <button type="button" class="btn complete-btn">
                ${
  completed
    ? '<i class="fa-solid fa-check"></i>'
    : '<i class="fa-regular fa-square"></i>'
}
              </button>
               <form class="single-form hide">
                <input type="text"  class="single-input"/>
              </form>
              <p class="todo-txt">${
  completed ? `<s>${description}</s>` : `${description}`
}</p>
            </div>
            <button type="button" class="btn">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </li>`;
    })
    .join('');

  const listContainer = document.createElement('ul');
  listContainer.className = 'list-container';
  listContainer.innerHTML = displayList;
  const todolist = listContainer.children.length;
  return todolist;
});

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

// DOM manipulation
describe(' displayItems should write files to the dom', () => {
  it('should return2 ', () => {
    expect(displayItems(TestFile.listItems)).toBe(2);
    TestFile.addItem('people');
    expect(displayItems(TestFile.listItems)).toBe(3);
    TestFile.deleteItem(0);
    expect(displayItems(TestFile.listItems)).toBe(2);
  });
});

// Edit
describe('test Edditing fuctionality', () => {
  it('should return people for item with id 1', () => {
    TestFile.editItem(1, 'description', 'people');
    expect(TestFile.listItems.find((i) => i.index === 1)).toEqual({
      index: 1,
      description: 'people',
      completed: false,
    });
  });
  it('should return person for item with id 1', () => {
    TestFile.editItem(1, 'description', 'person');
    expect(TestFile.listItems.find((i) => i.index === 1)).toEqual({
      index: 1,
      description: 'person',
      completed: false,
    });
  });
});

// completed status
describe('test Edditingcompleted status fuctionality', () => {
  it('should return item with id 1 completed true', () => {
    TestFile.editItem(1, 'completed');
    expect(TestFile.listItems.find((i) => i.index === 1)).toEqual({
      index: 1,
      description: 'person',
      completed: true,
    });
  });
  it('should return item with id 1 completed false', () => {
    TestFile.editItem(1, 'completed');
    expect(TestFile.listItems.find((i) => i.index === 1)).toEqual({
      index: 1,
      description: 'person',
      completed: false,
    });
  });
});

// clear completed items
describe('Test clear completed items functionality', () => {
  it('should have a length of 1', () => {
    TestFile.editItem(0, 'completed');
    TestFile.clearCompletedItems();
    expect(TestFile.listItems).toHaveLength(1);
  });
  it('should have a length of 0', () => {
    TestFile.editItem(0, 'completed');
    TestFile.clearCompletedItems();
    expect(TestFile.listItems).toHaveLength(0);
  });
});
