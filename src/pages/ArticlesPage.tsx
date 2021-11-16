import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Api, { ArticleListDTO } from "../api/Api"
import ArticleList from "../components/ArticleList"
import ArticleView from "../components/ArticleView"
import Button from "../components/Button"

const limit = 5

export default function ArticlesPage() {
    const { articleId } = useParams();
    const navigate = useNavigate();

    const [offset, setOffset] = useState<number>(0)
    const [articles, setArticles] = useState<ArticleListDTO[]>([])

    useEffect(() => {
        const response = Api.loadArticles(limit, offset)
        setArticles((a) => a.concat(response.result))
    }, [offset])

    const loadMore = () => {
        setOffset(offset + limit)
    }

    if (articleId !== undefined) {
        return (
            <div>
                <Button text="< Back" onClick={() => navigate("/articles")} />
                <div className="mt-5">
                    <ArticleView articleId={Number.parseInt(articleId)} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <ArticleList articles={articles} />

                <div className="mt-5 flex justify-center">
                    <Button text="Load more..." onClick={loadMore} />
                </div>
            </div>
        )
    }
}