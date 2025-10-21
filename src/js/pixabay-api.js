import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '40329359-a15cc1b2c03eb2718994197fd',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      const images = response.data.hits;
      if (images.length > 0) {
        return images;
      } else {
        iziToast.show({
          color: 'red',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}
export { getImagesByQuery };
