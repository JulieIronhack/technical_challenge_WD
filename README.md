# The Phone Cave (WD)

The Phone Cave" app is an application designed to showcase the catalog of phones available at The Phone Cave store. The app consists of two main components: a Node.js-based REST API server and a React application.

# Server

| Route         | HTTP Verb | Description                                                                                                                                          |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/phones`     | GET       | This route returns a list of all phones available in the store. The server retrieves this data from the phones.json file, which serves as fake data. |
| `/phones/:id` | GET       | This route retrieves the details of a specific phone based on its ID. It allows the app to display a detailed view of a phone when selected          |

### Client (React application)

- PhoneListPage : displays a list of all available phones fetched from the REST API. Each phone entry typically includes basic information like the phone's model, brand, and price.

- PhoneDetailsPage : When a user selects a phone from the list, the app shows a detailed
