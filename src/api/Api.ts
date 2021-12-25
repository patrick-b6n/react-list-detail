export type ArticleDTO = {
    id: number
    title: string
    description: string
}

export type ArticleListDTO = {
    id: number
    title: string
}

export type LoadArticlesResponse = {
    result: ArticleListDTO[]
    hasNext: boolean
}

type ApiInterface = {
    loadArticle(id: number): ArticleDTO
    loadArticles(limit: number, offset: number): LoadArticlesResponse
}

function loadArticles(limit: number, offset: number): LoadArticlesResponse {
    console.log(`Loading Articles Limit: ${ limit }, Offset: ${ offset }`)
    const articles = new Array<ArticleListDTO>()

    for (let i = offset; i < offset + limit; i++) {
        articles.push(
            {
                id: i,
                title: `Title ${ i }`,
            }
        )
    }

    return {
        result: articles,
        hasNext: true
    }
}

function loadArticle(id: number): ArticleDTO {
    return {
        id: id,
        title: `Title ${ id }`,
        description: `Description ${ id }`,
    }
}

const Api: ApiInterface = {
    loadArticle: loadArticle,
    loadArticles: loadArticles
}

export default Api