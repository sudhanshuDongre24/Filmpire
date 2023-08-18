import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import useStyles from "./components/styles";

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
  ActorCredits,
} from "./components";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />}></Route>
          <Route exact path="/actors/:id" element={<Actors />}></Route>
          <Route exact path="/" element={<Movies />}></Route>
          <Route exact path="/profile/:id" element={<Profile />}></Route>
          <Route
            exact
            path="/actors/movie_credits/:id"
            element={<ActorCredits />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
