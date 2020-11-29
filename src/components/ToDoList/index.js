
function ToDoList() {
  return (
    <>
      <h1>To do list</h1>
      <ul className="list-group-sm">
        <li className="list-group-item clearfix">
          <div className="float-left">
            <input
              className="mr-1"
              checked
              type="checkbox"
            />
            Tarefa 2
          </div>
          <div className="float-right">
            <button className="btn btn-danger">✖</button>
          </div>
        </li>
        <li className="list-group-item clearfix">
          <div className="float-left">
            <input
              className="mr-1"
              checked
              type="checkbox"
            />
            Tarefa 2
          </div>
          <div className="float-right">
            <button className="btn btn-danger">✖</button>
          </div>
        </li>
      </ul>
    </>
  )
}

export default ToDoList
