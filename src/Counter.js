import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

// using separate component is conditional rendering
// const SumToggle =({summary}) =>{
//   const [toggle, setToggle] = useState(false);
//   const toggler = () =>setToggle(!toggle)
//   return(
//     <div className="sum-btn">
//       {/* {toggle ? <p className="story"> {summary}</p> : null } */}
//     <button  onClick={toggler}>Summary {toggle? <p className="story">{summary}</p>  : null}</button>
//     </div>
//   );
// }
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      {/* <button onClick={() => setLike(like + 1)}>👍{like}</button> */}
      {/* <button onClick={() => setDisLike(dislike + 1)}>👎{dislike}</button> */}
      {/* <Button onClick={() => setDisLike(dislike + 1)} variant="outlined" color="error">👎{dislike}
          
        </Button> */}
      <IconButton onClick={() => setLike(like + 1)} aria-label="delete" color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton onClick={() => setDisLike(dislike + 1)} aria-label="delete" color="error">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
