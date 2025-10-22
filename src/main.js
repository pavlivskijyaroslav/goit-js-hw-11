import * as pixabayApi from './js/pixabay-api.js';
import * as renderFunction from './js/render-functions.js';

const form = document.querySelector('.form');
const userQuery = document.querySelector("input[name='search-text']");

form.addEventListener('submit', e => {
  e.preventDefault();
  renderFunction.clearGallery();
  pixabayApi
    .getImagesByQuery(userQuery.value)
    .then(response => renderFunction.createGallery(response));
});
