import React from 'react'
import { useRouter } from 'next/router'

const ReviewDetail = () => {
  const router = useRouter()
  const { productId, reviewId } = router.query
  return (
    <div>Review Detail of {reviewId} and product {productId}</div>
  )
}

export default ReviewDetail