import "./App.css";
import ColumnDoing from "./components/ColumnDoing";
import ColumnTodo from "./components/ColumnTodo";
import ColumnDone from "./components/ColumnDone";


function App() {

  
  return (
    <>
      <header>
        <h1>React Kanban Board</h1>
      </header>
      <div className="task-container">
        <div className="kanban-app">
         <ColumnTodo />
        </div>
        <div className="kanban-app">
          <ColumnDoing />
        </div>
        <div className="kanban-app">
          <ColumnDone />
        </div>
      </div>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
