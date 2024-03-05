import { useDispatch } from "react-redux";
import { deleteTache, toggleTache, majTache } from "./reduxLib";

const TaskItem = (props) => {
  
  const { task } = props;
  const dispatch  = useDispatch();

  return (
    <div className="ligneTache">     

        <input className="check" 
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch( toggleTache(task.id) ) }
        />
        
        {task.text}        
        
        <div className="boutons">
          <button className="buttonDel"  onClick = {() => dispatch (deleteTache(task.id))}> 
             Del 
          </button>

          <button  className="buttonUpd"  onClick={() => dispatch( majTache(task.id ) ) } >
             Upd
          </button>
        </div>

    </div>
  );
};

export default TaskItem;
