import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', galleryContainerClick);

function createImgCardsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
        return `<li>
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`;
    })
        .join("");
    
}
function galleryContainerClick(evt) {
    evt.preventDefault();

        if (!evt.target.dataset.source) {
        return;
    }
    };

let gall = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
captionDelay: 250,
    
});




