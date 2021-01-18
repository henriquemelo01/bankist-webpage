'use strict';

///////////////////////////////////////
// Modal window

// Selecting Elements:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  // Foi adicionado o metodo preventDefault ao evento para não deixar a pagina retornar ao inicio quando clicado nos botões que vão abrir a modal window.
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); // borrar fundo
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Adicionando evento de clique para os dois botões que vão exibir a modal window de Cadastrar conta
for (const btnOpenModal of btnsOpenModal)
  btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ==========================================

// DOM: é a interface que permite a "comunicação"/ interaçã entre o browser (HTML documents que são renderizados no browser e pelo browser) e o código em JS - API

/*  Funcionalidades do DOM 

- Nos permite fazer a interção entre o JS e os documentos que são renderizados pelo browser e no browser 

- Usando a DOM podemos escrever JS para criar, modificar e deletar elementos HTML. (.creatElementById, .innerHTML,insertAdjacentHTML() ...
 )

 - Setar estilos (css) , classes , atributos e ouvir e responder eventos.

- DOM tree is generated from an HTML document, which we can then interact with;
http://prntscr.com/wnr5q2

= We can write JavaScript to create, modify and delete HTML elements;

DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree (.querySelector(), .addEventListener()...)

*/

/* Cada Element da DOM tree é chamado de NODE. Eles são representados por objetos, assim contém diversos metodos e propriedades.

Eles ainda podem ser dividos em subtipos (child types):

- Element (objetos) -> HTMLElement - links, buttons , ...; 

Cada um destes apresentam propriedades/metodos/atributos unicos e herdam os metodos dos seus "pais" (parent node types). 

Os elementos HTML vão ter acesso a todos os metodos e propriedades do element type como innerHTML(), .classList, .children, .parentElement, .insertAdjacentHTML(), etc...

- Text ;
- Comment; 
- Document;

http://prntscr.com/wnre69


OBS: Os metodos .addEventListener() e .removeEventListener() são herdados de um outro tipo de node type (que não é utilizado na prática) o Event Target (Event Target -> Node + Window ).

Obs 2: Os metodos .querySelector() e .querySelectorAll() são comuns ao element e ao documen

*/

// ==================================================

// DOM elements
const header = document.querySelector('.header');

// Learn More Efect
const btnLearnMore = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// ==================================================

<<<<<<< HEAD
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); // Return HTML Collection -> atualiza sempre que DOM muda. Isso é importante pois conseguimos deletar elementos da DOM programaticamente

// Creating elements

// .insertAdjacentHTML("position string", "html string ") ** https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

// const html = `
//   <div class="section__title">
//     <h3 class="section__header">
//       Teste
//     </h3>
//   </div>
//   <button class="btn btn--show-modal">Open your free account today!</button>
// `;
// section1.insertAdjacentHTML('afterbegin', html);

// Cookie Message:
=======
//Cookie Message:
>>>>>>> 8725b5a8a9c2d34de66b7b2913cfd1246be8d009

// Create DOM element
const message = document.createElement('div');
const btnLearnMore = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modifying DOM element
message.classList.add('cookie-message');
message.innerHTML =
  '"We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>"';

// Insert DOM element (Add element before header as a sibling)

header.before(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

// Styles; Element.style.propertie = "value0" - creating in line properties ** Prioridade Max de estilo

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 15 + 'px';

// Obs: usando getComputedStyle(element) acessamos todos estilos do element, inclusive, aqueles que foram definidos no stylesheet (classe css)

// console.log(getComputedStyle(message).width);
// console.log(message.width); // undefined

message.style.margin = '2.5px';

// ==================================================

// Implementing Smooth Scrolling: Quando clicar no botão Learn More, vamos percorrer a tela até a 1ª sessão (efeito de transição)

// Add click event (event listner):
btnLearnMore.addEventListener('click', () =>
  section1.scrollIntoView({ behavior: 'smooth' })
);

// Hover effect using JS

const navMenu = document.querySelectorAll('.nav__link');

navMenu.forEach(function (item) {
  item.addEventListener('mouseenter', () => (item.style.color = 'red'));

<<<<<<< HEAD
// Data Attributes (Element.dataset.att)
console.log(imgFeature.dataset.src);

// Classes
const logo = document.querySelector('.nav__logo');
logo.classList.add('class1', 'class2');
logo.classList.remove('class1');
logo.classList.toggle('class1'); // Remove class1 no elemento nav__logo se a mesma esta definida ou Add se class1 não esta definida
console.log(logo.classList.contains('class1'));

// Não use className para definir uma classe em um elemnto HTML, uma vez que ao setar esta propriedade toda classe será redefinida **

// logo.className = "icon-logo";
// console.log(logo);

// ============================================

// Implementing Smooth Scrolling: Quando clicar no botão Learn More, vamos percorrer a tela até a 1ª sessão (efeito de transição)

// Add click event (event listner):
btnLearnMore.addEventListener('click', function (e) {
  // Maneira antiga de se fazer o Scrooling (Browser antigos suportam)

  // Obter as coordenadas do elemento que vamos ser direcionado :

  // Coordenadas em relação ao view port (toda parte visível do documento)

  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // ou:

  console.log(e.target.getBoundingClientRect());

  // OBS: e.target - aponta para o elemento que chamou o metodo addEventListner() (Equivalente ao .this)

  // Posição em relação ao inicio da barragem de rolagem do navegador
  console.log('Current Scroll (X/Y) : ', window.pageXOffset, pageYOffset);

  // Coordenada Exata de um elemento: Coord elemento em relação ao view port + Coord barra de rolagem
  /*
  window.scrollTo(
    s1coords.top + window.pageYOffset,
    left: s1coords.left + window.pageXOffset,
    behavior: 'smooth',
  );

  */

  // Novo metodo para aplicar efeito de scroll
  section1.scrollIntoView({ behavior: 'smooth' });

  // section1.scrollIntoView({ behavior: 'smooth' });
});

// Type of events and event Handler: É um sinal gerado quando há uma interação com um elemento da DOM.

// Mouse Enter + Mouse Leave events:
const navMenu = document.querySelectorAll('.nav__link');

// Hover effect using JS
// navMenu.forEach(function (item) {
//   item.addEventListener('mouseenter', () => (item.style.color = 'red'));

//   item.addEventListener('mouseleave', () => (item.style.color = '#444444'));
// });

const print = () => {
  console.log('Hello World!');
  h1.removeEventListener('mouseenter', print);
};

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', print);

// A forma abaixo de "ouvir" eventos não é muito utilizada (antiga)

// h1.onmouseenter = () => console.log('Evento disparado usando onmouseenter ');

// Vantagens de se utilizar .addEventListener():

/*
 - Pode-se atribuir mais de um evento para um mesmo elemento
 - Podemos remover o eventhandler quando não precisamos mais. Ex: Quando queremos exeutar o evento apenas uma única vez 

*/

// JS events important properties ( Bubbling and Capturing) - Event propagation

// Capturing Phase: Evento é gerado no root (Document) e viaja até o elemento que será alvo do evento percorrendo por todos seus parents.

// Target phase: Assim que o evento "chegou" no elemento alvo, os eventos podem ser "ouvidos"

// Bubbling: Após a target phase o evento retorna ao root. Isto implica na seguinte situação:

// Quando atribuimos um eventhandler para dois elementos child e parent, por ex, add evento de click, ao clicarmos no elemento child, o evento será disparado para o pai e filho

const navChild = document.querySelector('.nav__link');
const nav = document.querySelector('.nav');

const randomNumber = function () {
  return Math.trunc(Math.random() * 255 + 1);
};

const randomColor = function () {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

navChild.addEventListener(
  'click',
  e => {
    navChild.style.backgroundColor = randomColor();
    console.log(e.target, e.currentTarget);

    // Stop propagation
    // e.stopPropagation();
  },
  true
);

// 3º parametro habilita o event handler na capturing phase - evento propaga na direção parent -> child , por padrão o metodo addEventListener tem o 3 parametro setado como false, assim o event handler é habilitado na fase de Bubbling , evento propaga na direção child -> parent

// Ao clicar no elemento navChild tendo em vista a fase de bubbling, o event handler de nav também é ativado - propagaçaõ . Entretando, se clicarmos no elemento nav o mesmo efeito não ocorre para seu child. OBS: o event.target não é propagado, mas event.currenTarget === .this

nav.addEventListener('click', e => {
  nav.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
=======
  item.addEventListener('mouseleave', () => (item.style.color = '#444444'));
>>>>>>> 8725b5a8a9c2d34de66b7b2913cfd1246be8d009
});
