import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//useDispatch van a ser las funciones que nosotros queramos llamar para poder actualizar el estado. Es para hacer algo
// useSelector va a ser la forma en la que nosotros vamos a poder traer los datos qeu esten dentro del estado. Es para seleccionar o traer algo desde el estado

function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>

      <TaskForm/>
      <TaskList/>
    </div>
  );
}

export default App;
