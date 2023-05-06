## Phone Catalogue App
This is a simple phone catalogue application that displays a list of phones from an API endpoint and allows users to view more details about a selected phone.

## How to Use
To use this app, follow the steps below:

Clone the project from the GitHub repository to your local machine.
Navigate to the project directory in your terminal.
Install the required dependencies by running npm install.
Start the development server by running npm start.
Open your browser and navigate to http://localhost:3000.
The app will display a list of phones with their images, names, manufacturers, and prices. To view more details about a phone, click on the "More +" button, and a modal with the phone's details will pop up.

## Dependencies
This app was built with React, axios, and React Router. It also requires an API endpoint at http://localhost:5005/api/phones that returns a list of phones with the following properties:

id
name
manufacturer
imageFileName
description
color
price
screen
processor
ram

The images for the phones should be stored in the public/images directory with their respective imageFileName as the file name.