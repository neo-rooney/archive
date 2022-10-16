import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WtirePage from './pages/WtirePage';

function App() {
  return (
    <Routes>
      <Route element={<PostListPage />} path="/" exact />
      <Route element={<PostListPage />} path="/@:username" exact />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<WtirePage />} path="/write" />
      <Route element={<PostPage />} path="/@:username/:postId" />
    </Routes>
  );
}

export default App;
