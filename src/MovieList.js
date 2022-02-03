import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
export function MovieList({ movieList, setMovieList }) {
  return (
    <div className="wholeContainer">
      {/* {movieList.map(Movie)} */}

      {movieList.map(({ name, rating, poster, summary }, index) => (
        <Movie
          key={index}
          name={name}
          rating={rating}
          poster={poster}
          summary={summary}
          deleteButton={
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => {
                console.log(index);
                const copyMovieList = [...movieList];
                copyMovieList.splice(index, 1);
                setMovieList(copyMovieList);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
      {/* <AddColor /> */}
      {/* <AddMovie/> */}
    </div>
  );
}
