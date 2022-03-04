import './index.css'
import { getProdutos, deleteProduto } from '../../service/ProdutoService'
import { useState, useEffect } from 'react'
import Alterar from '../Alterar'

const Cards = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setProdutoUpdate({})
    }
    const handleShow = (produto) => {
        setShow(true)
        setProdutoUpdate(produto)
    }

    const [produto, setProduto] = useState([])
    const [produtoUpdate, setProdutoUpdate] = useState({})

    useEffect(() => {
        getProdutos().then((res) => setProduto(res)).catch((err) => console.log(err))
    }, [])


    function deletar(id) {
        deleteProduto(id)
        .then(() => getProdutos().then((res) => setProduto(res)))
        .catch((err) => console.log(err))
    }

    return (
        <div className="CardsBox">
            {produto.map((produto) => (
                <div className="col divCard" key={produto.id} onClick={() => handleShow(produto)}>
                    <div className="card">
                        <div className="card-image">
                            <img src={produto.foto} alt="Imagem" />
                            <span className="card-title">{produto.nome}</span>
                            <button className="btn-floating halfway-fab waves-effect waves-light red large material-icons"
                                onClick={() => deletar(produto.id)}>
                                delete
                            </button>
                        </div>
                        <div className="card-content">
                            <h5>R$ {produto.preco}</h5>
                        </div>
                    </div>
                </div>

            ))}
            
            {show ? <Alterar show={show} onClose={()=> handleClose} produto={produtoUpdate}/> : ""}
        </div>

    )
}

export default Cards