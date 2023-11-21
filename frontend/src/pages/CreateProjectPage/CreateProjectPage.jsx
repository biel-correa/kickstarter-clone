import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import { useNavigate } from 'react-router-dom';

export default function CreateProjectPage() {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch('http://localhost:8000/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate('/projects');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <BasePageComponent>
      <div className="container h-100">
        <h1 className="py-5">Criar Projeto</h1>
        <ProjectForm submit={onSubmit} />
      </div>
    </BasePageComponent>
  )
}