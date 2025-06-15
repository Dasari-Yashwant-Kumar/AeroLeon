# ✈️ AeroLeon – Flight Search & Booking UI

**AeroLeon** is a flight search and booking interface built with HTML, CSS, and JavaScript for the frontend, and Node.js with Express.js for the backend. It enables users to search flights between two cities, choose one-way or round-trip options, select travel dates and passenger count, and view dynamic flight listings fetched via an Express backend integrated with the Amadeus API.

---

## 🌐 Project Overview

AeroLeon was designed with a user-first approach. It offers a realistic flight booking experience where users can:

- Search flights between international airports
- Autocomplete from airport names, cities, or country
- Switch between one-way and round-trip options
- Select number of seats (validation up to 10 passengers)
- View real-time flights with full details: airline, stops, duration, price
- Proceed to checkout where flight details are pre-filled using localStorage

---

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express
- **API Used**: [Amadeus Self-Service API](https://developers.amadeus.com/)
- **Data Source**: Static `airports.json` file for airport autocomplete
- **Storage**: `localStorage` used for passing selected flight info to checkout

---

## 📌 Core Features

- **Autocomplete Search**: Type city/airport and get live suggestions
- **Trip Type Selection**: Toggle between One-Way and Round Trip
- **Dynamic Flight Results**: Retrieved based on user input from Amadeus API
- **Pricing Logic**: Displays base and total price in INR (converted from USD)
- **Checkout Summary**: All flight and user details stored and shown using localStorage
- **Responsive UI**: Smooth experience on both desktop and mobile devices
- **UX Enhancements**: Visual transitions, validations, and iconography (Font Awesome)





