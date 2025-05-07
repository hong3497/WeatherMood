"use client";

import { useEffect, useState } from "react";
import { fetchWeather } from "../lib/weather";
import WeatherCard from "./app/components/WeatherCard";
import { WeatherData } from "../types/weather";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const data = await fetchWeather(
            pos.coords.latitude,
            pos.coords.longitude
          );
          setWeather(data);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setError("위치 정보 접근이 거부되었습니다. 권한을 허용해주세요.");
        }
      );
    } else {
      setError("이 브라우저는 위치 정보를 지원하지 않아요.");
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
      {error ? (
        <p className="text-red-500 text-xl">{error}</p>
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <p className="text-white text-xl">Loading weather data...</p>
      )}
    </main>
  );
}
