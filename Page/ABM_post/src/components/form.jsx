export default function Form(){

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)

    const form = {
      'title': event.target.title.value,
      'category': event.target.category.value,
      'description': event.target.description.value
    }
    
    const res = await addPost(form);
    if(res){
      console.log(res)
    }
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

async function addPost(form) {
  console.log(form)
  
  const res = await fetch('http://127.0.0.1:8000/post/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  });
  const json = await res.json();
  return json;
}