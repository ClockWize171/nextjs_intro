import React from 'react'
import { comments } from '../../data/comments'

const CommentDetail = ({ comment }) => {
    return (
        <div>
            {comment.id} {comment.text}
        </div>
    )
}

export default CommentDetail

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { commentsId: '1' } },
            { params: { commentsId: '2' } },
            { params: { commentsId: '3' } }
        ],
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const { commentsId } = params
    const comment = comments.find(comment => comment.id === parseInt(commentsId))
    console.log(comment)

    return {
        props: {
            comment
        }
    }
}