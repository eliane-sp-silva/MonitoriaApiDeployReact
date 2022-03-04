import api from "../api";

export async function save(produto) {
    await api.post("/produtos/", {
        nome: produto.nome,
        foto: produto.foto,
        preco: produto.preco
    })
}

export async function getProdutos() {
    return (await api.get('/produtos')).data
}

export async function deleteProduto(id) {
    await api.delete(`/produtos/${id}`)
}

export async function updateProduto(produto) {
    await api.put("/produtos/", {
        id: produto.id,
        nome: produto.nome,
        foto: produto.foto,
        preco: produto.preco
    })
}