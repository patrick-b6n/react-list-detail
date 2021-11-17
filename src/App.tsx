import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-2">
        <Header title="react-list-detail" />

        <div className="max-w-screen-sm mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="articles" />} />

            <Route path="/articles" element={<ArticlesPage />} >
              <Route path=":articleId" element={<ArticlesPage />} />
            </Route>
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;