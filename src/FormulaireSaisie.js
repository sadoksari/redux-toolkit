import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTache } from "./reduxLib";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch() ;

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch ( addTache ( text ) ) ;
    
    setText("");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="textInput" required size="20"  maxLength={23}
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}        
      />
    </form>
  );
};

export default TaskForm;
