import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SweetAlert2 from 'react-sweetalert2';

export default function ViewProjectPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [swalProps, setSwalProps] = useState({});
  const params = useParams();

  const getProject = async () => {
    fetch(`http://localhost:8000/projects/${params.id}`)
      .then((response) => {
        if (response.ok) {
          const data = response.json();
          setProject(data);
        }

        throw response;
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
      setSwalProps({
        title: "Ops!",
        text: "Este projeto já está no seu carrinho!",
        icon: "error",
      });
      return;
    }

    cart.push(project);
    localStorage.setItem("cart", JSON.stringify(cart));

    setSwalProps({
      title: "Sucesso!",
      text: "Projeto adicionado no carrinho!",
      icon: "success",
    });
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
          <div class="card mb-3">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{project.title}</h5>

                <button className="btn btn-primary" onClick={addToCart}>Adicionar no Carrinho</button>
              </div>

              <p class="card-text">{project.content}</p>

              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
      <SweetAlert2 {...swalProps} />
    </BasePageComponent>
  )
}
