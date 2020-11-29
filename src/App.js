import { useState } from 'react'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NovaTarefa from './components/NovaTarefa'
import ToDoList from './components/ToDoList'

function App() {
  const [tarefas, setTarefas] = useState([
    {descricao: 'Tarefa 1', feito: false},
    {descricao: 'Tarefa 2', feito: true},
  ])



  return (
    <Router>
      <Header />
      <div className="container">
        <div className="row">
          <Switch>
              <Route path="/home">
                <ToDoList tarefasProp={tarefas} />
              </Route>
              <Route path="/nova-tarefa">
                <NovaTarefa />
              </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
