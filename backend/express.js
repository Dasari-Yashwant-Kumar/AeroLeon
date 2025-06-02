const express = require ("express");
const cors = require ("cors");
const axios = require ("axios");

const web = express();
web.use(cors());
web.use(express.json());

const AMADEUS_API_KEY = 'Pq64gF5hOUYbEJzCELdusjQkRDFa7Av7';
const AMADEUS_API_SECRET = 'BHcfLxaCDbG0kEeM';

let token = "";
let tokenExpiry = 0;

let getAccessToken = async () => {

  if(token && Date.now() < tokenExpiry) return token;

  try{
    const response = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", 
      new URLSearchParams({
        grant_type: 'client_credentials',
                client_id: AMADEUS_API_KEY,
                client_secret: AMADEUS_API_SECRET,
      }),
       {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
    );

    token = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in *1000;
    return token;

  } catch(error){
    console.error('Error getting access token:', error.response?.data || error.message);
        throw new Error('Failed to get access token');
  }

}
