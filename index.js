const fs = require('fs')

const https = require('https')

function saveImageToDisk(url,path) {

    var fullUrl = url

    var localPath = fs.createWriteStream(path)

    var request = https.get(fullUrl, function (response){
        console.log(response)

        response.pipe(localPath)
    })


}

saveImageToDisk("https://relay.viewcam.co.uk/sidmouthjacobs/preview.jpg", "/workspaces/imageconvertor/node_modules/uploads" + Date.now() + ".jpg")