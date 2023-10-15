'use strict'

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


  // pets

  const animalsParent = document.querySelector('.animals__lists');
  const arrowLeft = document.querySelector('animals__arrow-left');
  const animalsList = [
    {
      animalName: 'Giant Pandas',
      img: '../../assets/images/pandas.jpg',
      location: 'Native to Southwest China',
      icon: '../../assets/icons/banana-bamboo_icon.png',
      iconName: 'banana',
    },
    {
      animalName: 'Eagles',
      img: '../../assets/images/eagles.jpg',
      location: 'Native to South America',
      icon: '../../assets/icons/meet-fish_icon.png',
      iconName: 'meat',
    },
    {
      animalName: 'Gorillas',
      img: '../../assets/images/gorillas.jpg',
      location: 'Native to Congo',
      icon: '../../assets/icons/banana-bamboo_icon.png',
      iconName: 'banana',
    },
    {
      animalName: 'Two-toed Sloth',
      img: '../../assets/images/sloth.jpg',
      location: 'Mesoamerica, South America',
      icon: '../../assets/icons/banana-bamboo_icon.png',
      iconName: 'banana',
    },
    {
      animalName: 'Cheetahs',
      img: '../../assets/images/cheetahs.jpg',
      location: 'Native to Africa',
      icon: '../../assets/icons/meet-fish_icon.png',
      iconName: 'meat',
    },
    {
      animalName: 'Penguins',
      img: '../../assets/images/penguins.jpg',
      location: 'Native to Africa',
      icon: '../../assets/icons/meet-fish_icon.png',
      iconName: 'meat',
    },
    {
      animalName: 'Alligators',
      img: '../../assets/images/alligators.jpg',
      location: 'Native to Southeastern United States',
      icon: '../../assets/icons/meet-fish_icon.png',
      iconName: 'meat',
    },
    {
      animalName: 'Gorillas',
      img: '../../assets/images/gor.jpg',
      location: 'Native to Congo',
      icon: '../../assets/icons/banana-bamboo_icon.png',
      iconName: 'banana',
    },
  ]

    let firstList;
    let secondList;
    let thirdList;

    let count = 0;


  if (document.documentElement.clientWidth >= 1000) {
    firstList = createRandomCards(5, 6);
    secondList = createAnimalsList(6, animalsList);
    thirdList = createRandomCards(5, 6);
  }

  if (document.documentElement.clientWidth <= 999) {
    firstList = createRandomCards(3, 4);
    secondList = createAnimalsList(4, animalsList);
    thirdList = createRandomCards(3, 4);
  }

  window.addEventListener('resize', showAnimalsList);

function showAnimalsList() {

  if (document.documentElement.clientWidth >= 1000) {
    animalsParent.innerHTML = '';
    firstList = createRandomCards(5, 6);
    secondList = createAnimalsList(6, animalsList);
    thirdList = createRandomCards(5, 6);
  }

  if (document.documentElement.clientWidth <= 999) {
    animalsParent.innerHTML = '';
    firstList = createRandomCards(3, 4);
    secondList = createAnimalsList(4, animalsList);
    thirdList = createRandomCards(3, 4);
  }
  
}

function createAnimalsList(to, list) {

  const animalsContainer = document.createElement('div');
  animalsContainer.classList.add('animals__list');

  for (let i = 0; i < to; i++) {
    
    const animalsCard = document.createElement('div');
    animalsCard.classList.add('animals__card');

    const animalsImg = document.createElement('img');
    animalsImg.classList.add('animals__img');
    animalsImg.alt = list[i].animalName;
    animalsImg.src = list[i].img;

    const animalsCardGrayBakground = document.createElement('div');
    animalsCardGrayBakground.classList.add('gray');

    const animalsDescription = document.createElement('div');
    animalsDescription.classList.add('animals__descr');

    const animalsText = document.createElement('div');
    animalsText.classList.add('text');

    const animalsTitle = document.createElement('h4');
    animalsTitle.classList.add('animals__title');
    animalsTitle.textContent = list[i].animalName;

    const animalsLocation = document.createElement('p');
    animalsLocation.classList.add('animals__text');
    animalsLocation.textContent = list[i].location;

    const animalsIcon = document.createElement('img');
    animalsIcon.classList.add(`food__icon-${list[i].iconName}`);
    animalsIcon.alt = list[i].iconName;
    animalsIcon.src = list[i].icon;

    
    animalsContainer.append(animalsCard);
    animalsCard.append(animalsImg);
    animalsCard.append(animalsCardGrayBakground);
    animalsCard.append(animalsDescription);
    animalsDescription.append(animalsText);
    animalsDescription.append(animalsIcon);
    animalsText.append(animalsTitle);
    animalsText.append(animalsLocation);
  }

  animalsParent.append(animalsContainer);
  return animalsContainer;
}


function create(to, list) {

  for (let i = 0; i < to; i++) {
    
    const animalsCard = document.createElement('div');
    animalsCard.classList.add('animals__card');

    const animalsImg = document.createElement('img');
    animalsImg.classList.add('animals__img');
    animalsImg.alt = list[i].animalName;
    animalsImg.src = list[i].img;

    const animalsCardGrayBakground = document.createElement('div');
    animalsCardGrayBakground.classList.add('gray');

    const animalsDescription = document.createElement('div');
    animalsDescription.classList.add('animals__descr');

    const animalsText = document.createElement('div');
    animalsText.classList.add('text');

    const animalsTitle = document.createElement('h4');
    animalsTitle.classList.add('animals__title');
    animalsTitle.textContent = list[i].animalName;

    const animalsLocation = document.createElement('p');
    animalsLocation.classList.add('animals__text');
    animalsLocation.textContent = list[i].location;

    const animalsIcon = document.createElement('img');
    animalsIcon.classList.add(`food__icon-${list[i].iconName}`);
    animalsIcon.alt = list[i].iconName;
    animalsIcon.src = list[i].icon;

    
    animalsCard.append(animalsImg);
    animalsCard.append(animalsCardGrayBakground);
    animalsCard.append(animalsDescription);
    animalsDescription.append(animalsText);
    animalsDescription.append(animalsIcon);
    animalsText.append(animalsTitle);
    animalsText.append(animalsLocation);

    if(count === 1) {
      firstList.append(animalsCard);
    }

    if(count === 2) {
      thirdList.append(animalsCard);
    }
  }

}

function createRandomCards(to, card) {
  let newAnimalsList   = [];
  newAnimalsList.push(animalsList[parseInt(getRandomArbitrary(0, 8))])

    for (let index = 0; index < to; index++) {
      let ramdom = animalsList[parseInt(getRandomArbitrary(0, 8))];
      newAnimalsList.includes(ramdom) ? index-- : newAnimalsList.push(ramdom);
    }

    return createAnimalsList(card, newAnimalsList);
}

function create2(to, card) {
  let newAnimalsList   = [];
  newAnimalsList.push(animalsList[parseInt(getRandomArbitrary(0, 8))])

    for (let index = 0; index < to; index++) {
      let ramdom = animalsList[parseInt(getRandomArbitrary(0, 8))];
      newAnimalsList.includes(ramdom) ? index-- : newAnimalsList.push(ramdom);
    }

    return create(card, newAnimalsList);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


const animalsSection = document.querySelector('.animals')
animalsSection.addEventListener('click', showNewCards);


function showNewCards(event) {
  if(event.target.classList.contains('arrow-left') || event.target.classList.contains('animals__arrow-left')) {
    count = 1;
    animalsSection.removeEventListener('click', showNewCards);

    animalsParent.classList.add('animals__lists-right');
    setTimeout(() => {
      animalsParent.classList.remove('animals__lists-right');
    }, 1100);

    setTimeout(() => {
      secondList.innerHTML = '';
    secondList.innerHTML = firstList.innerHTML;
    }, 1000);

    setTimeout(() => {
      firstList.innerHTML = '';
      if (document.documentElement.clientWidth >= 1000) {
        create2(5, 6);
      }
    
      if (document.documentElement.clientWidth <= 999) {
        create2(3, 4);
      }
    }, 1100);

    setTimeout(() => {
      animalsSection.addEventListener('click', showNewCards);
    }, 1100);


  }

  if(event.target.classList.contains('arrow-right') || event.target.classList.contains('animals__arrow-right')) {
    count = 2;
    animalsSection.removeEventListener('click', showNewCards);

    animalsParent.classList.add('animals__lists-left');
    setTimeout(() => {
      animalsParent.classList.remove('animals__lists-left');
    }, 1100);

    setTimeout(() => {
    secondList.innerHTML = '';
    secondList.innerHTML = thirdList.innerHTML;
    }, 1000);

    setTimeout(() => {
      thirdList.innerHTML = '';
      if (document.documentElement.clientWidth >= 1000) {
        create2(5, 6);
      }
    
      if (document.documentElement.clientWidth <= 999) {
        create2(3, 4);
      }
    }, 1100);

    setTimeout(() => {
      animalsSection.addEventListener('click', showNewCards);
    }, 1100);

  }
}


// Testimonials

const testimonialsContainer = document.querySelector('.testimonials__list');

const testimonialsList = [
  {
    userName: 'Michael John',
    location: 'Local Austria',
    date: 'Today',
    src: '../../assets/icons/user.png',
    comment: 'The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    userName: 'Oskar Samborsky',
    location: 'Local Austria',
    date: 'Yesterday',
    src: '../../assets/icons/Oskar.png',
    comment: 'Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    userName: 'Fredericka Michelin',
    location: 'Local Austria',
    date: 'Yesterday',
    src: '../../assets/icons/Erede.png',
    comment: ' The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    userName: 'Mila Riksha',
    location: 'Local Austria',
    date: 'Yesterday',
    src: '../../assets/icons/Mila.png',
    comment: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I\’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
  },
  {
    userName: 'Jenny Stockman',
    location: 'Local Austria',
    date: 'Yesterday',
    src: '../../assets/icons/user.png',
    comment: 'THANK YOU for sharing these fascinating animal friends with us so that we may learn and increase our understanding of the animal kingdom.We so enjoy the relaxed atmosphere and the friendly and dedicated staff as well as the ever-evolving selection of animals from around the globe. Thank you for sharing these fascinating animal friends with us so that we may learn and increase our understanding of the animal kingdom.We so enjoy the relaxed atmosphere and the friendly and dedicated staff as well as the ever-evolving selection of animals from around the globe.'
  },
  {
    userName: 'Carol Smith',
    location: 'Local Austria',
    date: '8 September',
    src: '../../assets/icons/user66.jpg',
    comment: 'As a breeder of exotic animals and alternative livestock, and as the editor and publisher of a magazine which educates people on these animals, it has been a pleasure getting to know the owners of The Zoo. As a breeder of exotic animals and alternative livestock, and as the editor and publisher of a magazine which educates people on these animals, it has been a pleasure getting to know the owners of The Zoo. As a breeder of exotic animals and alternative livestock, and as the editor and publisher of a magazine which educates people on these animals, it has been a pleasure getting to know the owners of The Zoo. As a breeder of exotic animals and alternative livestock, and as the editor and publisher of a magazine which educates people on these animals, it has been a pleasure getting to know the owners of The Zoo.'
  },
  {
    userName: 'Elizabeth Robinson',
    location: 'Local Austria',
    date: '3 May',
    src: '../../assets/icons/user77.png',
    comment: 'A fantastic experience for kids and adults alike! Kids had a wonderful time, got to know and like the animals, especially the babies. We will certainly be back soon to see how our new friends have grown and take more pictures.A fantastic experience for kids and adults alike! Kids had a wonderful time, got to know and like the animals, especially the babies. We will certainly be back soon to see how our new friends have grown and take more pictures.A fantastic experience for kids and adults alike! Kids had a wonderful time, got to know and like the animals, especially the babies. We will certainly be back soon to see how our new friends have grown and take more pictures.'
  },
  {
    userName: 'Sarah Taylor',
    location: 'Local Austria',
    date: '1 May',
    src: '../../assets/icons/user.png',
    comment: 'They display some of the animals that were born on my farm because I appreciate the facility and the care given to them at Zoo. Not only is this zoo a fun place to visit, but it is dedicated to giving its animals a good place in which to live out their lives.I highly recommend seeing for yourself the variety of contented animals found on display within its gates. They display some of the animals that were born on my farm because I appreciate the facility and the care given to them at Zoo. Not only is this zoo a fun place to visit, but it is dedicated to giving its animals a good place in which to live out their lives.I highly recommend seeing for yourself the variety of contented animals found on display within its gates.'
  },
  {
    userName: 'Jonas Livet',
    location: 'Local Austria',
    date: '23 April',
    src: '../../assets/icons/user22.jpg',
    comment: 'Fuzzy animals seem to always make us smile! Fuzzy fur helps keep some animals warm, dry, and safe. A giant panda\'s coarse fur traps body heat to keep the bear warm (like a blanket helps you!). The black and white coloring of its fur makes the panda more easily seen by other pandas—that is important because although pandas are solitary, males and females need to find each other for mating. Fuzzy animals seem to always make us smile! Fuzzy fur helps keep some animals warm, dry, and safe. A giant panda\'s coarse fur traps body heat to keep the bear warm (like a blanket helps you!). The black and white coloring of its fur makes the panda more easily seen by other pandas—that is important because although pandas are solitary, males and females need to find each other for mating.'
  },
  {
    userName: 'Penny Wood',
    location: 'Local Austria',
    date: '11 April',
    src: '../../assets/icons/user99.jpg',
    comment: 'One thing that might surprise you about pandas is how they sound! They seem pretty quiet, but giant pandas can bleat, roar, growl, and honk! One thing that might surprise you about pandas is how they sound! They seem pretty quiet, but giant pandas can bleat, roar, growl, and honk! One thing that might surprise you about pandas is how they sound! They seem pretty quiet, but giant pandas can bleat, roar, growl, and honk! One thing that might surprise you about pandas is how they sound! They seem pretty quiet, but giant pandas can bleat, roar, growl, and honk!',
  },
  {
    userName: 'Mark Sparrow',
    location: 'Local Austria',
    date: '5 March',
    src: '../../assets/icons/user44.png',
    comment: 'These bears are black and white and loved all over. The giant panda is a national treasure in China, but the rest of the world really likes them, too! With their black-and-white coat and roly-poly shape, giant pandas are one of the most easily recognizable animals. Scientists aren\'t sure why the bears look the way they do. It could be that the black-and-white patches help them stand out in the forest so the bears can find each other to mate. Another idea is that the broad blockings of contrasting color may serve to camouflage the panda in the bamboo or treetops. Each panda\’s markings are slightly different from one another.'
  },
];

testimonialsList.forEach((element, num) => createComment(element, num));

function createComment(element, num) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item__container');
  itemContainer.setAttribute('data-num', num);

  const testimonialsItem = document.createElement('div');
  testimonialsItem.classList.add('testimonials__item');

  const user = document.createElement('div');
  user.classList.add('user');
  const userComment = document.createElement('p');
  userComment.classList.add('user__comment');
  userComment.textContent = element.comment;

  const userImg = document.createElement('img');
  userImg.classList.add('user__photo');
  userImg.alt = 'photo';
  userImg.src = element.src;

  const userInf = document.createElement('div');
  userInf.classList.add('user__inf');

  const userName = document.createElement('p');
  userName.classList.add('user__name');
  userName.textContent = element.userName;

  const personalInf = document.createElement('p');
  personalInf.classList.add('personal__inf');

  const userLocation = document.createElement('p');
  userLocation.classList.add('user__location');
  userLocation.textContent = element.location;

  const userDot = document.createElement('div');
  userDot.classList.add('user__dot');

  const userDate = document.createElement('p');
  userDate.classList.add('user__date');
  userDate.textContent = element.date;

  testimonialsContainer.append(itemContainer);
  itemContainer.append(testimonialsItem);
  testimonialsItem.append(user);
  testimonialsItem.append(userComment);
  user.append(userImg);
  user.append(userInf);
  userInf.append(userName);
  userInf.append(personalInf);
  personalInf.append(userLocation);
  personalInf.append(userDot);
  personalInf.append(userDate);
}


    
const progress = document.querySelector('.input__range'); 
progress.addEventListener('input', range);

function range() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, var(--color-orange) 0%, var(--color-orange) ${value * 14.28}%, #fff ${value * 14.28}%, white 100%)`;

  showAnimation(this.value);
}

window.addEventListener('resize', showFirstValue);

function showFirstValue() {
  progress.value = 0;
  progress.style.background = `linear-gradient(to right, var(--color-orange) 0%, var(--color-orange) 0%, #fff 0%, white 100%)`;
  testimonialsContainer.style.left = '0px';
}

function showAnimation(value) {
  if (document.documentElement.clientWidth >= 1591) {
    switch (value) {
      case '0':
        testimonialsContainer.style.left = '0px';
        break;
      case '1':
        testimonialsContainer.style.left = '-300px';
        break;
      case '2':
        testimonialsContainer.style.left = '-598px';
        break;
      case '3':
        testimonialsContainer.style.left = '-898px';
        break;
      case '4':
        testimonialsContainer.style.left = '-1200px';
        break;
      case '5':
        testimonialsContainer.style.left = '-1500px';
        break;
      case '6':
          testimonialsContainer.style.left = '-1800px';
          break;
      case '7':
          testimonialsContainer.style.left = '-2100px';
          break;
    }
  }

  if (document.documentElement.clientWidth <= 1590) {
    switch (value) {
      case '0':
        testimonialsContainer.style.left = '0px';
        break;
      case '1':
        testimonialsContainer.style.left = '-325px';
        break;
      case '2':
        testimonialsContainer.style.left = '-651px';
        break;
      case '3':
        testimonialsContainer.style.left = '-978px';
        break;
      case '4':
        testimonialsContainer.style.left = '-1305px';
        break;
      case '5':
        testimonialsContainer.style.left = '-1630px';
        break;
      case '6':
          testimonialsContainer.style.left = '-1955px';
          break;
      case '7':
          testimonialsContainer.style.left = '-2281px';
          break;
    }
  }
}


//popap


const popapParent = document.querySelector('.testimonials__overflow');

if(document.documentElement.clientWidth <= 970) {
  testimonialsContainer.addEventListener('click', showPopap);
}

const closeItem = document.createElement('img');
closeItem.src = '../../assets/icons/icon.png';
closeItem.classList.add('close__item');

closeItem.addEventListener('click', closePopap);
const modalTestimonials = document.createElement('div');
document.body.prepend(modalTestimonials);


function showPopap(event) {

  document.body.classList.add('body');

  modalTestimonials.classList.add('modal__active');

  //

  const clone = event.target.closest('.item__container').cloneNode(true);

  const elem = testimonialsList.filter((item, index) => index === +clone.dataset.num);

  ///

  const clonePopapItem = document.createElement('div');
  clonePopapItem.classList.add('item__container-popap');
  clonePopapItem.classList.add('popap__item');

  const testimonialsItem = document.createElement('div');
  testimonialsItem.classList.add('testimonials__item-popap');

  const user = document.createElement('div');
  user.classList.add('user');
  const userComment = document.createElement('p');
  userComment.classList.add('user__comment-popap');
  userComment.textContent = elem[0].comment;

  const userImg = document.createElement('img');
  userImg.classList.add('user__photo');
  userImg.alt = 'photo';
  userImg.src = elem[0].src;

  const userInf = document.createElement('div');
  userInf.classList.add('user__inf');

  const userName = document.createElement('p');
  userName.classList.add('user__name');
  userName.textContent = elem[0].userName;

  const personalInf = document.createElement('p');
  personalInf.classList.add('personal__inf');

  const userLocation = document.createElement('p');
  userLocation.classList.add('user__location');
  userLocation.textContent = elem[0].location;

  const userDot = document.createElement('div');
  userDot.classList.add('user__dot');

  const userDate = document.createElement('p');
  userDate.classList.add('user__date');
  userDate.textContent = elem[0].date;

  

  clonePopapItem.append(testimonialsItem);
  clonePopapItem.append(closeItem);
  testimonialsItem.append(user);
  testimonialsItem.append(userComment);
  user.append(userImg);
  user.append(userInf);
  userInf.append(userName);
  userInf.append(personalInf);
  personalInf.append(userLocation);
  personalInf.append(userDot);
  personalInf.append(userDate);


  ///

  document.body.prepend(clonePopapItem);
}


function closePopap() {
  document.querySelector('.popap__item').remove();
  document.body.classList.remove('body');
  modalTestimonials.classList.remove('modal__active');
}


modalTestimonials.addEventListener('click', closeModalTest);


function closeModalTest() {
  document.querySelector('.popap__item').remove();
  document.body.classList.remove('body');
  modalTestimonials.classList.remove('modal__active');
}