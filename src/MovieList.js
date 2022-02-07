import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export function MovieList({ movieList, setMovieList }) {
  const history = useHistory();
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
              style={{ marginLeft: "auto" }}
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
          editButton={
            <IconButton
              onClick={() => history.push(`/movie/edit/${index}`)}
              aria-label="delete"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          id={index}
        />
      ))}
      {/* <AddColor /> */}
      {/* <AddMovie/> */}
    </div>
  );
}
