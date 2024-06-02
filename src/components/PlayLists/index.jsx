import { useEffect, useState } from "react";
import PlaylistCard from "../Card/PlayListCard";
import { Grid } from "@mui/material";
import usePlayLists from "../../hooks/usePlaylists";
const AllPlayLists = ({PlayLists, getIsFavorite}) => {
  console.log(PlayLists);
  return (
    <Grid container spacing={2}>
      {PlayLists.length != 0 &&
        Object.keys(PlayLists).map((key) => {
          const { ListDetail, isFavorites } = PlayLists[key];
          // console.log(PlayLists);
          return (
            <Grid item key={key}>
              <PlaylistCard
                id={key}
                ListDetail={ListDetail}
                getIsFavorite={getIsFavorite}
                isFavorites={isFavorites}
              />
            </Grid>
          );
        }
        )}
    </Grid>
  );
}

export default AllPlayLists;