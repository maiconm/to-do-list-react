import { useState } from 'react'

function NovaTarefa({ onSubmit }) {
  const [tarefa, setTarefa] = useState('')
  const [mensagemCadastro, setMensagemCadastro] = useState(null)

  const cadastrar = event => {
    event.preventDefault()
    const erroCadastro = onSubmit(tarefa)
    setMensagemCadastro(erroCadastro || {sucesso: 'Cadastrado com sucesso! ✅'})
  }

  return (
    <div className="col-6">
      <h1>Nova Tarefa</h1>
      <form
        className="form-group"
        onSubmit={event => cadastrar(event)}
      >
        <div className="input-group mb-3">
            <input
              onChange={({target}) => setTarefa(target.value)}
              type="text"
              className="form-control"
              placeholder="fazer todo list"
              aria-label="fazer todo list"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="submit"
                id="button-addon2"
              >
                Adicionar
              </button>
            </div>
          </div>
          {
            mensagemCadastro && <div
              className={`alert alert-${mensagemCadastro.sucesso ? 'primary' : 'danger'}`}
              role="alert"
            >
              {mensagemCadastro.sucesso || mensagemCadastro.erro}
            </div>
          }
      </form>
    </div>
  )
}

export default NovaTarefa
