import { galleryItems } from "./gallery-items.js";
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
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
