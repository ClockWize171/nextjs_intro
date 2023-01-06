import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
    const router = useRouter()
    const productID = router.query.productId
    return (
        <div>
            Product Detail of {productID}
        </div>
    )
}

export default ProductDetail