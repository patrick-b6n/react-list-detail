import { Link } from "react-router-dom";
import { ArticleListDTO } from "../../api/Api";

type ArticleListItemProps = {
    article: ArticleListDTO,
}

export default function ArticleListItem(props: ArticleListItemProps) {
    const { article } = props

    return (
        <div className="mt-3">
            <Link to={ `/articles/${ article.id }` }>
                <div className="p-5 shadow-md bg-white hover:bg-gray-50 transition cursor-pointer flex">
                    <div className="flex-grow">
                        <span>{ article.title }</span>
                    </div>
                    <div>
                        &gt;
                    </div>
                </div>
            </Link>
        </div>
    )
}