// main.js

import { fetchImages } from './js/pixabay-api';
import { renderImages, showError } from './js/render-functions';
import 'css-loader';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    showError('Please enter a search term');
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    showError(error.message);
  } finally {
    loader.style.display = 'none';
  }
});
