export async function fetchQuote(weatherType: string) {
  const res = await fetch("/api/gpt", {
    method: "POST",
    body: JSON.stringify({ weatherType }),
  });
  return res.json();
}
