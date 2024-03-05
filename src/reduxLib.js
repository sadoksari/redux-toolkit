
import { configureStore , createSlice} from "@reduxjs/toolkit";

// créer une partie de  state qui concerne le todo
const todoSlice = createSlice (  {

    name : "listTodo" ,
    
    initialState : [ 
         { id: 1, text: "Aller au marché", done: false   }        
    ] ,

    reducers : {

        addTache    : ( state, action ) => {
            //{ type : "todo/addTache", payload :"Aller Faire Les courses" }
            //"listTodo/addTache" = le nom du slice + le nom de de la fonction dans le reducer

            // a ne pas duppliquer le task
            if ( state.find ( t => t.text === action.payload )  ) {
               alert("Task is existing in the list !!")
            }
            else {
               const newTask = {
                   id : Date.now() ,
                   done : false ,
                   text : action.payload
               }
               state.push (newTask) ;
            }
        } ,
 
        toggleTache : ( state , action) => {
           //{ type : "listTodo/toggleTache" , payload : 20}
           const task = state.find ( t => t.id === action.payload ) ;
           task.done  = !task.done ;
        } ,

        deleteTache : (state , action) => {
          // { type : "listTodo/deleteTache" , payload : 20 }
          state = state.filter ( t => t.id  != action.payload ) ;
          return state ; 
        } ,

        majTache : (state , action ) => {
            // { type : "listTodo/majTache" , payload : 20 }
           // state = state.filter ( t => t.id  === action.payload ) ;
           
            let wText = document.getElementById("textInput").value;
            if (   wText.trim() != '' ) {
               // a ne pas duppliquer le task
               if ( state.find ( t => t.text=== wText && t.id !== action.payload  )  ) {
                 alert("Task is existing in the list !!")
               }
               else {
                 const task = state.find ( t => t.id === action.payload ) ;  
                 task.text = wText;   
               }     
            }

          }
    }
} );


// dispatcher une action c'est à dire donner une tache à Redux
// les réactions == les reducers qui recoit l'etat actuel et l'action qu'on veut operer sur cette etat actuel
// useSelector() permet de recuperer une information dans Redux ( les tachs par exemple )

// création de l'entrepot(magasin) global
export const store = configureStore ( {
     reducer : { listTodo : todoSlice.reducer, },

}) ;


//action creator crées automatiquement par redux toolkit
export const { addTache  , deleteTache   , toggleTache , majTache  } = todoSlice.actions ;


/*
//action creator a ne pas developper seront automatiquement créers par redux
export const  toggleTask = (id) => {
    return {
         type: "todo/toggleTask" ,
          payload : id  
    }
}

export const  addTask = (text) => {
    return {
         type: "todo/addTask" ,
          payload : text  
    }
}

export const  deleteTask = (id) => {
    return {
         type: "todo/deleteTask" ,
          payload : id  
    }
}
*/