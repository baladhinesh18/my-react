import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
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
      {/* <input value={name} placeholder="Name" onChange={(event)=> setName(event.target.value)}/>
           <input value={poster} placeholder="poster" onChange={(event)=> setPoster(event.target.value)}/>
           <input value={rating} placeholder="rating" onChange={(event)=> setRating(event.target.value)}/>
           <input value={summary} placeholder="summary" onChange={(event)=> setSummary(event.target.value)}/> */}
      <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };
          setMovieList([...movieList, newMovie]);
        }}
        variant="contained"
      >
        AddMovie
      </Button>
      {/* <button
            onClick={() => {
              const newMovie = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
              };
              setMovieList([...movieList, newMovie]);
            }}
          >
            Add Movie
          </button> */}
    </div>
  );
}
