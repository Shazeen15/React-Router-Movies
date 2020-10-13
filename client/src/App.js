import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const movieLink = 'http://localhost:5000/api/movies';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(movieLink) // Study this endpoint with Postman
        .then(response => {
          let movieList = response.data;
          // console.log(movieList);
          setMovieList(movieList);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path='/movies/:id'>
          <Movie movies={movieList}></Movie>
        </Route>
        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>
      </Switch>
      
    </div>
  );
}
