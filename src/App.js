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
  const [tarefas, setTarefas] = useState([])

  const cadastrar = descricaoTarefa => {
    if (descricaoTarefa && !tarefaExiste(descricaoTarefa)) {
      setTarefas([{descricao: descricaoTarefa, feito: false}, ...tarefas])
    } else {
      return {erro: 'Digite uma tarefa valida ❗'}
    }
  }

  const tarefaExiste = descricaoTarefa => !!tarefas.find(
    ({descricao}) => descricao === descricaoTarefa
  )

  const excluir = descricaoTarefa => {
    setTarefas(tarefas.filter(tarefa => tarefa.descricao !== descricaoTarefa))
  }

  const toggleTarefaFeita = tarefaAlterada => {
    console.log(tarefas)
    const tarefasAtualizada = tarefas.map(tarefa => {
      if (tarefa.descricao === tarefaAlterada.descricao) {
        tarefa.feito = !tarefa.feito
      }
      return tarefa
    })
    setTarefas(tarefasAtualizada)
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <div className="row">
          <Switch>
              <Route path="/home">
                <ToDoList
                  tarefasProp={tarefas}
                  excluirProp={excluir}
                  toggleTarefaFeitaProp={toggleTarefaFeita}
                />
              </Route>
              <Route path="/nova-tarefa">
                <NovaTarefa onSubmit={cadastrar} />
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
