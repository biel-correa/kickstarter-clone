import React, { useState } from 'react';

export default function ProjectForm({ submit, project = null }) {

  const [formData, setFormData] = useState(project ?? {
    title: '',
    description: '',
    price: 0,
    urlImage: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = formData;
    data.price = parseFloat(data.price);
    submit(data);
  };

  const submitText = project.id ? 'Editar Projeto' : 'Criar Projeto';

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Título</label>
        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descrição</label>
        <textarea className="form-control" id="description" name="description" rows="3" value={formData.description} onChange={handleInputChange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Preço</label>
        <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="urlImage" className="form-label">URL da Imagem</label>
        <input type="text" className="form-control" id="urlImage" name="urlImage" value={formData.urlImage} onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-primary">{submitText}</button>
    </form>
  )
}