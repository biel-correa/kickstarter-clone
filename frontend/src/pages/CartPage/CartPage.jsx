import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartPage() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  const renderProducts = () => {
    if (products.length === 0) {
      return (
        <div className="alert alert-info">
          Seu carrinho está vazio!
        </div>
      )
    }

    return (
      <ul className="list-group">
        {products.map((product) => (
          <li className="list-group-item">
            <h5>{product.name}</h5>
            <div className="d-flex justify-content-between w-100">
              <h6>R$ {product.price}</h6>
              <button className="btn btn-sm btn-danger">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const getTotalPrice = () => products
    .reduce((total, product) => total + product.price, 0)
    .toFixed(2);


  return (
    <BasePageComponent>
      <div className="container">
        <h1>Meu carrinho</h1>

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Resumo</h5>
            <h6 className="card-subtitle mb-2 text-muted">Total: R$ {getTotalPrice()}</h6>
            <button className="btn btn-sm btn-success" disabled={products.length <= 0}>Finalizar Pedido</button>
          </div>
        </div>

        {renderProducts()}
      </div>
    </BasePageComponent>
  )
}