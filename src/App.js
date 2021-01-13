import './App.css'

import TodoList from './todo/TodoList'

const todos = [
  {id: 1, complited: false, title: 'Купить хлеб'},
  {id: 2, complited: false, title: 'Купить молоко'},
  {id: 3, complited: false, title: 'Купить виски'},
]


function App() {
  
  return (
    <div className="container">
      <h1 className="title">React Aplication</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
