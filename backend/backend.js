require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.AMADEUS_API_KEY;
const secret = process.env.AMADEUS_API_SECRET;

let token = "";
let tokenExpiry = 0;

const getAccessToken = async () => {
  if (token && Date.now() < tokenExpiry) {
    return token;
  }

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: apiKey,
        client_secret: secret,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    token = response.data.access_token;

    // Refresh slightly before the actual expiry
    tokenExpiry = Date.now() + (response.data.expires_in - 60) * 1000;

    return token;
  } catch (error) {
    console.error(
      "Error getting access token:",
      error.response?.data || error.message
    );

    throw new Error("Failed to get access token");
  }
};

app.get("/api/flights", async (req, res) => {
  console.log("🛫 /api/flights called");
  console.log("Query params:", req.query);

  try {
    const accessToken = await getAccessToken();

    console.log("Access Token acquired");

    const {
      from,
      to,
      departureDate,
      returnDate,
      adults,
      typeOfTrip,
    } = req.query;

    const params = {
      originLocationCode: from,
      destinationLocationCode: to,
      departureDate,
      adults: Number(adults),
      currencyCode: "USD",
      max: 250,
      nonStop: false,
    };

    if (typeOfTrip === "round" && returnDate) {
      params.returnDate = returnDate;
    }

    console.log("Calling Amadeus API with params:", params);

    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params,
      }
    );

    console.log("Amadeus API response received");

    res.json(response.data);
  } catch (error) {
    console.error(
      "Amadeus API Error:",
      error.response?.data || error.message
    );

    res.status(error.response?.status || 500).json({
      error: error.response?.data || "Failed to fetch flight data",
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "AeroLeon Flight API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});