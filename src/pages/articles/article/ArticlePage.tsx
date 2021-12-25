import { useNavigate, useParams } from "react-router"
import Article from "./Article"
import Button from "../../../components/Button"

export default function ArticlePage() {
    const { articleId } = useParams();
    const navigate = useNavigate();

    if (!articleId) {
        navigate("/articles")
        return null;
    }

    return (
        <div>
            <Button text="< Articles" onClick={ () => navigate("/articles") } />

            <div className="mt-5">
                <Article articleId={ Number.parseInt(articleId) } />
            </div>
        </div>
    )
}