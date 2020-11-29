function NovaTarefa() {
  return (
    <div className="col-6">
      <h1>Nova Tarefa</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="fazer todo list"
          aria-label="fazer todo list"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-success"
            type="button"
            id="button-addon2"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

export default NovaTarefa
