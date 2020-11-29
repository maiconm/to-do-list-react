import { useState } from 'react'

function ToDoList({ tarefasProp }) {
  const [tarefas, setTarefas] = useState(tarefasProp)
  
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
    <div className="col-6">
      <h1>To do list</h1>
      <ul className="list-group-sm">
        {tarefas.map(tarefa => (
          <li
            key={tarefa.descricao}
            className="list-group-item clearfix"
          >
            <div className="float-left">
              <input
                onChange={() => toggleTarefaFeita(tarefa)}
                checked={tarefa.feito}
                className="mr-1"
                type="checkbox"
              />
              {tarefa.descricao}
            </div>
            <div className="float-right">
              {
                tarefa.feito && <button
                  onClick={() => excluir(tarefa.descricao)}
                  className="btn btn-danger"
                >
                  ✖
                </button>
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
