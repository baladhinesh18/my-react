// import { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

// // export function EditMovie({ movieList, setMovieList }) {
// export function EditMovie() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   useEffect(() => {
//     fetch("https://6206596292dd6600171c09e1.mockapi.io/movies/" + id)
//       .then((data) => data.json())
//       .then((mv) => setMovie(mv));
//   }, []);
//   console.log(id, movie);
//   return movie ? <EditMovieForm movie={movie} /> : "";
// }

// function EditMovieForm({ movie }) {
//   const [name, setName] = useState(movie.name);
//   const [poster, setPoster] = useState(movie.poster);
//   const [rating, setRating] = useState(movie.rating);
//   const [summary, setSummary] = useState(movie.summary);
//   const [trailer, setTrailer] = useState(movie.trailer);
//   const setMovieName = (event) => setName(event.target.value);
//   const history = useHistory();

//   return (
//     <div className="inputbox">
//       <TextField
//         value={name}
//         label="Name"
//         variant="outlined"
//         onChange={setMovieName}
//         // onChange={(event) => setName(event.target.value)}
//       />
//       <TextField
//         value={poster}
//         label="poster"
//         variant="outlined"
//         onChange={(event) => setPoster(event.target.value)}
//       />
//       <TextField
//         value={rating}
//         label="rating"
//         variant="outlined"
//         onChange={(event) => setRating(event.target.value)}
//       />
//       <TextField
//         value={summary}
//         label="summary"
//         variant="outlined"
//         onChange={(event) => setSummary(event.target.value)}
//       />
//       <TextField
//         value={trailer}
//         label="trailer"
//         variant="outlined"
//         onChange={(event) => setTrailer(event.target.value)}
//       />

//       <Button
//         onClick={() => {
//           const updatedMovie = {
//             name: name,
//             poster: poster,
//             rating: rating,
//             summary: summary,
//             trailer: trailer,
//           };
//           fetch(
//             "https://6206596292dd6600171c09e1.mockapi.io/movies/" + movie.id,
//             {
//               method: "PUT",
//               body: JSON.stringify(updatedMovie),
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           ).then(() => history.push("/movies"));
//           // setMovieList([...movieList, newMovie]);
//           // history.push("/movies");

//           // const copyMovieList = [...movieList];
//           // copyMovieList[id] = updatedMovie;
//           // setMovieList(copyMovieList);
//           // history.push("/movies");
//         }}
//         variant="contained"
//         color="success"
//       >
//         Save
//       </Button>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema=yup.object({
  name:yup
  .string()
  .min(3,"Need a bigger name 😊")
  .required(" A cool name is in need 😊"),
  poster: yup.string().required("A cool poster is in need😊"),
  rating: yup.number().required(" Need some rating😊"),
  summary: yup
    .string()
    .min(20, "Lets think about the summary😊😊")
    .required("A cool description is in need😊"),
  trailer: yup.string().required("A trailer is in need😊"),
});


export function EditMovie() {
  const history = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch("https://620657c292dd6600171c09cb.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  console.log(id, movie);
  // return movie ? <EditMovieForm movie={movie} /> : "";


// function EditMovieForm({ movie }) {
  const editMovie = (updatedMovie) =>{
    fetch(
      "https://620657c292dd6600171c09cb.mockapi.io/movies/" + id,
      {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => history.push("/movies"));
    }
  
  const { handleSubmit, handleChange, handleBlur,values, errors, touched } =
    useFormik({
      initialValues: {
        movie:"" ,
        poster:"" ,
        rating:"" ,
        summary:"" ,
        trailer: "",
      },
      
      validationSchema: movieValidationSchema,
      onSubmit: 
      (updatedMovie) => {
      console.log("onSubmit", updatedMovie);
      editMovie(updatedMovie)
      },
    });

  return (
    <div onSubmit={handleSubmit} className="inputbox">
      <TextField
        value={values.name}
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
      />
      <TextField
        value={values.poster}
        id="poster"
        name="poster"
        label="poster"
        variant="outlined"
        onChange={handleChange}
          onBlur={handleBlur}
          error={errors.poster && touched.poster}
          helperText={errors.poster && touched.poster && errors.poster}
      />
      <TextField
        value={values.rating}
        id="rating"
        name="rating"
        label="rating"
        variant="outlined"
        onChange={handleChange}
          onBlur={handleBlur}
          error={errors.rating && touched.rating}
          helperText={errors.rating && touched.rating && errors.rating}
      />
      <TextField
        value={values.summary}
        id="summary"
        name="summary"
        label="summary"
        variant="outlined"
        onChange={handleChange}
          onBlur={handleBlur}
          error={errors.summary && touched.summary}
          helperText={errors.summary && touched.summary && errors.summary}
      />
      <TextField
        value={values.trailer}
        id="trailer"
        name="trailer"
        label="trailer"
        variant="outlined"
        onChange={handleChange}
          onBlur={handleBlur}
          error={errors.trailer && touched.trailer}
          helperText={errors.trailer && touched.trailer && errors.trailer}
      />
      <Button
       
        variant="contained"
        color="success"
      >
        Save
      </Button>
    </div>
  );
}
