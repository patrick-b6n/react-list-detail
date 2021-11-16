import { ArticleListDTO } from "../api/Api";
import ArticleListItem from "./ArticleListItem";

type ArticleListProps = {
    articles: ArticleListDTO[]
}

export default function ArticleList(props: ArticleListProps) {
    const { articles } = props

    return (
        <div className="w-96 mx-auto">
            {
                articles.map(article =>
                    <ArticleListItem
                        key={article.id}
                        article={article}
                    />
                )
            }
        </div>
    )
}