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
        return `<div class="gallery__item" >
                <a class="gallery__link" href = "${original}" >
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"             
                        alt="${description}"/>
                </a>
            </div >`;
    })
    .join("");
    
}

// console.log(cardsMarkup);
let instance = {};

function galleryContainerClick(evt) {
    evt.preventDefault();

        if (!evt.target.dataset.source) {
        return;
    }
    instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
    instance.show(document.addEventListener('keydown', onEscapePress));
    

};
function onEscapePress(evt) {
    if (evt.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', onEscapePress);
        
    } 
}
