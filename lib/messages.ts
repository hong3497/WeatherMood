// lib/messages.ts
export function getWeatherMessage(weather: string) {
  switch (weather.toLowerCase()) {
    case "clear":
      return "맑은 날이에요! 산책 어때요?";
    case "clouds":
      return "구름이 많네요. 흐림 주의!";
    case "rain":
      return "우산 꼭 챙기세요!";
    case "snow":
      return "와우 눈이 와요. 따뜻하게 입으세요!";
    case "thunderstorm":
      return "천둥번개가 쳐요. 외출은 주의!";
    case "drizzle":
      return "이슬비가 내려요. 옷은 우산도 좋아요.";
    case "mist":
      return "안개가 자욱하네요. 운전 조심!";
    default:
      return "오늘 날씨는 어떨까요? 확인해보세요!";
  }
}
