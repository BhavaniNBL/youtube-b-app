//getting api key from "https://console.cloud.google.com/apis/credentials?project=my-project-youtube-426215&supportedpurview=project"
const GOOGLE_API_KEY = "AIzaSyA4_s1BcTbB7UrBR2iQosx04vDhhrIcbuY";

// getting url from this website https://developers.google.com/youtube/v3/docs/videos/list
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;

// export const YOUTUBE_SEARCH_API_SUGGESTION = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=";
export const YOUTUBE_SEARCH_API =
// "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${GOOGLE_API_KEY}&q=";
// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[GOOGLE_API_KEY]"
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";




