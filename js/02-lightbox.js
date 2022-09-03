import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
    .map(item => {
        return `
        <a class = "gallery__item" href = "${item.original}">
        <img class = "gallery__image"
        src = "${item.preview}"
        data-src = "${item.original}" 
        alt = "${item.description}"
        />
        </a>`

    })
    .join("");

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkUp);
console.log(galleryItems);


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'top',
    captionDelay: 200,
    docClose: false,

});