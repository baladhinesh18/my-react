import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import Button from '@mui/material/Button';
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
// import Button from "@mui/material/Button";

export const Movie = ({
  name,
  poster,
  rating,
  summary,
  deleteButton,
  editButton,
  id,
}) => {
  // conditional styling
  const [toggle, setToggle] = useState(true);
  // const paraStyles = {display: toggle ? "Block" : "none"};
  const styles = { color: rating > "8.5/10" ? "teal" : "crimson" };
  const history = useHistory();
  console.log(history);

  // const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

  return (
    <Card className="container">
      {/* <div className="container"> */}

      <img src={poster} className="image" alt={name} />
      <CardContent>
        <div className="card">
          <h5 style={styles} className="star">
            <span className="clr">
              <i class="fas fa-star"></i>
            </span>
            {rating}
          </h5>
          <h2 className="title">{name}</h2>
        </div>

        {/* <p className="story">{summary}</p> */}

        {/* {/* conditional styling */}
        {/* <button onClick = {() => setToggle(!toggle)}>summary</button>
            <p style = {paraStyles} className="story">{summary}</p>  */}

        <IconButton onClick={() => setToggle(!toggle)} color="primary">
          {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <IconButton
          onClick={() => history.push(`/movies/${id}`)}
          color="primary"
        >
          <InfoIcon />
        </IconButton>

        {/* conditional rendering */}
        {toggle ? <p className="story">{summary}</p> : " "}
        {/* <SumToggle summary={summary}/> */}

        {/* material button */}
        {/* <Button onClick={() => setToggle(!toggle)} variant="contained">toggleSummary</Button> */}
      </CardContent>
      <CardActions className="del-count">
        {/* <div className="del-count"> */}

        <Counter />

        {deleteButton}
        {editButton}
        {/* </div> */}
      </CardActions>

      {/* </div> */}
    </Card>
  );
};
