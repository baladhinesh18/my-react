import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

// function MovieDetails({ movieList }) {
  function MovieDetails() {
  const { id } = useParams();
  // console.log(movieList, id);

  // const movies = movieList[id];
  // console.log(movies);
  const [movies, setMovies] = useState ({});
  const getMovie = () => {
    fetch("https://6206596292dd6600171c09e1.mockapi.io/movies/" + id)
    .then((data)=> data.json())
    .then((mv)=> setMovies(mv));
  };
  useEffect(getMovie, []);
  const history = useHistory();

  return (
    <div>
      <iframe
        width="100%"
        height="750"
        src={movies.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movies.name}</h3>
          <p className="movie-rating"> ⭐{movies.rating}</p>
        </div>
        <p className="movie-summary"> {movies.summary}</p>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default MovieDetails;
