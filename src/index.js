import './index.css';
import list from './list';
// check icon
//
// trash icon
// <i class="fa-regular fa-trash-can"></i>
const listContainer = document.querySelector('.list-container');
window.addEventListener('DOMContentLoaded', () => {
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
});
