# The Phone Cave (WD)

  Simple app for displaying a database of phones. The back end is created with NodeJS and ExpressJS,
  Front-end is handled with React JS.

## Installation

1. fork this repo
2. cd into /server and ```npm i```, after that ``` npm run dev ``` for running through nodemon or ```npm run start``` for normal ops
3. cd into /client and run ```npm i``` after that ```npm start``` to run the client

### Back-end notes

The RESTful API servers the following routes:

| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id`         | GET       | Show a phone details|
| `/phones/:id/image`|GET| Sends the corresponding image through a response with content type : image/png |



