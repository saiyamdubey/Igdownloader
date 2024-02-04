import Instaloader from "instaloader"

async function Download(reelUrl: string) {
  const L = new Instaloader();
  try {
    const post = await L.getPostByUrl(reelUrl);
    const videoUrl = post.video_url;

    // You can implement your download logic here
    // For simplicity, let's just log the video URL
    console.log("Video URL:", videoUrl);
  } catch (err) {
    console.error("Error downloading reel:", err);
  }
}
// pm i --save-dev @types/instaloader
module.exports = {
  Download,
};
