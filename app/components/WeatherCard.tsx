"use client";

import { useEffect, useState } from "react";
import { getWeatherMessage } from "../../lib/messages";
import { getMusicRecommendation } from "../../lib/music";
import { WeatherData } from "../../types/weather";

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  const main = weather.weather[0].main.toLowerCase();
  const message = getWeatherMessage(main);
  const [music, setMusic] = useState<{ title: string; url: string } | null>(
    null
  );

  useEffect(() => {
    const fetchMusic = async () => {
      const result = await getMusicRecommendation(main);
      setMusic(result);
    };
    fetchMusic();
  }, [main]);

  const emojiMap: { [key: string]: string } = {
    clear: "☀️",
    clouds: "⛅",
    rain: "🌧️",
    thunderstorm: "🌩️",
    snow: "❄️",
    mist: "🌫️",
    drizzle: "🌦️",
    haze: "🌁",
    default: "🌈",
  };

  const emoji = emojiMap[main] || emojiMap["default"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center space-y-2">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <div className="text-5xl">{emoji}</div>
      <p className="text-gray-700">{weather.weather[0].description}</p>
      <p className="text-3xl font-semibold">{weather.main.temp}°C</p>
      <p className="text-sm text-gray-600">
        Humidity: {weather.main.humidity}%
      </p>
      <p className="mt-2 text-blue-700 font-medium">{message}</p>

      {music && (
        <>
          <iframe
            className="mt-4 rounded-xl shadow-md"
            width="300"
            height="170"
            src={`${music.url}?autoplay=1&mute=1`}
            title="Recommended Music"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allow="autoplay"
          ></iframe>
          <p className="text-sm mt-1 text-gray-500">{music.title}</p>
        </>
      )}
    </div>
  );
}
