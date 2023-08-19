import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

import {
  useGetActorsDetailsQuery,
  useGetActorMovieCreditDetailsQuery,
} from "../../services/TMDB";
import useStyles from "./styles";

const ActorCredits = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();

  const { data: base } = useGetActorsDetailsQuery(id);
  const { data, isFetching, error } = useGetActorMovieCreditDetailsQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="Center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }

  console.log(data);
  const movie = [...data.cast];
  movie.sort((a, b) => {
    return b.popularity - a.popularity;
  });

  console.log(movie);

  return (
    <>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w780/${base?.profile_path}`}
          alt={base.name}
        ></img>
        <Typography variant="h2" gutterBottom marginTop="12px">
          {base?.name}
        </Typography>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Back
        </Button>
      </Grid>

      <div className={classes.mainList}>
        {movie
          ?.map((i) => (
            <div key={i.credit_id}>
              <List className={classes.insideList}>
                <ListItem>
                  <Link to={`/movie/${i?.id}`}>
                    <img
                      className={classes.creditImage}
                      src={`https://image.tmdb.org/t/p/w780/${
                        i?.poster_path ? i?.poster_path : base?.profile_path
                      }`}
                      alt={base.name}
                    ></img>
                  </Link>
                  <ListItemText
                    style={{ marginTop: "0" }}
                    primary={i?.title}
                    secondary={i?.character}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText style={{ textAlign: "end" }}>
                    {i.release_date.split("-")[0]}
                  </ListItemText>
                </ListItem>
              </List>
              <Divider style={{ borderWidth: "1.5px" }} />
            </div>
          ))
          .slice(0, 35)}
      </div>
    </>
  );
};

export default ActorCredits;
