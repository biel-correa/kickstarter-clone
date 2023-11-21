import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import ProjectCardComponent from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getProjects = async () => {
        fetch("http://localhost:8000/projects/")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw response;
            })
            .then((data) => {
                setProjects(data);
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
        getProjects();
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
                    <h1 className="text-danger">Erro ao carregar os projetos!</h1>
                </div>
            );
        } else if (projects.length > 0) {
            return (
                <div className="d-flex flex-wrap justify-content-around">
                    {projects.map((item) => (
                        <ProjectCardComponent
                            key={item.id}
                            img={item.urlImage}
                            title={item.title}
                            description={item.description}
                            price={item.createdBy}
                        />
                    ))}
                </div>
            );
        }

        return (
            <div className="text-center">
                <h1 className="text-danger">Sem Projetos!</h1>
            </div>
        );
    };

    return (
        <BasePageComponent>
            <div className="container h-100">
                <h1 className="py-5">Projetos</h1>
                {renderContent()}
            </div>
        </BasePageComponent>
    );
}
