import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryMarkUp = galleryItems
    .map(item => {
        return `<div class = "gallery__item">
        <a class = gallery__link href = "#">
        <img class = "gallery__image"
        src = "${item.preview}"
        data-src = "${item.original}" 
        alt = "${item.description}"
        />
        </a>
        </div>`

    })
    .join("");
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkUp);

galleryEl.addEventListener('click', onImageClick)


function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `
    <img src="${event.target.dataset.src}" width="800" height="600">
`, {
            onShow: () => {
                window.addEventListener('keydown', closeByEscape);
            },
            onClose: () => {
                window.removeEventListener('keydown', closeByEscape);
            },
        },
    );

    function closeByEscape(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
    instance.show();
}