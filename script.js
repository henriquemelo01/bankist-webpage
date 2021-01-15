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

// Selecting elements:

// Select entire page:
console.log(document.documentElement);
console.log(document.head); // config document
console.log(document.body); // elemens

// Select elements using css selectors: . (class) # (id)  *** + USADO

// OBS: Os metodos .querySelector() e .querySelectorAll() são comuns ao element e ao document - Muito usado para selecionar child elements,...
const header = document.querySelector('.header'); // Returns the first element that contains header class
const button = document.getElementsByClassName('.btn'); // HTML collections
const allSections = document.querySelectorAll('.section'); // Return a node list that contains all elements

const section1 = document.getElementById('section--1');
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

// Create DOM element
const message = document.createElement('div');

// Modifying DOM element
message.classList.add('cookie-message');
message.innerHTML =
  '"We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>"';

// Insert DOM element

// Element.prepend: Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

header.prepend(message);

// Move element before last child
header.append(message);

// Clone Elements
// header.append(message.cloneNode(true)); // clone element -> true = copy all child elements.

// Add element before header as a sibling
header.after(message);

// Add element after header as a sibling
// header.after(message);

// Delete elements:

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
// Old Way: .message.parentElement.removeChild(message);

// Styles; Element.style.propertie = "value0" - creating in line properties ** Prioridade Max de estilo
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Getting properties values (Só funciona para obter valores das propriedades in line, não funciona para obter os valores de propriedades definidas nas classes (CSS) )
console.log(message.style.height); //
console.log(message.style.backgroundColor); // rgb(55, 56, 61) - inline propertie

// Getting all styles from HTML element

// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

// Modifying class properties **

// Como getComputedStyle(message).height retorna uma string que contém o valor da propriedade height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 25 + 'px';

console.log(message.style.height);

// Working with CSS variables

// Select :root - The :root CSS pseudo-class matches the root element of a tree representing the document. In HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher.

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

// Read Standard attributes:
const imgFeature = document.querySelector('.features__img');

console.log(imgFeature.alt);
console.log(imgFeature.src); // http://127.0.0.1:8080/img/digital-lazy.jpg
console.log(imgFeature.getAttribute('src')); // img/digital-lazy.jpg

// Setting + getting Attribute: Using
imgFeature.setAttribute('designer', 'Jonas');
console.log(imgFeature.designer); // undefined não é uma propriedade padrão do elemento img
console.log(imgFeature.getAttribute('designer')); // Jonas

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // URL
console.log(link.getAttribute('href')); // #

// Data Attributes (Element.dataset.att)
console.log(imgFeature.dataset.src);
