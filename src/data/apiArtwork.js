export async function getArtWork() {
  const response = await fetch(" http://localhost:9000/data");
  const data = response.json();
  return data;
}
