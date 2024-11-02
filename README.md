Weather Dashboard
A dynamic weather dashboard application that allows travelers to view current and future weather conditions for multiple cities to help plan their trips effectively.
Description
This Weather Dashboard application uses the OpenWeather API to retrieve weather data for cities worldwide. Built with TypeScript, Express.js, and Vite, it features:

Current weather conditions
5-day weather forecast
Search history functionality
Dynamic weather icons
Responsive design
Temperature in Fahrenheit
Wind speed and humidity data

Show Image
Table of Contents

Installation
Usage
Features
Technology Stack
API Reference
Environment Variables
Contributing
License

Installation

Clone the repository:

bashCopygit clone https://github.com/yourusername/Weather-Forecast-Dashboard.git

Install dependencies for both client and server:

bashCopynpm install

Create a .env file in the server directory:

bashCopycd server
touch .env

Add your OpenWeather API key to the .env file:

envCopyAPI_BASE_URL=https://api.openweathermap.org
API_KEY=your_api_key_here

Build and start the application:

bashCopynpm run start
Usage

Open your web browser and navigate to http://localhost:3001
Enter a city name in the search box
View current weather and 5-day forecast
Click on cities in the search history to view their weather again
Delete cities from search history using the trash icon

Features

Current Weather Display:

City name and date
Weather condition icon
Temperature
Wind speed
Humidity


5-Day Forecast:

Date
Weather condition icon
Temperature
Wind speed
Humidity


Search History:

Persistent storage of searched cities
Quick access to previous searches
Ability to delete cities from history



Technology Stack

Frontend:

TypeScript
HTML5
CSS3
Vite
Day.js for date formatting


Backend:

Node.js
Express.js
TypeScript
dotenv for environment variables


APIs:

OpenWeather API
Geocoding API



API Reference
The application uses the following OpenWeather APIs:

5 Day Weather Forecast API
Geocoding API

For more information, visit OpenWeather API Documentation
Environment Variables
Required environment variables in the server's .env file:
envCopyAPI_BASE_URL=https://api.openweathermap.org
API_KEY=your_openweather_api_key
Project Structure
CopyWeather-Forecast-Dashboard/
├── client/                 # Frontend application
│   ├── src/               # Source files
│   ├── public/            # Public assets
│   └── package.json       # Frontend dependencies
├── server/                # Backend application
│   ├── src/              # Source files
│   ├── db/               # Database files
│   └── package.json      # Backend dependencies
└── package.json          # Root package.json
Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE.md file for details
Acknowledgments

OpenWeather API for weather data
Font Awesome for icons
The educational team for the project requirements and guidance

Contact
Your Name - your-email@example.com
Project Link: https://github.com/yourusername/Weather-Forecast-Dashboard