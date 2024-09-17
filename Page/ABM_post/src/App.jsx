import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/form';

async function getPost() {
  const res = await fetch('http://127.0.0.1:8000/post');
  const json = await res.json();
  return json;
}

async function deletePost(id){
  const res = await fetch(`http://127.0.0.1:8000/post/del/${id}`, {method: 'delete'});
  const json = await res.json();
  return json.ok;
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

  const handleClickDel = async (id) => {
    const status = await deletePost(id);
    if(status){
      const postData = await getPost();
      setPost(postData.post);
    }

  }

  return (
    <>
      <h1>Postear</h1>
      <Form />
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
            <button onClick={() => handleClickDel(element.id)}> Eliminar </button>
          </div>
        )
      })}
    </>)
}

export default App
