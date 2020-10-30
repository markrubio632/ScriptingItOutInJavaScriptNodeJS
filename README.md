

# ScriptingItOutInJavaScriptNodeJS
This project is uses a front-end Angular application, NodeJS for the back-end, and a MySql database. Both the front-end and back-end run on separate servers and communicate through an API to perform basic CRUD operations on the MySQL database.


## Usage
Back-End: move to the directory where server.js is and run the command `node server.js `. There will be an output in the console claiming that it is listening, and whenever a request comes in, the appropriate request type will display in the console.

Front-End: move to the directory where the angular app (angApp) is located and run the command `ng serve` to run the angular server. Ensure that the Back-End server is running prior to starting up the Front-End server.

SideNote:
- The MySQL database is based off a localhost. Please ensure that the application connects with your MySQL database of choice.


## In Development
- A home page component
- Front-End CSS
- Improved component pathing
