# The Phone Cave

## Overview

This app is a prototype of what a home page for "The Phone Cave" could look like.

The app consist of a client and server side.

The server side receives GET requests on the "/phones" and "/phones/:id" routes. The former route returns all of the phones in the database as a response, while the latter returns detailed data for the phone that matches the id.

The client side displays all of the phones in the database when the app is loaded. If the user clicks the "See more"-button on any phone, a modal opens to display further details about that phone.
