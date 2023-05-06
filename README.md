# The Phone Cave (WD)

At The Phone Cave, we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

## The challenge (Duration: 3 hours)

Your task consists of creating an app showing our catalog. Follow the steps detailed below to complete the task. **You have 3 hours to do so.**

### Iteration #1

Create a REST API (NodeJS) server that meets the following requirements:

| Route         | HTTP Verb | Description                                          |
| ------------- | --------- | ---------------------------------------------------- |
| `/phones`     | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id` | GET       | Show a phone details                                 |

### Iteration #2

Create a React application that communicates with the API you created before. Your React app should be using the **hooks** approach.
- Use Axios (or a similar library) to obtain data from the REST API
- Show a list with all the phones
- When a phone model is selected from the list, a detailed view of the phone is shown with a few specific details displayed. This display should be on the same page as the list of phones.
- Show a spinner component or a position marker while the API request is processing (display a simulation if there is no loading time)

### Iteration #3

Make it look **eye-appealing**. There is no need to develop a sophisticated design, but it should not look terrible when viewed from a phone. Add images of each device.

Once done with this, do a pull request to submit your work.

## About the App

The Phone Cave app is a catalog showcasing various phone models available at The IronPhones store. It allows users to browse through the list of phones, view detailed information about each phone, and experience an eye-appealing interface.

## Getting Started

To run the app locally, follow these steps:

### Prerequisites

- Node.js and npm should be installed on your machine.

### Server-Side

1. Clone the repository: git clone <repository_url>
2. Navigate to the server-side directory: cd server
3. Install the dependencies: npm install
4. Start the server: npm start

5. The server should now be running on `http://localhost:3000`.

### Client-Side

1. Open a new terminal.
2. Navigate to the client-side directory: cd phone-cave-ui
3. Install the dependencies: npm install
4. Start the client: npm start 
5. The client-side app should now be running on `http://localhost:3001`. (Your terminal will ask you to run it on another local host as 3000 is already in use for the server)

## Usage

- Open a web browser and visit `http://localhost:3001` to access the app.
- You will see a list of phones available at The Phone Cave.
- Click on a phone to view detailed information about it.
- To go back to the list, click on the phone image again or select another phone from the list.

Enjoy exploring the catalog at The Phone Cave!

---

**Note:** This is a speed challenge, and you have three hours to complete it. In the event that you do not have all the MVP objectives ready within the given time, submit the pull request regardless.
