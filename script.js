
const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
      },
      {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
      },
      {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
      },
      {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
      }]
    

//Creacion article

let card = document.createElement('article');
let cardT = document.createTextNode('Books');
card.appendChild(cardT);
card.setAttribute('id', 'article')
document.querySelector('.section1').appendChild(card); 

  //Creacion p

function addP(value){
    let p = document.createElement('p');
    let pText = document.createTextNode(value);
    p.appendChild(pText);
    return p;
  }

  //Añadir info

for (let i = 0; i < books.length; i++){
    let book = books[i];

    card.appendChild(addP(book.author));
    card.appendChild(addP(book.country));
    card.appendChild(addP(book.imageLink));
    card.appendChild(addP(book.language));
    card.appendChild(addP(book.link));
    card.appendChild(addP(book.pages));
    card.appendChild(addP(book.title));
    card.appendChild(addP(book.year));
  };


for (let i = 0; i < books.length; i++) {
  const book = books[i];
  card += `
    <p>${book.author}</p>
    <p>${book.country}</p>
    <p>${book.imageLink}</p>
    <p>${book.language}</p>
    <p>${book.link}</p>
    <p>${book.pages}</p>
    <p>${book.title}</p>
    <p>${book.year}</p>
  `;
}


document.querySelector('.section1').innerHTML += card;












