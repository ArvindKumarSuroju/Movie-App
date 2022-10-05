import React, { useState, useEffect } from "react";
import { Box, Center } from "native-base";
import MoviesDropDown from "../containers/MoviesDropdown";
import MovieList from "../list/MovieList";
import { getMovies } from "../services/api";

const Movies = ({ navigation }) => {
  const [service, setService] = useState("popular");
  const [movieList, setMovieList] = useState("");

  const allMovies = async () => {
    const movies = await getMovies(service);
    setMovieList(movies.results);
  };

  useEffect(() => {
    allMovies();
  }, [service]);

  return (
    <Box flex="1">
      <Center>
        <MoviesDropDown service={service} setService={setService} />
      </Center>
      <Box flex={1}>
        <MovieList movieList={movieList} navigation={navigation} />
      </Box>
    </Box>
  );
};

export default Movies;
