// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useHistory } from "react-router-dom";


// export function AddMovie({ movieList, setMovieList }) {
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer, setTrailer] = useState("");

//   const history = useHistory();
//   return (
//     <div className="inputbox">
//       <TextField
//         value={name}
//         label="Name"
//         variant="outlined"
//         onChange={(event) => setName(event.target.value)}
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
//       {/* <input value={name} placeholder="Name" onChange={(event)=> setName(event.target.value)}/>
//            <input value={poster} placeholder="poster" onChange={(event)=> setPoster(event.target.value)}/>
//            <input value={rating} placeholder="rating" onChange={(event)=> setRating(event.target.value)}/>
//            <input value={summary} placeholder="summary" onChange={(event)=> setSummary(event.target.value)}/> */}
//       <Button
//         onClick={() => {
//           const newMovie = {
//             name: name,
//             poster: poster,
//             rating: rating,
//             summary: summary,
//             trailer: trailer,
//           };
          

//         //    1.method-Post
//         //  2.body- data & JSON. stringify(JSON data)
//         //   3.headers- JSON data

//         fetch ("https://6206596292dd6600171c09e1.mockapi.io/movies", {
//           method:"POST",
//           body: JSON.stringify(newMovie),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }).then(()=> history.push("/movies"));
//         // setMovieList([...movieList, newMovie]);
//           // history.push("/movies");
//         }}
//         variant="contained"
//       >
//         AddMovie
//       </Button>
//       {/* <button
//             onClick={() => {
//               const newMovie = {
//                 name: name,
//                 poster: poster,
//                 rating: rating,
//                 summary: summary,
//               };
//               setMovieList([...movieList, newMovie]);
//             }}
//           >
//             Add Movie
//           </button> */}
//     </div>
//   );
// }




// input box validation
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
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
  


export function AddMovie() {
  
  const history = useHistory();

  const addMovie = (newMovie) => {
    
     fetch("https://6206596292dd6600171c09e1.mockapi.io/movies", {
              method: "POST",
              body: JSON.stringify(newMovie),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(() => history.push("/movies"));
  };
  const { handleSubmit, handleChange, handleBlur,values, errors, touched } =
    useFormik({
      initialValues: {
        movie: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      
      validationSchema: movieValidationSchema,
      onSubmit: 
      (newMovie) => {
      console.log("onSubmit", newMovie);
      addMovie(newMovie)
      },
    });
  return (
    <form onSubmit={handleSubmit}className="inputbox">
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
        type="submit"
        
        // onClick={() => {
        //   const newMovie = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer,
        //   };
          

        //    1.method-Post
        //  2.body- data & JSON. stringify(JSON data)
        //   3.headers- JSON data

      //   fetch ("https://6206596292dd6600171c09e1.mockapi.io/movies", {
      //     method:"POST",
      //     body: JSON.stringify(newMovie),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }).then(()=> history.push("/movies"));
      //   // setMovieList([...movieList, newMovie]);
      //     history.push("/movies");
      //    }
      // }
        variant="contained"
      >
        AddMovie
      </Button>
      
    </form>
  );
}
