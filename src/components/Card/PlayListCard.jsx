import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  IconButton,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";

const PlaylistCard = ({ ListDetail, id, getIsFavorite, isFavorites }) => {
  const [Favorite, setFavorite] = useState(isFavorites);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    setFavorite(!isFavorites);
    getIsFavorite(!isFavorites, id);
  };
  useEffect(() => {
    setFavorite(isFavorites);
  }, [isFavorites])

  const handleStartCourseClick = (event) => {
    event.stopPropagation();
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        width: 240,
        backgroundColor: "aliceblue",
      }}
      disableripple
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={120}
          width={240}
          image={ListDetail.thumbnails.url}
          alt={ListDetail.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginBottom: "25px",
            }}
            title={ListDetail.title}
          >
            {ListDetail.title}
          </Typography>
          <Stack direction="row" spacing={3}>
            <IconButton onClick={handleFavoriteClick}>
              {Favorite ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon color="error" />
              )}
            </IconButton>
            <Button onClick={handleStartCourseClick} variant="outlined">
              Start Course
            </Button>
          </Stack>
          <Box>
            <IconButton
              onClick={handleDeleteClick}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "aliceblue",
                "&:hover": {
                  backgroundColor: "pink",
                },
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaylistCard;
