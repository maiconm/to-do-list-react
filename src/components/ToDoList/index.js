
function ToDoList() {
  return (
    <>
      <h1>To do list</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-10">
              <input
                checked
                type="checkbox"
              />
              Tarefa 2
            </div>
            <div className="col-2">
              <button className="btn btn-danger">Excluir</button>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-10">
              <input
                checked
                type="checkbox"
              />
              Tarefa 2
            </div>
            <div className="col-2">
              <button className="btn btn-danger">Excluir</button>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default ToDoList
