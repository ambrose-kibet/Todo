import { getLocalStorage, setLocalStorage } from './LocalStorage';

const main = document.querySelector('.main');
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
  main.addEventListener('click', (e) => {
    if (e.target.classList.contains('main')) {
      const allItems = [...e.currentTarget.children[0].children[2].children];
      allItems.forEach((item) => {
        item.classList.remove('yellow');
        item.children[1].innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
        item.children[1].classList.add('delete-btn');
      });
    }
  });
  listItems.forEach((listItem) => {
    listItem.addEventListener('click', (e) => {
      listItems.forEach((item) => {
        item.classList.remove('yellow');
        item.children[1].innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
        item.children[1].classList.add('delete-btn');
      });
      e.currentTarget.children[1].innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      e.currentTarget.classList.add('yellow');
      e.currentTarget.children[1].classList.add('delete-btn');
    });
  });
  const actionBtn = listContainer.querySelectorAll('.btn');
  actionBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('delete-btn')) {
        const ItemId = e.currentTarget.parentElement.dataset.id;
        const newList = getLocalStorage().filter(
          (item) => item.index !== Number(ItemId),
        );
        e.currentTarget.parentElement.remove();

        displayItems(newList);
        setLocalStorage(newList);
        return;
      }
      if (e.currentTarget.classList.contains('complete-btn')) {
        const ItemId = e.currentTarget.parentElement.parentElement.dataset.id;
        const newItems = getLocalStorage().map((item) => {
          const { index } = item;
          if (index === Number(ItemId)) {
            item.completed = !item.completed;
            return item;
          }
          return item;
        });

        displayItems(newItems);
        setLocalStorage(newItems);
      }
    });
  });
  clearBtn.addEventListener('click', () => {
    const newItems = getLocalStorage().filter(
      (item) => item.completed !== true,
    );

    displayItems(newItems);
    setLocalStorage(newItems);
  });
};

export default displayItems;