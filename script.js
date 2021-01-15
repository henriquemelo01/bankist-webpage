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

//Cookie Message:

// Create DOM element
const message = document.createElement('div');

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

  item.addEventListener('mouseleave', () => (item.style.color = '#444444'));
});
