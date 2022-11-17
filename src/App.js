import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//useDispatch van a ser las funciones que nosotros queramos llamar para poder actualizar el estado. Es para hacer algo
// useSelector va a ser la forma en la que nosotros vamos a poder traer los datos qeu esten dentro del estado. Es para seleccionar o traer algo desde el estado

function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
    <div className="flex items-center justify-center h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
