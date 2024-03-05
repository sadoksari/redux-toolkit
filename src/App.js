
import { Provider } from 'react-redux';
import  { store } from "./reduxLib" ;

import "./App.css";
import TaskForm    from "./FormulaireSaisie";
import TasksHeader from "./blockEntete";
import TasksList   from "./ListeTache";

export default function App() {
  
  return (
    
    <Provider store ={ store } >  
    <div  className="container">
      <article id="art">
        <TasksHeader  />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>

    
    </Provider>
    
  );
}
