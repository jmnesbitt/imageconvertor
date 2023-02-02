function downloadImages(link,target,cb) {
	const download = require('image-downloader')
	console.log('DOWNLOADING IMAGE', link, target)
	options = {
		url: 'https://www.thetvdb.com/banners/'+link,
		dest: 'https://github.com/jmnesbitt/imageconvertor/blob/main/node_modules/uploads/photo.jpg'   // Save to /path/to/dest/photo.jpg
	  }

	  download.image(options)
		.then(({ filename, image }) => {
		  console.log('File saved to', filename)
		  cb()
		}).catch((err) => {
			console.log(err)
		  throw err
		})
}