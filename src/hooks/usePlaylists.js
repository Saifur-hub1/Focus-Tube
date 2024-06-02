import { useEffect, useState } from "react";
import PlayListItem from "../api/index";

const usePlayLists = () => {
  const [PlayLists, setPlayLists] = useState(
    () => {
      const savedPlaylist = localStorage.getItem('playlists');
      return savedPlaylist ? JSON.parse(savedPlaylist) : {};
    }
  );
  const [exist, setExist] = useState(false);
  const { getPlaylist, getPlaylistDetail } = PlayListItem();

  const getPlayListById = async (playListId) => {
    if (PlayLists[playListId]) {
      console.log('Playlist already exists', PlayLists[playListId]);
      setExist(true);
      return;
    }
    let result = await getPlaylist(playListId);
    const playListDetail = await getPlaylistDetail(playListId);
    const ListDetail = {
      channelTitle: playListDetail.channelTitle,
      channelId: playListDetail.channelId,
      description: playListDetail.description,
      title: playListDetail.title,
      thumbnails: playListDetail.thumbnails.high
    };
    setPlayLists(previous => {
      const updatedPlaylists = {
      ...previous,
      [playListId]: {
        result,
        ListDetail,
        id: playListId,
        isFavorites: false
      }
      }
      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
      return updatedPlaylists;
    });
  };

  const setFavoriPlaylistById = (id) => {
    console.log('add to favorite');
    setPlayLists(previos => {
      const updatedPlaylists = {
        ...previos,
        [id]: {
          ...previos[id],
          isFavorites:  true  
        }
        
      }
      console.log(updatedPlaylists);
      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
      return updatedPlaylists;
    })
  };

  const removeFavoritePlaylistById = (id) => {
    console.log('remove from favorite');
    setPlayLists(previos => {
      const updatedPlaylists = {
        ...previos,
        [id]: {
          ...previos[id],
          isFavorites: false
        }
        
      }
      console.log(updatedPlaylists);
      localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
      return updatedPlaylists;
    });
  };

  const getRecentPlaylists = () => {
    //TODO: Your implementation for recent playlists
  };

  function resetExist() {
    setExist(false);
  }

  return {
    PlayLists,
    exist,
    getPlayListById,
    resetExist,
    getRecentPlaylists,
    setFavoriPlaylistById,
    removeFavoritePlaylistById,
  };
};

export default usePlayLists;
