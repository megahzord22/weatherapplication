# Weather App

This application fetches weather forecasts using the OpenWeather API and styles its components using Emotion.

## Features

- **Weather Forecast**: Displays daily weather forecasts including high/low temperatures, precipitation probability, weather description, and icons.
- **API Integration**: Utilizes the OpenWeather API to fetch weather data for a specified city.
- **Styling**: Uses Emotion for CSS-in-JS to create a modern and responsive design.

## Getting Started

To run this application locally, follow these steps:

1. **Obtain an OpenWeather API Key**:
   - Sign up for an API key at [OpenWeather API](https://openweathermap.org/api).
   - Store your API key securely. You can use an environment variable to keep it private.

2. **Set Up Environment Variable**:
   - Create a `.env` file in the root directory.
   - Add your API key to the `.env` file:
     ```
     OPENWEATHER_API_KEY=your_api_key_here
     ```

3. **Install Dependencies**:
   - Open your terminal and navigate to the project directory.
   - Run `npm install` to install all required dependencies.

4. **Run the Application**:
   - After installing dependencies, start the application with `npm run dev`.
   - Open your web browser and go to [http://localhost:5173](http://localhost:5173) to view the app.

## Notes

- Ensure you have Node.js installed on your machine to run the application.
- This application uses Vite as the build tool. If you encounter any issues, refer to the Vite documentation for troubleshooting.
