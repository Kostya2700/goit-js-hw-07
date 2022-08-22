import { galleryItems } from "./gallery-items.js";
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox
const elemDiv = document.querySelector(".gallery");
function galleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" data-lightbox="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const createGallery = galleryMarkup(galleryItems);
elemDiv.insertAdjacentHTML("beforeend", createGallery);
let elem;
const handleClick = (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
    elem = basicLightbox.create(
      `<img src=${event.target.getAttribute("data-source")} />`,
      {
        onShow: (elem) => {
          const listener = (event) => {
            if (event.key === "Escape") {
              elem.close();
              elemDiv.removeEventListener("keyup", listener);
            }
          };
          elemDiv.addEventListener("keyup", listener);
        },
      }
    );
    elem.show();
  }
};
elemDiv.addEventListener("click", handleClick);
