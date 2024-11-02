import config from '../config.js';

interface Coordinates {
  lat: number;
  lon: number;
}

interface Weather {
  city: string;
  date: string;
  icon: string;
  iconDescription: string;
  tempF: number;
  windSpeed: number;
  humidity: number;
}

interface LocationData {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

interface WeatherData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      humidity: number;
    };
    weather: Array<{
      icon: string;
      description: string;
    }>;
    wind: {
      speed: number;
    };
  }>;
  city: {
    name: string;
    coord: Coordinates;
  };
}

class WeatherService {
  private baseURL: string;
  private apiKey: string;

  constructor() {
    this.baseURL = config.API_BASE_URL;
    this.apiKey = config.API_KEY;

    if (!this.apiKey) {
      console.error('Missing required environment variables:');
      console.error('API_KEY:', this.apiKey);
      console.error('API_BASE_URL:', this.baseURL);
      throw new Error('API_KEY is required - please check your .env file');
    }
  }

  private buildGeocodeQuery(city: string): string {
    return `${this.baseURL}/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${this.apiKey}`;
  }

  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${this.apiKey}`;
  }

  private async fetchLocationData(query: string): Promise<LocationData[]> {
    try {
      console.log('Fetching location data with query:', query);
      const response = await fetch(query);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Location data received:', data);
      return data as LocationData[];
    } catch (error) {
      console.error('Error fetching location data:', error);
      throw new Error('Failed to fetch location data');
    }
  }

  private destructureLocationData(locationData: LocationData[]): Coordinates {
    if (!locationData.length) {
      throw new Error('City not found');
    }
    const { lat, lon } = locationData[0];
    return { lat, lon };
  }

  private async fetchAndDestructureLocationData(city: string): Promise<Coordinates> {
    const query = this.buildGeocodeQuery(city);
    const locationData = await this.fetchLocationData(query);
    return this.destructureLocationData(locationData);
  }

  private async fetchWeatherData(coordinates: Coordinates): Promise<WeatherData> {
    try {
      const query = this.buildWeatherQuery(coordinates);
      console.log('Fetching weather data with query:', query);
      
      const response = await fetch(query);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Weather data received:', data);
      return data as WeatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
  }

  private parseCurrentWeather(weatherData: WeatherData, city: string): Weather {
    const current = weatherData.list[0];
    if (!current) {
      throw new Error('No current weather data available');
    }

    return {
      city,
      date: new Date(current.dt * 1000).toLocaleDateString(),
      icon: current.weather[0].icon,
      iconDescription: current.weather[0].description,
      tempF: Math.round(current.main.temp),
      windSpeed: Math.round(current.wind.speed),
      humidity: current.main.humidity
    };
  }

  private buildForecastArray(currentWeather: Weather, weatherData: WeatherData): Weather[] {
    const forecast: Weather[] = [];
    
    // Create a map to store one forecast per day (using the noon forecast)
    const dailyForecasts = new Map<string, typeof weatherData.list[0]>();
    const today = new Date().toDateString();
    
    // Group forecasts by day, preferring ones closer to noon
    weatherData.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateString = date.toDateString();
      
      // Skip today as we already have current weather
      if (dateString === today) {
        return;
      }

      const hours = date.getHours();
      const currentForecast = dailyForecasts.get(dateString);
      
      // Prefer forecasts between 11 AM and 2 PM
      if (!currentForecast || 
          (hours >= 11 && hours <= 14 && 
           Math.abs(12 - hours) < Math.abs(12 - new Date(currentForecast.dt * 1000).getHours()))) {
        dailyForecasts.set(dateString, item);
      }
    });

    // Add current weather as first item
    forecast.push(currentWeather);

    // Convert the map to an array and sort by date
    const sortedForecasts = Array.from(dailyForecasts.entries())
      .sort(([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime())
      .slice(0, 5); // Limit to 5 days

    // Add each day's forecast to the array
    sortedForecasts.forEach(([_, item]) => {
      forecast.push({
        city: currentWeather.city,
        date: new Date(item.dt * 1000).toLocaleDateString(),
        icon: item.weather[0].icon,
        iconDescription: item.weather[0].description,
        tempF: Math.round(item.main.temp),
        windSpeed: Math.round(item.wind.speed),
        humidity: item.main.humidity
      });
    });

    // Debug log
    console.log(`Generated forecast for ${forecast.length} days`);
    forecast.forEach(f => console.log(`Date: ${f.date}, Temp: ${f.tempF}°F`));

    return forecast;
  }

  async getWeatherForCity(city: string): Promise<Weather[]> {
    try {
      console.log(`Getting weather for city: ${city}`);
      const coordinates = await this.fetchAndDestructureLocationData(city);
      const weatherData = await this.fetchWeatherData(coordinates);
      const currentWeather = this.parseCurrentWeather(weatherData, city);
      return this.buildForecastArray(currentWeather, weatherData);
    } catch (error) {
      console.error('Error getting weather for city:', error);
      throw error;
    }
  }
}

export default new WeatherService();