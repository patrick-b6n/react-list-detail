import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from "./pages/MainLayout";
import ArticlePage from "./pages/articles/article/ArticlePage";
import ArticlesPage from "./pages/articles/ArticlesPage";

function App() {
    return (
        <div className="min-h-screen">
            <Routes>
                <Route path="/" element={ <MainLayout /> }>
                    <Route path="/" element={ <Navigate to="articles" /> } />

                    <Route path="/articles" element={ <ArticlesPage /> }>
                        <Route path=":articleId" element={ <ArticlePage /> } />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;