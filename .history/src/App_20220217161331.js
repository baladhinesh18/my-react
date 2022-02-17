import { useState } from "react";
import "./App.css";

import { AddColor } from "./AddColor";
import { AddMovie } from "./AddMovie";
import { useHistory } from "react-router-dom";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Msg } from "./Msg";
import { MovieList } from "./MovieList";
import { NotFound } from "./NotFound";
// import { Movie } from "./Movie";
import MovieDetails from "./MovieDetails";
import { EditMovie } from "./EditMovie";
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicForm } from "./BasicForm";
import AddIcon from '@mui/icons-material/Add';

export default function App() {
  
  
  // const INITIAL_MOVIES = [
  //   {
  //     name: "JaiBhim",
  //     poster:
  //       "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
  //     rating: "9.4/10",
  //     summary:
  //       "When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.",
  //     trailer: "https://www.youtube.com/embed/Gc6dEDnL8JA",
  //   },

  //   {
  //     name: "Doctor",
  //     poster:
  //       "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSCe371X060CPHkKtpyC3IF5eXFvZdjyqgPXsUobjkQZOt9xY-",
  //     rating: "7.7/10",
  //     summary:
  //       "A military doctor embarks on a journey to track down his former fiancee's kidnapped niece. His mission then leads him to the heart of a human trafficking ring in Goa.",
  //     trailer: "https://www.youtube.com/embed/oQiH_Iw0kDs",
  //   },

  //   {
  //     name: "Maanaadu",
  //     poster:
  //       "https://www.pinkvilla.com/imageresize/maanaadu_release_date_postponed.jpg?width=752&format=webp&t=pvorg",
  //     rating: "9.1/10",
  //     summary:
  //       "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
  //     trailer: "https://www.youtube.com/embed/t9retstFUlM",
  //   },
  //   {
  //     name: "Frozen",
  //     poster:
  //       "https://boyertownstatetheatre.com/wp-content/uploads/2020/11/frozen-1.jpg",
  //     rating: "7.4/10",
  //     summary:
  //       "Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 53rd Disney animated feature film, it is inspired by Hans Christian Andersen's fairy tale ,The Snow Queen.",
  //     trailer: "https://www.youtube.com/embed/TbQm5doF_Uc",
  //   },
  //   {
  //     name: "Bigil",
  //     poster: "https://upload.wikimedia.org/wikipedia/en/f/f0/Bigil_poster.jpg",
  //     rating: "6.9/10",
  //     summary:
  //       "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
  //     trailer: "https://www.youtube.com/embed/GR-Ui8-V2M0",
  //   },
  //   {
  //     name: "Singam",
  //     poster:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoYmNj2o47l2QYedyzihk35vRVjzRMjKYAbpKR1VqShM11bF4",
  //     rating: "6.9/10",
  //     summary:
  //       "An honest police officer gets transferred to Chennai by an influential goon. Unable to gain any evidence against the wrong doings of the goon, he decides to head back to his village, his girlfriend encourages him to stay and fight back.",
  //     trailer: "https://www.youtube.com/embed/96CgGu1JYbY",
  //   },
  // ];
  
  const history=useHistory();
  
  
  const [mode,setMode]=useState("light")
  const theme = createTheme({
    palette: {
      mode:mode,
    },
  });
  //to add movie
  const [movieList, setMovieList] = useState();

  return (
    <div>
    <ThemeProvider theme={theme}>
       <Paper sx={{borderRadius: "0px", minHeight:"100vh"}} elevation={8}>
       <AppBar classsName="app-bar"position="static">
        <Toolbar>
          
            <MenuIcon />
         
          <Button onClick={()=>history.push("/")} color="inherit">Home</Button>
          <Button onClick={()=>history.push("/movies")} color="inherit">MovieList</Button>
          <Button onClick={()=>history.push("/addcolor")} color="inherit">AddColor</Button>
          <Button onClick={()=>history.push("/addmovie")} color="inherit">AddMovie</Button>
          <Button startIcon={<AddIcon />} 
          onClick={()=> history.push("/form")}
          color="inherit">
            Form
          </Button>
          <Button sx={{marginLeft:"auto"}}  
          startIcon={theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={()=>setMode(mode==="dark" ? "light" : "dark")} color="inherit">
          {mode === "dark"? "light":"dark"} mode
          </Button>
          
    
           
        </Toolbar>
      </AppBar>
    
     
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addcolor">AddColor</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movies</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
        </li>
      </ul> */}
      <section className="route-content">
      <Switch>
        <Route exact path="/">
          <Msg />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        {/* Route with parameter */}

        <Route path="/addcolor">
          <AddColor />
        </Route>
        <Route path="/addmovie">
          <AddMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>
        <Route exact path="/movies">
          <MovieList/> 
          {/* movieList={movieList} setMovieList={setMovieList}  */}
        </Route>
        <Route path="/movie/edit/:id">
          <EditMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails/>
           {/* movieList={movieList}  */}
        </Route>
        <Route path="/form">
          <BasicForm />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
      </section>
</Paper>
    </ThemeProvider>
    </div>
  );
    }

  