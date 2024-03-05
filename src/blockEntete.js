
import { useSelector} from "react-redux" ;
const TasksHeader = () => {

  const tasks = useSelector(state =>state.listTodo) ;
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header id="entete">
      <h1>Liste Des Taches  Faire </h1>
      <p>
        Taches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
