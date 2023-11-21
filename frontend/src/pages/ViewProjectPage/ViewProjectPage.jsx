import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewProjectPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  const getProject = async () => {
    fetch(`http://localhost:8000/projects/${params.id}/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw response;
      })
      .then((data) => {
        setProject(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = cart.find((item) => item.id === project.id);
    if (isAlreadyInCart) {
      alert("Projeto já adicionado no carrinho!");
      return;
    }

    cart.push(project);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Projeto adicionado no carrinho!");
  }

  useEffect(() => {
    getProject();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else if (error) {
      return (
        <div className="text-center">
          <h1 className="text-danger">Erro ao carregar o projeto!</h1>
        </div>
      );
    } else if (project) {
      return (
        <div className="container">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{project.title}</h5>

                <button className="btn btn-primary" onClick={addToCart}>Adicionar no Carrinho</button>
              </div>

              <small className="text-muted">R$ {project.price.toFixed(2)}</small>

              <p className="card-text">{project.description}</p>

              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center">
        <h1 className="text-danger">Projeto não encontrado!</h1>
      </div>
    );
  }

  return (
    <BasePageComponent>
      {renderContent()}
    </BasePageComponent>
  )
}
