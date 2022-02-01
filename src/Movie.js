import { useState } from "react";
// import Button from '@mui/material/Button';
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Movie = ({ name, poster, rating, summary, }) => {


  // conditional styling
  const [toggle, setToggle] = useState(true);
  // const paraStyles = {display: toggle ? "Block" : "none"};
  const styles = { color: rating > "8.5/10" ? "teal" : "crimson" };
  return (
    <div className="container">

      {/* <Card variant="outlined" >{container} </Card>  */}
      <img src={poster} className="image" alt={name} />
      <div className="card">
        <h5 style={styles} className="star">
          <span className="clr">
            <i class="fas fa-star"></i>
          </span>
          {rating}
        </h5>
        <h2 className="title">{name}</h2>
      </div>
      <Counter />
      {/* <p className="story">{summary}</p> */}

      {/* {/* conditional styling */}
      {/* <button onClick = {() => setToggle(!toggle)}>summary</button>
            <p style = {paraStyles} className="story">{summary}</p>  */}
<IconButton onClick={() => setToggle(!toggle)} color="primary">{toggle ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</IconButton>

      {/* conditional rendering */}
      {toggle ? <p className="story">{summary}</p> : " "}
      {/* <SumToggle summary={summary}/> */}

      {/* material button */}
      {/* <Button onClick={() => setToggle(!toggle)} variant="contained">toggleSummary</Button> */}

    </div>
  );
};
