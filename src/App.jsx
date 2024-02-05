import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import PostDetail from './routes/PostDetail';
import ErrorPage from './routes/ErrorPages';
import { MainLayout } from './layout/MainLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/not_found" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/not_found" replace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
