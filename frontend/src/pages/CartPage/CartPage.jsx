import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CartPage() {
  return (
    <BasePageComponent>
      <div className="container">
        <h1>Meu carrinho</h1>

        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Resumo</h5>
            <h6 className="card-subtitle mb-2 text-muted">Total: R$ 520,00</h6>
            <button className="btn btn-sm btn-success">Finalizar Pedido</button>
          </div>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            <h5>Copo que voa</h5>
            <div className="d-flex justify-content-between w-100">
              <h6>R$ 20,00</h6>
              <button className="btn btn-sm btn-danger">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
          <li className="list-group-item">
            <h5>Jetpack</h5>
            <div className="d-flex justify-content-between w-100">
              <h6>R$ 500,00</h6>
              <button className="btn btn-sm btn-danger">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </BasePageComponent> 
  )
}