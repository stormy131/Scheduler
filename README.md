# Scheduler

## Simple web application for easier time management

### Starting the app

####Installing the dependencies
```bash
npm --prefix web install && npm --prefix web/client install
```
####Starting the application
```bash
npm run start 
```

Starting on localhost:3000 by default

#### To work with DB properly, create .env file in /web following example:
```.dotenv
DB=scheduler
USER=postgres
PASSWORD=[Your password]
PORT=3000
TOKEN_SECRET=[Your jwt secret]
CLIENT_ID=[Your google client id ]
CLENT_SECRET=[Your secret google]
```

###Used stack
* Platform - NodeJS
* Backend - NestJS 
* Database - PostgreSQL 14 
* Frontend - VueJS & Vuex

###Contributing
If you have any ideas for improving the program, feel free to add new Issues on the Issues page.

You can also create Pull Requests on the Pull Requests page.

###License
This program is distributed under an MIT License.