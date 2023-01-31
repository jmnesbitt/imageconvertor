# imageconvertor
paper.js image convertor

https://jmnesbitt.github.io/imageconvertor/

Created to take a webcam static image, convert to base64 to overcome the CORS issues from using external URL images (and overcome the tainted canvas), then use paper.js to convert the base64 image into circle paths. 

The following is executed in paper.js:

Colors of Pixels <br>
To find the color of a specific pixel in a raster, we use raster.getPixel(x, y) and pass it the x and y offset of the pixel we want to look at. The raster.getPixel(x, y) function returns the color of the pixel as an Color.
