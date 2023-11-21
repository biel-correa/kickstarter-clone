import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProjectPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    fetch(`http://localhost:8000/projects/${project.id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate(`/projects/${project.id}`);
      })
      .catch((error) => {
        console.error('Error:', error);
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
        <ProjectForm submit={onSubmit} project={project} />
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
      <div className="container h-100">
        <h1 className="py-5">Editar Projeto</h1>
        {renderContent()}
      </div>
    </BasePageComponent>
  )
}