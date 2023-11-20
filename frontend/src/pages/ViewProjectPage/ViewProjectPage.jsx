import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewProjectPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();

  const getProject = async () => {
    fetch(`http://localhost:3001/projects/${params.id}`)
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
          <h2>{project.title}</h2>

          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>

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
    </BasePageComponent>
  )
}
