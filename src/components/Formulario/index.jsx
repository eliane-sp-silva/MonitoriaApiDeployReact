import './index.css'

import { save } from '../../service/ProdutoService'

import { useRef } from 'react'

const Formulario = () => {

    const nome = useRef()
    const foto = useRef()
    const preco = useRef()

    function enviarDados(event){
        event.preventDefault()
        const produto = {
            nome: nome.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        }
        save(produto).then(() => window.location.reload()).catch((err) => console.log(err))
    }


    return (
        <div>
            <div className="row">
                <form className="col s12" onSubmit={enviarDados}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={nome}/>
                                <label>Nome do produto</label>
                        </div>
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={foto} />
                                <label>Imagem</label>
                        </div>
                        <div className="input-field col s12">
                            <input required type="number" className="validate" ref={preco} step="0.01" />
                                <label>Preço</label>
                        </div>
                        <div className="col s12">
                            <input className="waves-light btn" type="submit" value="Enviar"></input>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Formulario