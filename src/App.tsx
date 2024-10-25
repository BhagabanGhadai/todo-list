import './App.css';
import AddTodo from './components/addTodo';
import ListTodo from './components/listTodo';
import { useAppSelector } from './hooks';

function App() {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <div className='app'>
      <div className="container">
      <h2>TO-DO List</h2>
        <AddTodo />
        {todos.length > 0 &&
          todos.map((todo) => <ListTodo key={todo.id} id={todo.id} name={todo.name} />)}
      </div>
    </div>
  );
}

export default App;
