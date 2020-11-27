
function ToDoList() {
  return (
    <>
      <h1>To do list</h1>
      <ul>
        <li>
          <input type="checkbox" />
          Tarefa 1
        </li>
        <li>
          <input
            checked
            type="checkbox"
          />
          Tarefa 2
          <button>Excluir</button>
        </li>
      </ul>
    </>
  )
}

export default ToDoList
