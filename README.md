# Weather Dashboard

A dynamic weather dashboard application that allows travelers to view current and 
future weather conditions for multiple cities to help plan their trips effectively.

## Description

This Weather Dashboard application uses the OpenWeather API to retrieve weather data for cities worldwide. 
Built with TypeScript, Express.js, and Vite, it features:

- Current weather conditions
- 5-day weather forecast
- Search history functionality
- Dynamic weather icons
- Responsive design
- Temperature in Fahrenheit
- Wind speed and humidity data

![Weather Dashboard Screenshot](./assets/weather-dashboard.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [API Reference](#api-reference)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Weather-Forecast-Dashboard.git

2.	Install dependencies for both client and server:
```bash
npm install
cd server
npm install
cd ../client
npm install
cd ..


3.	Create a .env file in the server directory:
```bash
cd server
touch .env

4.	Add your OpenWeather API key to the .env file:
```bash
API_BASE_URL=https://api.openweathermap.org
API_KEY=your_api_key_here

5.	Build and start the application:
```bash
npm run start

### Usage
1.	Open your web browser and navigate to http://localhost:3001
2.	Enter a city name in the search box
3.	View current weather and 5-day forecast
4.	Click on cities in the search history to view their weather again
5.	Delete cities from search history using the trash icon

### Features

•	Current Weather Display:
      o	City name and date
      o	Weather condition icon
      o	Temperature in Fahrenheit
      o	Wind speed
      o	Humidity percentage

•	5-Day Forecast:
      o	Date
      o	Weather condition icon
      o	Temperature in Fahrenheit
      o	Wind speed
      o	Humidity percentage

•	Search History:
      o	Persistent storage of searched cities
      o	Quick access to previous searches
      o	Ability to delete cities from history
      o	Responsive design for mobile and desktop

### Technology Stack

•	Frontend: 
      o	TypeScript
      o	HTML5
      o	CSS3
      o	Vite build tool
      o	Day.js for date formatting
      o	Bootstrap for styling
      o	Font Awesome icons

•	Backend: 
      o	Node.js
      o	Express.js
      o	TypeScript
      o	dotenv for environment variables
      o	File-based storage for search history

•	APIs: 
      o	OpenWeather API for weather data
      o	OpenWeather Geocoding API for coordinates

### API Reference

The application uses the following OpenWeather APIs:
•	5 Day Weather Forecast API 
      o	Endpoint: /data/2.5/forecast
      o	Returns: 5-day forecast with 3-hour step data

•	Geocoding API 
      o	Endpoint: /geo/1.0/direct
      o	Used for: Converting city names to coordinates

For more information, visit OpenWeather API Documentation

### Environment Variables

Required environment variables in the server's .env file:
API_BASE_URL=https://api.openweathermap.org
API_KEY=your_openweather_api_key

### Project Structure

Weather-Forecast-Dashboard/
├── client/                 # Frontend application
│   ├── src/               # Source files
│   │   ├── main.ts        # Main TypeScript file
│   │   └── styles/        # CSS styles
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
├── server/                # Backend application
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

### Contributing

1.	Fork the repository
2.	Create your feature branch:
    git checkout -b feature/AmazingFeature
3.	Commit your changes:
    git commit -m 'Add some AmazingFeature'
4.	Push to the branch:
    git push origin feature/AmazingFeature
5.	Open a Pull Request


### Contact

Dov Goldenthal - dgoldenthal@gmail.com
Project Link: https://github.com/dgoldenthal/Weather-Forecast-Dashboard
