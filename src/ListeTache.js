
import { useSelector } from 'react-redux';
import TaskItem from "./LigneTache";
 

const TasksList = () => {

  const tasks = useSelector(  state => state.listTodo ) ;

  return (
    <div >  
      {tasks.map((t) => (
              <TaskItem  task={t}  key={t.id}  />
      ))}
    </div>
  );
};

export default TasksList;
