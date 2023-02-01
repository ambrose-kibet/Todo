import displayItems from './Modules/displayItem';
import './index.css';
import { getLocalStorage, setLocalStorage } from './LocalStorage';
import currentList from './Modules/curentList';

const main = document.querySelector('.main');
const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const clearBtn = document.querySelector('.clear-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!formInput.value) {
    return;
  }
  currentList.addItem(formInput.value);

  formInput.value = '';
  setLocalStorage(currentList.listItems);

  displayItems(getLocalStorage());
});
main.addEventListener('click', (e) => {
  if (e.target.classList.contains('main')) {
    const allItems = [...e.currentTarget.children[0].children[2].children];
    allItems.forEach((item) => {
      item.classList.remove('yellow');
      item.children[1].innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      item.children[1].classList.add('delete-btn');
      item.children[0].children[1].classList.add('hide');
      item.children[0].children[2].classList.remove('hide');
    });
    displayItems(getLocalStorage());
  }
});
window.addEventListener('DOMContentLoaded', () => {
  displayItems(getLocalStorage());
});
clearBtn.addEventListener('click', () => {
  currentList.clearCompletedItems();
  setLocalStorage(currentList.listItems);
  displayItems(getLocalStorage());
});
