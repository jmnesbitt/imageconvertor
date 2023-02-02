//Function to download Wallpapers from Unsplash link

function downloadWall(url, localPath, search, name, username, fname, lname, html) {

    console.log('Downloading Wallpaper From => ', url, ' To => ', localPath);
    options = {
        url: 'https://relay.viewcam.co.uk/sidmouthjacobs/preview.jpg?',
        dest: 'https://github.com/jmnesbitt/imageconvertor/blob/main/node_modules/uploads',
        timeout: 5000
    }

    download = downloader.image(options).then(({ filename, image }) => {

        if (downloads[search] == 1) {
            delete downloads[search];
        } else {
            downloads[search] = downloads[search] - 1;
        }
        store.set('downloads', downloads);

        tags[search] = tags[search] + 1;
        store.set('tags', tags);

        walls[name + '.jpg'] = [search, username, fname, lname, html];
        store.set('walls', walls);

        console.log('Updated pending download = ', downloads);

        loadUpcoming();
        ongoing = false;
        ongoingTag = "";

        console.log('------------- Downloading Finished -------------');

    }).catch((err) => {

        console.log('Error in downloading Wall => ', err);
        loadUpcoming();
        ongoing = false;
        ongoingTag = "";
        return null;

    })
}