import { useEffect, useState } from "react"
import Api, { ArticleListDTO } from "../../api/Api"
import ArticleList from "./ArticleList"
import Button from "../../components/Button"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router";
import { useRestoreScrollPosition } from "../../hooks/UseRestoreScrollPosition";

const limit = 25

export default function ArticlesPage() {
    const { articleId } = useParams();
    useRestoreScrollPosition(() => articleId === undefined)

    const [offset, setOffset] = useState<number>(0)
    const [articles, setArticles] = useState<ArticleListDTO[]>([])

    const loadMore = () => {
        setOffset(offset + limit)
    }

    useEffect(() => {
        const response = Api.loadArticles(limit, offset)
        setArticles((a) => a.concat(response.result))
    }, [offset])

    if (articleId) {
        return (<Outlet />)
    }

    return (
        <div>
            <ArticleList articles={ articles } />

            <div className="mt-5 flex justify-center">
                <Button text="Load more..." onClick={ loadMore } />
            </div>
        </div>
    )
}
