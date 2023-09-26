import './ProjectCard.css'

export default function ProjectCardComponent(props) {
    return (
        <div className="card mb-5" role="button">
            <img src={props.img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>

                <p className="card-text link-secondary cursor-pointer">
                    {props.content}
                </p>
                <div className="d-flex justify-content-between">
                    <p className="text-secondary fw-light d-inline">
                        By {props.createdBy}
                    </p>
                </div>
            </div>
        </div>
    );
}