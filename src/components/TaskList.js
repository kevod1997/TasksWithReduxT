import {useSelector, useDispatch} from 'react-redux'
import { deleteTask, deleteTasks } from '../features/tasks/taskSlice'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function TaskList() {
    const tasks = useSelector((state) => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
         dispatch(deleteTask(id))
    }
    const handleClearTasks = () => {
      dispatch(deleteTasks())
    }
     const MySwal = withReactContent(Swal)
  return (
    <div className="w-4/6">
    <header className="flex justify-between items-center py-4">
      <h1>Tasks ({tasks.tasksItems.length})</h1>

      <Link
        to="/create-task"
        className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
      >
        Create Task
      </Link>
      <button onClick={()=> MySwal.fire({
     title: <strong>Estas seguro que deseas eliminar todas las tareas?</strong>,
     icon: 'warning',
     denyButtonText: 'No',
     confirmButtonText: 'Si',
     showDenyButton: true
   }).then(response =>{
    if(response.isConfirmed){
      MySwal.fire({title: <strong>Tareas eliminadas</strong> });
    }else if(response.isDenied){
      return
    }
    handleClearTasks();
   })} className='bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm'>Delete Tasks</button>
    </header>

    <div className="grid grid-cols-3 gap-3">
      {tasks.tasksItems.map((task) => (
        <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
          <header className="flex justify-between">
            <h3 className="text-lg font-bold">{task.title}</h3>
            <div className="flex gap-x-2">
              <Link
                to={`/edit-task/${task.id}`}
                className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 px-2 py-1 text-xs rounded-md"
              >
                delete
              </button>
            </div>
          </header>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default TaskList