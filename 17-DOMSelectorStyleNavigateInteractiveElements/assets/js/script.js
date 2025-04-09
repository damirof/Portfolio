    //    ---------------    METOD -1    -----------------

    
const heartElement = document.querySelector('.heart');
const cardElement = heartElement.closest('.card');

const cardData = {
  title: cardElement.querySelector('.cardTitle').textContent,
  text: cardElement.querySelector('.cardText').textContent,
  price: cardElement.querySelector('.cardPrice').textContent,
  imageSrc: cardElement.querySelector('img').src
};

console.log('Card Data (navigation method):', cardData);


      //    ---------------    METOD -2    -----------------

// const heartElement2 = document.querySelector('.heart');
// const cardElement2 = heartElement2.closest('.card');

// const cardData2 = {
//   title: cardElement2.querySelector('.cardTitle').textContent,
//   text: cardElement2.querySelector('.cardText').textContent,
//   price: cardElement2.querySelector('.cardPrice').textContent,
//   imageSrc: cardElement2.querySelector('img').src
// };

// console.log('Card Data (closest method):', cardData2);


