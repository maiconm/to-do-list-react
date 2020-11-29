
function NovaTarefa() {
  return (
    <>
      <h1>Nova Tarefa</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-success"
            type="button"
            id="button-addon2"
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  )
}

export default NovaTarefa
