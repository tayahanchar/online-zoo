'use strict'

const list = document.querySelector('.price__list');
const form = document.querySelector('.amount__rang');
const amountList = ['$25', '$50', '$100', '$250', '$500', '$1000', '$2000', '$5000'];
const amount = document.querySelector('.price__input');
let listItemValue = 'item-2';
let formRangValue = 'radio-2';


createFormElements();
showActiveItems(listItemValue, formRangValue);


window.addEventListener('resize', createFormElements);

function createFormElements() {

  form.innerHTML = '';
  list.innerHTML = '';

  if (document.documentElement.clientWidth >= 1591) {
    createItems(0, 8);
    showActiveItems(listItemValue, formRangValue);
  }

  if (document.documentElement.clientWidth <= 1590 && document.documentElement.clientWidth >= 971) {
    createItems(0, 7);
    showActiveItems(listItemValue, formRangValue);
  }
  if (document.documentElement.clientWidth <= 970) {
    createItems(0, 5);
    showActiveItems(listItemValue, formRangValue);
  }
}

function showActiveItems(a, b) {
    const checedListItem = document.querySelector(`#${a}`);
    checedListItem.classList.add('active');
    const checedFormItem = document.querySelector(`#${b}`);
    checedFormItem.classList.add('checked');
    amount.value = checedFormItem.value.slice(1);
}


function createItems(from, to) {
  for (let i = from; i < to; i++) {
    const input = document.createElement('input');
    input.classList.add('input__rang');
    input.value = amountList[i];
    input.type = "radio";
    input.name= "radio";
    input.id = `radio-${i}`;

    const label = document.createElement('label');
    label.setAttribute('for', `radio-${i}`);
    form.prepend(label);
    form.prepend(input);

    const listItems = document.createElement('li');
    listItems.classList.add('price__item');
    listItems.textContent = amountList[i];
    listItems.id = `item-${i}`;
    list.prepend(listItems);
  }
}


let items = document.querySelectorAll('.price__item');
let inputs = document.querySelectorAll('.input__rang');


list.addEventListener('click', function changeColor(event) {
  if(event.target.classList.contains("price__item")) {
    items = document.querySelectorAll('.price__item');

    items.forEach(it => it.classList.remove('active'));
    event.target.classList.add('active');
    //
    listItemValue = event.target.id;

    inputs = document.querySelectorAll('.input__rang');

    inputs.forEach(it => it.classList.remove('checked'));
    for (const item of inputs) {
      if (item.getAttribute('value') == event.target.innerHTML) {
        item.classList.add('checked');
        //
        formRangValue = item.id;

        amount.value = item.value.slice(1);
      }
    }

  }
});


form.addEventListener('click', function changeActivInput(event) {

  if(event.target.classList.contains("input__rang")) {
    inputs = document.querySelectorAll('.input__rang');

    inputs.forEach(it => it.classList.remove('checked'));

    items = document.querySelectorAll('.price__item');
    
    items.forEach(it => it.classList.remove('active'));

    for (const item of items) {
      if (event.target.getAttribute('value') == item.innerHTML) {
        item.classList.add('active');
        //
        listItemValue = item.id;

        event.target.classList.add('checked');
        //
        formRangValue = event.target.id;

        amount.value = event.target.value.slice(1);
      }
    }
  }
});

amount.addEventListener('input', showInputValue);

function showInputValue() {
      for (const item of items) {
         if(amount.value === item.innerHTML.slice(1)) {
          items.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          //
          listItemValue = item.id;
        } else {
          item.classList.remove('active');
         }
    }

      for (const item of inputs) {
        if(amount.value === item.value.slice(1)) {
         inputs.forEach(i => i.classList.remove('checked'));
         item.classList.add('checked');
         //
         formRangValue = item.id;
        } else {
          item.classList.remove('checked');
         }
      }
}

// menu

const burgerMenuOpen = document.querySelector('.burger__menu');
const burgerMenuLinesList = document.querySelectorAll('.line');
const burgerMenu = document.querySelector('.menu');
const modalWindow = document.querySelector('.modal');

burgerMenu.classList.remove('menu__close');

burgerMenuOpen.addEventListener('click', showMenu);

function showMenu(event) {
  if(event.target.classList.contains('burger__menu') || event.target.classList.contains('line')) {
    openOrCloseBurgerMenu();
    showMenuList();
    showModalWindow();
  }
}

function openOrCloseBurgerMenu() {
    burgerMenuLinesList[0].classList.toggle('rotate-left');
    burgerMenuLinesList[1].classList.toggle('close');
    burgerMenuLinesList[2].classList.toggle('rotate-right');
}

function showMenuList() {
  burgerMenu.classList.toggle('activ__menu');

  if(burgerMenu.classList.contains('activ__menu')) {
    burgerMenu.classList.remove('menu__close');
  } else {
    burgerMenu.classList.add('menu__close');
  }
}

function showModalWindow() {
  modalWindow.classList.toggle('modal__active');
  document.body.classList.toggle('body');
}


modalWindow.addEventListener('click', closeBurgerMenu);

function closeBurgerMenu() {
  openOrCloseBurgerMenu();
  showMenuList();
  showModalWindow();
}

window.addEventListener('resize', closeMenu);

function closeMenu() {
  if (document.documentElement.clientWidth >= 769 && burgerMenu.classList.contains('activ__menu')) {
    burgerMenuLinesList[0].classList.remove('rotate-left');
    burgerMenuLinesList[1].classList.remove('close');
    burgerMenuLinesList[2].classList.remove('rotate-right');
    burgerMenu.classList.remove('activ__menu');
    modalWindow.classList.remove('modal__active');
    document.body.classList.remove('body');
    burgerMenu.classList.remove('menu__close');
  }
}

  
