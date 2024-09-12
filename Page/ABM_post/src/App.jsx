import { useEffect, useState } from 'react'
import './App.css'

async function getPost() {
  const res = await fetch('http://127.0.0.1:8000/post');
  const json = await res.json();
  return json;
}



function App() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getPost();
      setPost(postData.post);
    };
    fetchPost();
  }, [])
  console.log(post)

  return (
    <>
      <h1>Postear</h1>
      <form action="">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="title" placeholder="Titulo"/>
          <label htmlFor="title">Titulo</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="category" placeholder="Categoria"/>
          <label htmlFor="category">Categoria</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" id="descpription" placeholder="Comentario" style={{'height': '100px'}}></textarea>
          <label htmlFor="descpription">Comentario</label>
        </div>
        <button type="button" className="btn btn-secondary btn-lg mb-3">Enviar</button>
      </form>
      <h2>POSTS</h2>
      {post && post.map(element => {
        return (
          <div key={element.id} className="card mt-4">
            <div className="card-header badge text-bg-info">
              {element.title.toUpperCase()} - Catergoria: {element.category}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{element.description}</p>
                <footer className="blockquote-footer"> {element.date} </footer>
              </blockquote>
            </div>
          </div>
        )
      })}
    </>)
}

export default App
