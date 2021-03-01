const button = document.querySelector('button');
/** @type {HTMLDivElement} */
const cardContainer = document.querySelector('.card-container');

button.addEventListener('click', () => {
   const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
   cardContainer.innerHTML = '';
   fetch(url)
      .then(res => res.json())
      .then(data => {
         // console.table(data.cards[0]);
         const imgUrl = data.cards[0].image;
         const imgElement = document.createElement('img');
         imgElement.setAttribute('src', imgUrl);
         cardContainer.appendChild(imgElement);
      })
      .catch(err => {
         console.log("Ett fel inträffade:" + err);
      });
});


