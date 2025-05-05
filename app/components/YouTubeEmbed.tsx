const videoMap: Record<string, string> = {
  Clear: "VIDEO_ID1",
  Rain: "VIDEO_ID2",
  Snow: "VIDEO_ID3",
};

export default function YouTubeEmbed({ weatherType }: { weatherType: string }) {
  const videoId = videoMap[weatherType] || "기본ID";

  return (
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allowFullScreen
      className="rounded-lg shadow-lg"
    />
  );
}
