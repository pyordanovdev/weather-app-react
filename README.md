# Weather App 🌤️

This Weather App is a React-based application that allows users to search for weather data, view location-specific forecasts, and save their favorite locations. The app uses the OpenWeather API for weather data and includes a responsive map, carousel for forecast details, and data tables for better visualization.

## 🛠️ Technologies Used

- **React** and **React DOM** - for building UI components
- **HTML** and **CSS** - for app structure and styling
- **MUI React Tables** - to display forecast data in an organized table format
- **React Slick Carousel** - for an interactive and scrollable weather forecast view
- **React Leaflet** - for displaying and interacting with maps
- **React Icons** - for iconography across the UI
- **Vite** - for faster, optimized development builds
- **Eslint** - for code quality and consistency

## 🌟 Features

- **Location Search** - Look up the weather for various locations worldwide
- **OpenWeather API Integration** - Fetches real-time weather data
- **5-Day, 3-Hour Interval Forecast** - Displays weather forecast for each location in 3-hour increments
- **Interactive Map** - Shows the selected location on an interactive map with a marker
- **Favorite Locations with LocalStorage** - Save and access favorite locations using local storage history
- **Current Location Support** - Use the device’s location to get instant weather data

## 🚀 Getting Started

To get started with this project:

1. Clone the repository to your local machine.
2. Open a terminal, navigate to the project directory, and install dependencies:

   ```bash
   npm install
   ```

3. Add your OpenWeather API key to the .env file:

   ```bash
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Run the app in development mode:

```bash
   npm run dev
```

The app should now be running locally, and you can open it in your browser to start exploring the features!
