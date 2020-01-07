// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars") {
         fs.readFile('views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('views/cars_new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
	// css rules below
    else if (request.url === "/stylesheets/style.css") {
         fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
         });
    }
        // model s images rules below
    else if (request.url === "/images/models.jpg") {
         fs.readFile('images/models.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
        // model x images rules below
    else if (request.url === "/images/modelx.png") {
         fs.readFile('images/modelx.png', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/png'});
             response.write(contents);
             response.end();
         });
    }
        // persian cat images rules below
    else if (request.url === "/images/persiancat.jpg") {
         fs.readFile('images/persiancat.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
        // ugly cat images rules below
    else if (request.url === "/images/uglycat.jpg") {
         fs.readFile('images/uglycat.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }

    // request didn't match anything:
    else {
        response.end('URL requested is not available');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
