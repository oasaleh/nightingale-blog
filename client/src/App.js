import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import './css/newfull.css';
import '../src/App.css';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://serverless-api.osaleh.workers.dev/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  async function handleSave(post) {
    fetch('https://serverless-api.osaleh.workers.dev/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
    });
    setPosts([...posts, post]);
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<PostsList posts={posts} />} />
        <Route path='/add' element={<AddPostForm handleSave={handleSave} />} />
        <Route
          path='/post/:postId'
          element={<SinglePostPage posts={posts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
