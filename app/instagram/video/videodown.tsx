"use server";

export async function Download(url: string) {
  try {
    
    const response = await fetch(`https://www.google.com/`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error downloading reel:", error);
  }
}
