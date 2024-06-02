import axios from "axios";

const API_KEY = 'AIzaSyD1HpdnK1l6w9WiRLiHAaaVIKDaZuvave8';

const PlayListItem = () => {
  const getPlaylist = async (playlistId, pageToken='', result = []) => {
  
  try {
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        key: API_KEY,
        part: 'id, contentDetails, snippet',
        maxResults: 50,
        playlistId: playlistId,
        pageToken: pageToken
      }
    })
    result = [...result, ...data.items];
    if (data.nextPageToken) {
      result = getPlaylist(playlistId, pageToken = data.nextPageToken, result);
    }
    
    return result;  
  } catch(error) {
    console.log('Error fetching playlist data', error);
    throw error;
  }
  }
  
  const getPlaylistDetail = async (playlistId)=>{
    try {
      const {data} = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
        params: {
          key: API_KEY,
          id: playlistId,
          part: 'contentDetails, id, snippet, player'
        }
      })

      return data.items[0].snippet;
    } catch(error) {
      console.log('Error fetching playlist detail', error);
      throw error;
    }
  }
  
  return {
    getPlaylist,
    getPlaylistDetail
  }
}

export default PlayListItem;