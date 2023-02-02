window.onload = function() {
  $.post("https://github.com/jmnesbitt/imageconvertor/blob/main/image-saver.php"),
  {
    imgdata: imgData,
    pass: "mypass"
  }
};

// baseb4 img converter
function toDataURL(src, callback, outputFormat) {
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}

toDataURL('https://relay.viewcam.co.uk/sidmouthjacobs/preview.jpg?', function(dataUrl) {
  //console.log('RESULT:', dataUrl)
  document.querySelector("#myImg")
    .src = dataUrl;

})
  
  /*Paper JS Setup for working in CodePen */
  /* ====================== *
   *  0. Initiate Canvas    *
   * ====================== */
  
  // expose paperjs classes into global scope
  paper.install(window);
  
  // Only executed our code once the DOM is ready.
  window.onload = function() {
    // bind paper to the canvas
    paper.setup('canvas');
    // paper.activate();
  
    // Get a reference to the canvas object
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // console.log(ctx, image);
    // ctx.drawImage(image, 0, 0);
    // return;
  
    // }
    
  // Create a raster item using the image tag with id='mona'
  //var url = 'https://hosting.ussgroup.co.uk/sunderland/scwebcam3.jpg';
  var image = document.querySelector('img');
  var raster = new Raster(image);
  
  // Hide the raster:
  raster.visible = false;
  
  // The size of our grid cells:
  var gridSize = 15;
  
  // Space the cells by 120%:
  var spacing = 1
  ;
  
  // As the web is asynchronous, we need to wait for the raster to load before we can perform any operation on its pixels.
  raster.onLoad = function() {
  
    // Since the example image we're using is much too large, and therefore has way too many pixels, lets downsize it to 40 pixels wide and 30 pixels high:
    raster.size = new Size(40, 30);
  
    for (var y = 0; y < raster.height; y++) {
      for(var x = 0; x < raster.width; x++) {
        // Get the color of the pixel:
        var color = raster.getPixel(x, y);
  
        // Create a circle shaped path:
        var path = new Path.Circle({
          center: new Point(x, y).multiply(gridSize),
          radius: gridSize / 2 / spacing,
  
        });
  
  // Set the fill color of the path to the color
              // of the pixel:
              path.fillColor = color;
      }
    }
  
    // Move the active layer to the center of the view, so all the created paths in it appear centered.
    project.activeLayer.position = view.center;
  
  }
  }

