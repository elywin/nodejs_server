/**
 * Required External Modules
 */
const http = require('http');
/**
 * App Variables
 */
const port = 2000;
const status = 200;
/**
 *  App Configuration, create server & Routes Definitions
 */
http.createServer((req,res)=>{
    res.writeHead(status,{'content-type':'text/html'});
    const url = req.url;
    if(url==='/home'){
        res.write('<h1>welcome</h1>');
        res.end(); 
    }else{
        res.write('<h1>Hello world!</h1>');
        res.end(); 
    }
  
}).listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`);
});






