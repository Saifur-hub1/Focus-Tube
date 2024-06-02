import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import FormDialog from "./components/DialogBox/dialogbox";
import AllPlayLists from "./components/PlayLists";
import usePlayLists from "./hooks/usePlaylists";
import { CssBaseline } from "@mui/material";

usePlayLists
const App =  () => {
  const { getPlayListById, PlayLists, exist, resetExist, setFavoriPlaylistById,removeFavoritePlaylistById } = usePlayLists();
  const [CentralPlayLists, setPlayLists] = useState(PlayLists);
  const [error, setError] = useState(null);

  const fetchData = async (link) => {
    try {
      await getPlayListById(link);
      console.log('fetchdata call diye')
      
    } catch (error) {
      setError(error);
      console.log("Error fetching data", error);
    }
  };
  useEffect(() => {
    setPlayLists(PlayLists);
    console.log('central playlist change', PlayLists);
  }, [PlayLists])
  console.log(CentralPlayLists);

  function getIsFavorite(state, id) {
    state ? setFavoriPlaylistById(id) : removeFavoritePlaylistById(id);
  }
  
  return (
    <CssBaseline>
      <Header />
      <FormDialog fetchData={fetchData} exist={exist} resetExist={resetExist} />
      <AllPlayLists PlayLists={CentralPlayLists} getIsFavorite={getIsFavorite} />
    </CssBaseline>
  );
}
export default App;