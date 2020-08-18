

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
 *  App Configuration, create server
 */
http.createServer((req,res)=>{
    res.writeHead(status,{'content-type':'text/html'});
    res.write('<h1>Hello world!</h1>');
    res.end(); 
});
/**
 * Routes Definitions
 */

/**
 * Server Activation
 */





