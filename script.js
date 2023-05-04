
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
    

//LIBRO 1
 let card1 = document.createElement('ul');
 let cardT1 = document.createTextNode('Books');
 card1.appendChild(cardT1);
 card1.setAttribute('id', 'paragraph')
 document.querySelector('.section1').appendChild(card1); 


    for(let i = 0; i < books.length; i++){
    
    let authors = document.createElement('li');
    let authorsText = document.createTextNode(books[i].author);  
    authors.appendChild(authorsText);
    card1.appendChild(authors);


    let countries = document.createElement('li');
    let countriesText = document.createTextNode(books[i].country);  
    countries.appendChild(countriesText);
    card1.appendChild(countries);
    
    let imageLinks = document.createElement('li');
    let imageLinksText = document.createTextNode(books[i].imageLink);  
    imageLinks.appendChild(imageLinksText);
    card1.appendChild(imageLinks);

    let languages = document.createElement('li');
    let languagesText = document.createTextNode(books[i].language);  
    languages.appendChild(languagesText);
    card1.appendChild(languages);
    
    let links = document.createElement('li');
    let linksText = document.createTextNode(books[i].link);  
    links.appendChild(linksText);
    card1.appendChild(links);
    
    let pages = document.createElement('li');
    let pagesText = document.createTextNode(books[i].pages);  
    pages.appendChild(pagesText);
    card1.appendChild(pages);
    
    let titles = document.createElement('li');
    let titlesText = document.createTextNode(books[i].title);  
    titles.appendChild(titlesText);
    card1.appendChild(titles);
    
    let years = document.createElement('li');
    let yearsText = document.createTextNode(books[i].year);  
    years.appendChild(yearsText);
    card1.appendChild(years);
    

} 

let book1 = books[0];
book1.querySelector('.paragraph').appendChild(book1);











