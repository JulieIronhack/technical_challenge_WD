# Technical Challenge | The Phone Cave

I worked on this challege with a time limit of 3 hours.
The idea is to create a simple app using both Back-End and Front-End technologies.
The app must interact with a previously created REST API

The technologies used are:

- Front-end: HTML, CSS, Bootstrap, React.js
- Back-end: Express, Node.js, Postman, API, MongoDB

## What is the app about?

The application is a single page app only to render a list of mobile phones.


## Instructions to run this app in your computer

### Install dependencies

### `npm install`

### Front-End set up

For the front-end, you will need to add the following environment variable to the .env file:
- REACT_APP_SERVER_URL (example REACT_APP_SERVER_URL=http://localhost:5005)

### Run the application

### `npm start`

### Back-End set up

- clone
- install dependencies: `npm install`
- create a .env file with the following environment variables:
  - PORT (example, PORT=5005)
  - ORIGIN, with the location of your frontend app (example, ORIGIN=https://mycoolapp.netlify.com)
  - TOKEN_SECRET: used to sign auth tokens (example, TOKEN_SECRET=yOuR$EcRetToKEn)
- run the application: `npm run dev`
