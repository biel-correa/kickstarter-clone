import './ProjectCard.css'
import { Link } from 'react-router-dom'

export default function ProjectCardComponent(props) {
    return (
        <Link className="card project-card mb-5 text-decoration-none" role="button" to={`/projects/${props.id}`}>
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>

                <p className="card-text link-secondary cursor-pointer">
                    {props.description}
                </p>

                <p className="card-text">
                    <small className="text-muted">R$ {props.price.toFixed(2)}</small>
                </p>
            </div>
        </Link>
    );
}