import { ADD_MARS_ROVERS } from '../../constants';

const arrAddImg = [
  {
    name: 'Curiosity',
    src: 'act/image/Mars_Curiosity.jpg',
  },
  {
    name: 'Opportunity',
    src: 'act/image/Mars_Opportunity.jpg',
  },
  {
    name: 'Spirit',
    src: 'act/image/Mars_Spirit.jpg',
  },
];

export default store => next => action => {
  // console.log('action', action);
  if (action.type === ADD_MARS_ROVERS) {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=NpbsItIuMVQRiGZa05q8v11SNYLNu6k1b2riLeFb'
    )
      .then(response => response.json())
      .then(json => {
        action.data = json;
        action.data.rovers.map(item => {
          arrAddImg.forEach(itemImg => {
            if (item.name === itemImg.name) item.src = itemImg.src;
          });
          return item;
        });
        next(action);
      });
  } else {
    next(action);
  }
};
