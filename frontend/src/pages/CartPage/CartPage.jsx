import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartPage() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  const removeProduct = (product) => {
    const newProjects = projects.filter((item) => item.id !== product.id);
    setProjects(newProjects);
    localStorage.setItem('cart', JSON.stringify(newProjects));
  }

  const renderProducts = () => {
    if (projects.length === 0) {
      return (
        <div className="alert alert-info">
          Seu carrinho está vazio!
        </div>
      )
    }

    return (
      <ul className="list-group">
        {projects.map((project) => (
          <li className="list-group-item" key={project.id}>
            <h5>{project.title}</h5>
            <div className="d-flex justify-content-between w-100">
              <h6>R$ {project.price}</h6>
              <button className="btn btn-sm btn-danger" onClick={() => removeProduct(project)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const getTotalPrice = () => projects
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
            <button className="btn btn-sm btn-success" disabled={projects.length <= 0}>Finalizar Pedido</button>
          </div>
        </div>

        {renderProducts()}
      </div>
    </BasePageComponent>
  )
}