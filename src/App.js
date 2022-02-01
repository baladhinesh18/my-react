import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import { AddColor } from "./AddColor";
import { Movie } from "./Movie";
import { Switch, Route, Link } from "react-router-dom";
import { Msg } from "./Msg";

// import Card from '@mui/material/Card';

export default function App() {
  const INITIAL_MOVIES = [
    {
      name: "JaiBhim",
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
      rating: "9.4/10",
      summary:
        "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
    },
    {
      name: "Doctor",
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSCe371X060CPHkKtpyC3IF5eXFvZdjyqgPXsUobjkQZOt9xY-",
      rating: "7.7/10",
      summary:
        "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa.",
    },
    {
      name: "Maanaadu",
      poster:
        "https://www.pinkvilla.com/imageresize/maanaadu_release_date_postponed.jpg?width=752&format=webp&t=pvorg",
      rating: "9.1/10",
      summary:
        "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
    },
    {
      name: "Frozen",
      poster:
        "https://boyertownstatetheatre.com/wp-content/uploads/2020/11/frozen-1.jpg",
      rating: "7.4/10",
      summary:
        "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale ,The Snow Queen.",
    },
    {
      name: "Bigil",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/f0/Bigil_poster.jpg",
      rating: "6.9/10",
      summary:
        "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
    },
    {
      name: "Singam",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoYmNj2o47l2QYedyzihk35vRVjzRMjKYAbpKR1VqShM11bF4",
      rating: "6.9/10",
      summary:
        "An honest police officer gets transferred to Chennai by an influential goon. Unable to gain any evidence against the wrong doings of the goon, he decides to head back to his village, his girlfriend encourages him to stay and fight back.",
    },
  ];

  //to add movie
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
<div><ul>
         <li><Link to="/home">Home</Link></li> 
         <li><Link to="/addcolor">AddColor</Link></li>
        <li><Link to="/movie">AddMovies</Link></li>
      </ul>
      <Switch>
      <Route path="/home">
          <Msg />
        </Route>
        <Route path="/addcolor">
          <AddColor />
        </Route>
        
        <Route path="/movie">
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
  
          <button
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
          </button>
        </div>
  
        <div className="wholeContainer">
        
     
        
        {/* {movieList.map(Movie)} */}
  
        {movieList.map(({ name, rating, poster, summary }, index) => (
          <Movie
            key={index}
            name={name}
            rating={rating}
            poster={poster}
            summary={summary}
          />
        ))}
        {/* <AddColor /> */}
        {/* <AddMovie/> */}
        </div>
        </Route>
      </Switch> 

      
    
    </div>
  );
}
