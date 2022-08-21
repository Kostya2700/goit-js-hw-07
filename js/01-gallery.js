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
// console.log(galleryMarkup(galleryItems));
elemDiv.insertAdjacentHTML("beforeend", createGallery);
// const clickGallery = document.querySelectorAll(".gallery__link");
// console.log(clickGallery);
// elemDiv.addEventListener("click", onClickLightBox);
// function onClickLightBox(e) {
//   e.preventDefault();
// clickGallery.setAttribute("data-lightbox", "roadtrip");
// }
elemDiv.onclick = (e) => {
  e.preventDefault();
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg">
	`
    )
    .show();
};
// document.querySelector(".gallery__image").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };
