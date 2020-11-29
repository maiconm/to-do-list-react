
function ToDoList({ tarefas }) {
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
                onChange={() => null}
                checked={tarefa.done}
                className="mr-1"
                type="checkbox"
              />
              {tarefa.descricao}
            </div>
            <div className="float-right">
              { tarefa.done && <button className="btn btn-danger">✖</button> }
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
