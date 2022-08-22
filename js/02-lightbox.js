import { galleryItems } from "./gallery-items.js";
// Change code below this line
const elemDiv = document.querySelector(".gallery");
function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"> 
                  <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src=${preview} alt=${description}"/> 
                  </a> </li>`;
    })
    .join("");
}
const createGallery = galleryMarkup(galleryItems);
console.log(galleryItems);
elemDiv.insertAdjacentHTML("beforeend", createGallery);
let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
