import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [x,y]=useState(false);
  const [note, setnote] = useState({ title: "", content: "" });
  function Handle(event) {
    const { name, value } = event.target;
    setnote((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function Av()
  {
    y(true);
  }
  function Card(event) {
    setnote({ title: "", content: "" });
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {
          x ? <input
          name="title"
          onChange={Handle}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onClick={Av}
          onChange={Handle}
          value={note.content}
          placeholder="Take a note..."
          rows={x ? 3:1}
        />
        <Zoom in={x}>
        <Fab onClick={Card}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
