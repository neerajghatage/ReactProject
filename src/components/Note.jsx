import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function Deletenote() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={Deletenote}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
// "@material-ui/icons": "^4.11.3",