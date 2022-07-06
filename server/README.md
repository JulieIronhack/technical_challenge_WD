# The Phone Cave - API

The backend of "The Phone Cave" technical challenge.

## TECHNOLOGIES

- JavaScript
- Node.js
- Express.js
- MongoDB

## Usage

### Set your enviroment variables with

```javascript
MONGODB_URI=                   // your local mongoDB or AtlasDB
ACCESS_CONTROL_ALLOW_ORIGIN=   // the frontend URI
PORT=                          // use the one you prefer
CLOUDINARY_NAME=               // your cloud name
CLOUDINARY_API_KEY             // your cloud key
CLOUDINARY_API_SECRET=         // your cloud secret
```

### In the project directory, you can run:

#### `npm start` (node) or `npm run dev` (nodemon)

To start your application at
```
http://localhost:<PORT>
```

#### `npm run seeds`

To populate your api with the data of the root of this repository.

## Endpoints

| METHOD | ENDPOINT      | PAYLOAD | RESPONSE      | ACTION                         |
| ------ | ------------- | ------- | ------------- | ------------------------------ |
| GET    | /phones       | \-      | \[{ Phone }\] | Get all phones<br>from MongoDB |
| GET    | /phones/:\_id | \-      | { Phone }     | Get one phone<br>details       |