import './App.css'
import Header from './components/Header'
import NovaTarefa from './components/NovaTarefa'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <ToDoList />
          </div>
          <div className="col">
            <NovaTarefa />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
