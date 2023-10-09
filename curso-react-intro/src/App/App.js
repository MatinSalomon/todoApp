import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUi';
import React from 'react';

/*const defaulTodos =[
  {text: "hola", completed: false},
  {text: "aramar pc", completed: true},
  {text: "limpiar", completed: true},  
  {text: 'hacer el reto de cuando se completen todos los todos mostrar otro mensaje', completed: true}
  
]

localStorage.setItem('TODOS_V1',JSON.stringify(defaulTodos))
*/

function App() {
  return (
    <TodoProvider>

      <AppUI />

    </TodoProvider>
    
  )
}




export default App;
