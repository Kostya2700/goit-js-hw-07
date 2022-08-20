import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ikl = document.querySelector(".gallery");
const elemMass =
  '<ul class="gallery">' +
  galleryItems
    .map(
      (index) => `<li class="gallery__item"> 
                  <a class="gallery__link" href="${index.original}">
                  <img class="gallery__image" src=${index.preview} alt=${index.description} source="${index.original}"/> 
                  </a> </li>`
    )
    .join("") +
  "</ul>";
ikl.insertAdjacentHTML("beforeend", elemMass);
// console.log(galleryItems);
