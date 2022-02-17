import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
// export function MovieList({ movieList, setMovieList }) {
export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch("https://6206596292dd6600171c09e1.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  }

  //Delete -> Refresh the list
  const deleteMovie = (id) => {
    fetch("https://6206596292dd6600171c09e1.mockapi.io/movies/" + id, {
      method: "DELETE",
    }).then(() => getMovie());
  };



  useEffect(getMovie, []);
  return (
    <div className="wholeContainer">
      {/* {movieList.map(Movie)} */}

      {movieList.map(({ name, rating, poster, summary, id }, index) => (
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
              onClick={() => 
                deleteMovie(id)}
                // console.log(id);
                // console.log(index);
                // const copyMovieList = [...movieList];
                // copyMovieList.splice(index, 1);
                // setMovieList(copyMovieList);
              
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              onClick={() => history.push(`/movie/edit/${id}`)}
              aria-label="delete"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          // id={index}
          id={id}
        />
      ))}
      {/* <AddColor /> */}
      {/* <AddMovie/> */}
    </div>
  );
}
