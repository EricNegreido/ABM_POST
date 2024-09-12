export default function Form(){

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)

    const form = {
      'title': event.target.title.value,
      'category': event.target.category.value,
      'description': event.target.description.value
    }
    console.log(form)
  }
  return(
    <form action="" onSubmit={handleSubmit}>
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="title" placeholder="Titulo"/>
      <label htmlFor="title">Titulo</label>
    </div>
    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="category" placeholder="Categoria"/>
      <label htmlFor="category">Categoria</label>
    </div>
    <div className="form-floating mb-3">
      <textarea className="form-control" id="description" placeholder="Comentario" style={{'height': '100px'}}></textarea>
      <label htmlFor="description">Comentario</label>
    </div>
    <button type="submit" className="btn btn-secondary btn-lg mb-3">Enviar</button>
  </form>)
}