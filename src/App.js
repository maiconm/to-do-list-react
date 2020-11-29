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
  return (
    <Router>
      <Header />
      <div className="container">
        <div className="row">
          <Switch>
              <Route path="/home">
                <ToDoList />
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
