# The Phone Cave (WD) Client-Side
## Desktop View
![Desktop view](https://res.cloudinary.com/dwtnqtdcs/image/upload/v1666284990/samples/Desktop_nyhkhc.png)

## Mobile View
![Desktop view](https://res.cloudinary.com/dwtnqtdcs/image/upload/v1666284990/samples/Mobile_gqkruv.png)

  This is a Tech Challenge where I had to build the Frontend for Mobile and Desktop view, where the user could see the phone's list and the details for the selected phone.

  I used the REST API I built on the Server side to get the information.

  The packages used are:
  Axios to make the HTTP request.
  Bootstrap and React-Bootstrap to style the app.
  UUID to get random key values when mapping elements to render.

  ## Setup
- Clone this repo
```shell
$ npm install
$ npm start
```
  ## REST API used

| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones     |
| `/phones/:id`         | GET       | Show a phone details|