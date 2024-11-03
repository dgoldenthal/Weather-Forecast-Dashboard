# Weather Dashboard

A dynamic weather dashboard application that allows travelers to view current and future weather conditions for multiple cities to help plan their trips effectively.

## Description

This Weather Dashboard application uses the OpenWeather API to retrieve weather data for cities worldwide. Built with TypeScript, Express.js, and Vite, it features:

- Current weather conditions
- 5-day weather forecast
- Search history functionality
- Dynamic weather icons
- Responsive design
- Temperature in Fahrenheit
- Wind speed and humidity data
Show Image

## Table of Contents

- Installation
- Usage
- Features
- Technology Stack
- API Reference
- Environment Variables
- Contributing
- License

## Installation

1. Clone the repository:

      git clone [https://github.com/dgoldenthal/Weather-Forecast-Dashboard.git]

2. Install dependencies for both client and server:

      npm install

      cd server

      npm install

      cd ../client

      npm install

      cd ..

3. Create a .env file in the server directory:
  
      cd server

      touch .env

4. Add your OpenWeather API key to the .env file:

      API_BASE_URL= [https://api.openweathermap.org]

      API_KEY= 2d6c6dd16cd2173821879b85ec204213

5. Build and start the application:

      npm run start

## Usage

1. Open your web browser and navigate to [http://localhost:3001]
2. Enter a city name in the search box
3. View current weather and 5-day forecast
4. Click on cities in the search history to view their weather again
5. Delete cities from search history using the trash icon

## Features

- Current Weather Display:
   - City name and date
   - Weather condition icon
   - Temperature in Fahrenheit
   - Wind speed
   - Humidity percentage

- 5-Day Forecast:
   - Date
   - Weather condition icon
   - Temperature in Fahrenheit
   - Wind speed
   - Humidity percentage

- Search History:
   - Persistent storage of searched cities
   - Quick access to previous searches
   - Ability to delete cities from history
   - Responsive design for mobile and desktop

## Technology Stack

- Frontend:
   - TypeScript
   - HTML5
   - CSS3
   - Vite build tool
   - Day.js for date formatting
   - Bootstrap for styling
   - Font Awesome icons

- Backend:
   - Node.js
   - Express.js
   - TypeScript
   - dotenv for environment variables
   - File-based storage for search history

- APIs:
   - OpenWeather API for weather data
   - OpenWeather Geocoding API for coordinates

## API Reference

- The application uses the following OpenWeather APIs:
   - 5 Day Weather Forecast API
   - Endpoint: /data/2.5/forecast
   - Returns: 5-day forecast with 3-hour step data

- Geocoding API
   - Endpoint: /geo/1.0/direct
   - Used for: Converting city names to coordinates

For more information, visit OpenWeather API Documentation

## Environment Variables

Required environment variables in the server's .env file:

API_BASE_URL=[https://api.openweathermap.org]
API_KEY=2d6c6dd16cd2173821879b85ec204213

## Project Structure

```
Weather-Forecast-Dashboard/
├── client/               # Frontend application
│   ├── src/              # Source files
│   │   ├── main.ts       # Main TypeScript file
│   │   └── styles/       # CSS styles
│   ├── public/           # Public assets
│   └── package.json      # Frontend dependencies
├── server/               # Backend application
│   ├── src/              # Source files
│   │   ├── routes/       # API routes
│   │   ├── service/      # Weather service
│   │   └── server.ts     # Server configuration
│   ├── db/               # Database files
│   └── package.json      # Backend dependencies
├── README.md             # Project documentation
├── package.json          # Root package.json
└── assets/              # Project images and assets
    └── weather-dashboard.png  # Application screenshot
```

## Deployment

The application is deployed on Render and can be accessed here:
- 🌐 [Weather Dashboard](https://weather-forecast-dashboard-4jc1.onrender.com)

Note: The initial load may take a few seconds as the service spins up on Render's free tier.

## Contributing

1. Fork the repository

2. Create your feature branch:
   git checkout -b feature/AmazingFeature

3. Commit your changes:
   git commit -m 'Add some AmazingFeature'

4. Push to the branch:
   git push origin feature/AmazingFeature

5. Open a Pull Request



