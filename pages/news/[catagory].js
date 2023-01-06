import React from 'react'

const ArticleCatagory = ({ products, catagory }) => {
    return (
        <div>
            <h1>Show products with catagory <i>{catagory}</i></h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>
                        {product.id} {product.title}
                    </h2>
                    <p>
                        {product.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ArticleCatagory

export const getServerSideProps = async (context) => {
    const { params, req, res } = context
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=MinHtin'])
    const { catagory } = params
    const response = await fetch(`http://localhost:4000/products?category=${catagory}`)
    const data = await response.json()
    return {
        props: {
            products: data,
            catagory
        }
    }
}