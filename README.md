# nodejs_server

<h2>Creating a server with nodejs</h2>
<ul>
    <li>Create folder</li>
    <li>Open terminal and cd into the created folder</li>
    <li>intialise the folder, enter "npm init -y " in the terminal</li>
    <li>Create index.js file in the folder</li>
</ul>
<h2>Add the structure in the index.js file to make it simple</h2>

/**
 * Required External Modules
 */

/**
 * App Variables
 */

/**
 *  App Configuration & Routes Definitions
 */
<hr>
<li>In the required models import the models required http</li>
<li>In create the variables needed, port, status</li>
<li>Create the server with the createServer method giving it request and respond parameters</li>
<li>add routes</li>
<li>Create the routes</li>
<li>Use the listen method with the parameters of "port" </li>

<h3>run "node index.js" in the terminal to start the server</h3>
<li>in the url browser type "http://localhost:2000" to see the output</li>
<li>to see the other page add to the url "/home", "http://localhost:2000/home" </li>

<h3>To watch changes and auto restart the server</h3>
<li>Install  nodemon "npm install -D nodemon"</li>
<li>Create a dev script command in package.json file to run nodemon</li>
<li>Delete the test script and replace it with;<li>
"scripts":{
    "dev": "nodemon ./index.js"
}

<h3>in the terminal "npm run dev" to start the node app</h3>