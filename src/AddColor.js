import { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

// function AddMovie(){
//   const [movie,setMovie] = useState({});
//   const styles = { name, poster, rating, summary}
//   const [movieList,setMovieList] = useState({movieList})
//   return(
//     <div>
//       <TextareaAutosize
//   aria-label={movie}
//   placeholder="Enter movie"
//   style = {styles}
//     onChange = {(event) => setMovie(event.target.value)}
// />
//     <button onClick= {()=>setMovieList({...movieList,movie})}>AddMovie</button>
//     {movieList.map((cini)=> (<Movie { name, poster, rating, summary} = {cini}/>)}
//       </div>
//   )
// }
export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = { background: color };
  // const colorList = ["orange" , "crimson" , "cyan"];
  const [colorList, setColorList] = useState(["orange", "crimson", "cyan"]);
  return (
    <div className="color">
      {/* <input
            value={color} placeholder = "Enter a color" style = {styles}
            onChange = {(event) => setColor(event.target.value)}
            /> */}

      {/* material input */}
      <TextareaAutosize
        aria-label={color}
        placeholder="Enter a color"
        style={styles}
        onChange={(event) => setColor(event.target.value)} />
        
      {colorList.map((clr) => (<ColorBox cool={clr} />))}
      <br/>
      <Button onClick={() => setColorList([...colorList, color])} variant="contained">AddColor</Button>
      {/* <button onClick={() => setColorList([...colorList, color])}>AddColor</button> */}
    </div>
  );
}
function ColorBox({ cool }) {
  const styles = {
    height: "20px",
    width: "200px",
    background: cool,
    marginTop: "10px",
    
  };
  return <div style={styles}></div>;
}
