import { useParams } from "react-router-dom";

 function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(movieList, id);

  const movies = movieList[id];
  console.log(movies);


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
      </div>
    </div>
  );
}


export default MovieDetails