export async function fetchWeather(lat: number, lon: number) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );

  if (!res.ok) throw new Error("날씨 정보를 불러오지 못했어요.");

  return res.json();
}
