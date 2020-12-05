import { useEffect, useState } from 'react'

function ToDoList({ tarefasProp, excluirProp, toggleTarefaFeitaProp }) {
  const [tarefas, setTarefas] = useState([])
  
  useEffect(() => {
    setTarefas(tarefasProp)
  }, [tarefasProp, excluirProp, toggleTarefaFeitaProp])

  const handleExcluir = descricaoTarefa => {
    excluirProp(descricaoTarefa)
  }

  const handleToggleTarefaFeita = tarefaAlterada => {
    toggleTarefaFeitaProp(tarefaAlterada)
  }

  return (
    <div className="col-6">
      <h1>Tarefas</h1>
      {
        !tarefas.length && <span className="alert alert-warning">
          Nenhuma tarefa encontrada 🤷
        </span>
      }
      <ul className="list-group-sm">
        {tarefas.map(tarefa => (
          <li
            key={tarefa.descricao}
            className="list-group-item clearfix"
          >
            <div className="float-left">
              <input
                onChange={() => handleToggleTarefaFeita(tarefa)}
                checked={tarefa.feito}
                className="mr-1"
                type="checkbox"
              />
              {tarefa.descricao}
            </div>
            <div className="float-right">
              {
                tarefa.feito && <button
                  onClick={() => handleExcluir(tarefa.descricao)}
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
