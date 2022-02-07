import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movie);

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  return (
    <div className="inputbox">
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={poster}
        label="poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        label="rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        label="summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        label="trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          const copyMovieList = [...movieList];
          copyMovieList[id] = updatedMovie;
          setMovieList(copyMovieList);
          history.push("/movies");
        }}
        variant="contained"
        color="success"
      >
        Save
      </Button>
    </div>
  );
}
