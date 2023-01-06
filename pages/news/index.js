import React from 'react'
import Link from 'next/link'

const NewsArticleLists = ({ articles, category }) => {
    const uniqueCategory = [...new Set(category.map(item => item.category))]
    return (
        <div>
            <h1>Lists of News Articles</h1>
            {
                uniqueCategory.map((data, index) => (
                    <div style={{ display: "inline" }} key={index}>
                        <Link href={`/news/${data}`}>
                            {data}
                        </Link> &nbsp;
                    </div>
                ))
            }
            {
                articles.map((article, index) => (
                    <div key={index}>
                        <p>{article.title} [<strong>{article.author}</strong>]</p>
                    </div>
                ))
            }

        </div>
    )
}

export default NewsArticleLists

export const getServerSideProps = async () => {
    const getCategory = await fetch('http://localhost:4000/products')
    const category = await getCategory.json()
    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
    const data = await response.json()
    return {
        props: {
            articles: data.articles.slice(0, 10),
            category: category
        }
    }
}