export async function searchYouTube(query: string) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const maxResults = 1;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${encodeURIComponent(
      query
    )}&key=${apiKey}`
  );

  const data = await res.json();
  if (!data.items || data.items.length === 0) return null;

  const videoId = data.items[0].id.videoId;
  const title = data.items[0].snippet.title;

  return {
    title,
    url: `https://www.youtube.com/embed/${videoId}`,
  };
}
