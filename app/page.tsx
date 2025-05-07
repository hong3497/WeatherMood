"use client";

import { useEffect, useState } from "react";
import { fetchWeather } from "../lib/weather";
import WeatherCard from "./components/WeatherCard";
import { WeatherData } from "../types/weather";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const data = await fetchWeather(
          pos.coords.latitude,
          pos.coords.longitude
        );
        setWeather(data);
      });
    }
  }, []);

  const main = weather?.weather?.[0]?.main?.toLowerCase();
  const bgUrl = main ? `/weather-bg/${main}.jpg` : "";

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <p className="text-white text-xl">Loading weather data...</p>
      )}
    </main>
  );
}
