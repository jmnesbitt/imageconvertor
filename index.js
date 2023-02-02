const download = require('image-downloader');

options = {
  url: 'https://relay.viewcam.co.uk/sidmouthjacobs/preview.jpg?',
  dest: '/workspaces/imageconvertor/node_modules/uploads/photo.jpg',     // will be saved to /path/to/dest/photo.jpg
};

download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename); // saved to /path/to/dest/photo.jpg
  })
  .catch((err) => console.error(err));