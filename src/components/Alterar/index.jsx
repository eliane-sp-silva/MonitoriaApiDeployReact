import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateProduto } from '../../service/ProdutoService';
import { useRef } from 'react';


const Alterar = (props) => {

    const id = useRef()
    const nome = useRef()
    const foto = useRef()
    const preco = useRef()


    function update(event) {
        event.preventDefault()
        const produto = {
            id: props.produto.id,
            nome: nome.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        } 
        updateProduto(produto)
            .then(() => window.location.reload())
            .catch((err) => console.log(err))
    }

    return (
        <Modal show={props.show} onHide={props.onClose()}>
            <Modal.Header closeButton>
                <Modal.Title>{props.produto.nome}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="col s12" onSubmit={update}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input required type="hidden" className="validate" ref={id} defaultValue={props.produto.id} />
                        </div>
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={nome} defaultValue={props.produto.nome} />
                        </div>
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={foto}  defaultValue={props.produto.foto}/>
                        </div>
                        <div className="input-field col s12">
                            <input required type="number" className="validate" ref={preco} step="0.01" defaultValue={props.produto.preco} />
                        </div>
                        <div className="col s12">
                            <input className="waves-light btn" type="submit" value="Enviar"></input>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default Alterar