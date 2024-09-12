import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/form';

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
          </div>
        )
      })}
    </>)
}

export default App
