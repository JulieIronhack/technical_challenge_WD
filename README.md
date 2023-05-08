# Tech Challenge: The Phone Cave

This is my solution to the tech challenge given by Ironhack on May 8th, 2023.

## Installation

- clone this repo
- navigate to the server directory `npm i` and `npm run dev`
- navigate to the client directory `npm i` and `npm run dev`
- open your browser and visit `http://localhost:5173/`

## Iteration 1

Solved!
I’ve built a simple REST API fulfilling the requirements. I have used [Ironlauncher](https://www.npmjs.com/package/ironlauncher) as a starter template and have removed all unecassary source code. I had some CORS issues, but solved it with the [NPM package cors.](https://www.npmjs.com/package/cors)

## Iteration 2

Solved, but not entirely.
I’ve uses [Vite.js](https://vitejs.dev/) as my framework of choice, in combination with [TailwindCSS](https://tailwindcss.com/). I have missed to make a loading spinner and the phone details are shown on separate pages. With a litte more time like an hour, that would also have been done, but I’ve decided to write a proper ReadMe and provide more information.

## Iteration 3

Solved, at least from my view!
It’s not rad but it looks good. Both views are responsive using grid layouts.

Following you can read the original Instructions:

# The Phone Cave (WD)

At The Phone Cave we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

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

- Use Axios (or a similar library) in order to obtain data from the REST API
- Show a list with all the phones
- When a phone model is selected from the list, a detailed view of the phone is shown with a few specific details displayed. This display should be on the same page than the list of phones.
- Show a spinner component or a position marker while the API request is processing (display a simulation if there is no loading time)

### Iteration #3

Make it look **eye-appealing**. There is no need to develop a sophisticated design, but it should not look terrible when viewed from a phone. Add images of each device.

Once done with this, do a pull request to submit your work.

## Deadline

You have three hours to work on this challenge.
In the event that after three hours you do not have the MVP objectives ready, send the pull request indistinctly. This is a speed challenge.

## Must-have Deliverables

- Functioning code (server and client side)
- Short README file describing what is the app about and add instructions on how to use it.
