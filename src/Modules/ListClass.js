import { getLocalStorage } from '../LocalStorage';

class List {
  constructor() {
    this.listItems = getLocalStorage();
  }

  addItem(item) {
    const tempId = this.listItems.length;
    const task = {
      index: tempId,
      description: item,
      completed: false,
    };
    this.listItems = [...this.listItems, task];
    return this.listItems;
  }

  deleteItem(itemID) {
    let newList = this.listItems.filter((item) => item.index !== itemID);
    newList = newList.map((item, i) => {
      item.index = i;
      return item;
    });
    this.listItems = newList;
    return this.listItems;
  }

  editItem(itemId, property, value) {
    const newList = this.listItems.map((item) => {
      if (itemId === item.index) {
        if (property === 'completed') {
          item.completed = !item.completed;
          return item;
        }
        item[property] = value;
        return item;
      }
      return item;
    });
    this.listItems = newList;
    return newList;
  }

  clearCompletedItems() {
    let newList = this.listItems.filter((item) => item.completed === true);
    newList = newList.map((item, i) => {
      item.index = i;
      return item;
    });
    this.listItems = newList;
    return this.listItems;
  }
}

// move file tha require dom to diffrent file
export default List;
