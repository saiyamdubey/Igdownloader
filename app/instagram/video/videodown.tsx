export async function Download(url: string) {
  try {
    const data = await fetch("api/instagramdata");
    // const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error downloading reel:", error);
  }
}
