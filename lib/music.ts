export function getMusicRecommendation(weather: string) {
  switch (weather.toLowerCase()) {
    case "clear":
      return {
        title: "맑은 날씨에 어울리는 음악",
        url: "https://www.youtube.com/embed/iqRkTGkAs9I",
      };
    case "rain":
      return {
        title: "비 오는 날 듣기 좋은 음악",
        url: "https://www.youtube.com/embed/DkyMBXq43es",
      };
    case "clouds":
      return {
        title: "구름 낀 날 듣기 좋은 음악",
        url: "https://www.youtube.com/embed/arvjFi09eyg",
      };
    default:
      return {
        title: "기본 음악",
        url: "https://www.youtube.com/embed/CfPxlb8-ZQ0",
      };
  }
}
