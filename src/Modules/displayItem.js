import { setLocalStorage } from '../LocalStorage';
import currentList from './curentList';

const listContainer = document.querySelector('.list-container');
const clearBtn = document.querySelector('.clear-btn');
const displayItems = (list) => {
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
  listContainer.innerHTML = displayList;
  const listItems = listContainer.querySelectorAll('.todo-item');
  listItems.forEach((listItem) => {
    listItem.addEventListener('click', (e) => {
      listItems.forEach((item) => {
        item.classList.remove('yellow');
        item.children[1].innerHTML =
          '<i class="fa-solid fa-ellipsis-vertical"></i>';
        item.children[1].classList.add('delete-btn');
      });
      e.currentTarget.children[1].innerHTML =
        '<i class="fa-regular fa-trash-can"></i>';
      e.currentTarget.classList.add('yellow');
      e.currentTarget.children[1].classList.add('delete-btn');
      e.currentTarget.children[0].children[1].classList.remove('hide');
      const conent = e.currentTarget.children[0].children[2].textContent;
      e.currentTarget.children[0].children[1].children[0].value = conent;
      e.currentTarget.children[0].children[2].classList.add('hide');
    });
  });
  const actionBtn = listContainer.querySelectorAll('.btn');
  actionBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('delete-btn')) {
        const ItemId = e.currentTarget.parentElement.dataset.id;
        currentList.deleteItem(Number(ItemId));
        setLocalStorage(currentList.listItems);
        displayItems(currentList.listItems);
        return;
      }
      if (e.currentTarget.classList.contains('complete-btn')) {
        const ItemId = e.currentTarget.parentElement.parentElement.dataset.id;
        currentList.editItem(Number(ItemId), 'completed');
        displayItems(currentList.listItems);
        setLocalStorage(currentList.listItems);
      }
    });
  });
  const editInput = listContainer.querySelectorAll('.single-input');

  editInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      const parentID =
        e.target.parentElement.parentElement.parentElement.dataset.id;
      const input = e.target.value;
      currentList.editItem(Number(parentID), 'description', input);
      setLocalStorage(currentList.listItems);
    });
  });
  clearBtn.addEventListener('click', () => {
    currentList.clearCompletedItems();
    setLocalStorage(currentList.listItems);
  });
};

export default displayItems;
