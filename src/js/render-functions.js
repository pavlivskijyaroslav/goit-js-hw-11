const userList = document.querySelector('.gallery');
// const searchBtn = document.querySelector("button[type='submit']");
export function createGallery(images) {
  const markup = images
    .map(images => {
      return `
            <li><img src="${images.largeImageURL}" alt="${images.tags}"></li>
        `;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}
export function clearGallery() {}
export function showLoader() {}
export function hideLoader() {}
