import axios from "axios";

const API_KEY = 'AIzaSyD1HpdnK1l6w9WiRLiHAaaVIKDaZuvave8';
const playlistId = "PL_XxuZqN0xVAw_wmOs1iVfdFGiAX-wGKF";
const getPlaylist = async () => {
  
  try {
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        key: API_KEY,
        part: 'id, contentDetails, snippet',
        maxResults: 50,
        playlistId: playlistId
      }
    })

    return {
      data
    }
  } catch(error) {
    console.log('Error fetching playlist data', error);
    throw error;
  }

  return {
    playList
  }
}

export default getPlaylist;

/*
try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        key: API_KEY,
        part: 'id,contentDetails,snippet',
        maxResults: 50,
        playlistId: playlistId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist data', error);
    throw error;  // Rethrow the error after logging it
  }
*/