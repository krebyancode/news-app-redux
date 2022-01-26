import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewsThunk } from "../redux/thunks/newsThunk";

const News = () => {
  const dispatch = useDispatch();

  const { newsList } = useSelector((state) => state.news);
  // console.log(newsList);

  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  return (
    <>
      <h1>News</h1>
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-evenly"
        flexWrap="wrap"
        backgroundColor="lightcyan"
      >
        {newsList.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345, m: 5 }}>
            <CardMedia
              component="img"
              height="140"
              image={
                item?.image?.thumbnail?.contentUrl ||
                "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.name || "Tesla disables gaming while driving feature"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.description ||
                  "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default News;
