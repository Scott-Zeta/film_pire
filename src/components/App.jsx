import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, Movies, MovieInfomation, NavBar, Profile } from './ComponentsIndex';

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/movie/:id">
          <MovieInfomation />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
