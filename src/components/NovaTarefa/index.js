import { useState } from 'react'

function NovaTarefa({ onSubmit }) {
  const [tarefa, setTarefa] = useState('')
  const [mensagemCadastro, setMensagemCadastro] = useState('')

  const cadastrar = event => {
    event.preventDefault()
    const erroCadastro = onSubmit(tarefa)
    setMensagemCadastro(erroCadastro || {sucesso: `Tarefa ${tarefa} cadastrada com sucesso! ✅`})
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
              placeholder="ex.: lavar o carro"
              aria-label="ex.: lavar o carro"
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
