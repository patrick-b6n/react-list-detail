import { useEffect, useState } from "react"
import Api, { ArticleDTO } from "../api/Api"

type ArticleViewProps = {
    articleId: number
}

export default function ArticleView(props: ArticleViewProps) {
    const { articleId } = props

    const [article, setArticle] = useState<ArticleDTO>()

    useEffect(() => {
        const loadedArticle = Api.loadArticle(articleId)
        setArticle(loadedArticle)
    }, [articleId])

    if (!article) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="shadow-md">
            <div className="px-5 py-3 bg-white border-b border-gray-200 font-bold">{article.title}</div>
            <div className="p-5 bg-white">{article.description}</div>
        </div>
    )
}