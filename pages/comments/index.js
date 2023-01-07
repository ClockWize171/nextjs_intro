import React, { useState } from 'react'

const CommentsPage = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const reponse = await fetch('/api/comments')
        const data = await reponse.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const deleteComment = async (commentId) => {
        const reponse = await fetch(`/api/comments/${commentId}`,{
            method: 'DELETE',
        })
        const data = await reponse.json()
        console.log(data)
        fetchComments()
    } 

    return (
        <>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit comment</button>
            <button onClick={fetchComments}>Load comments</button>
            {
                comments.map(comment => (
                    <div key={comment?.id}>
                        {comment?.id} {comment?.text}
                        <button onClick={() => deleteComment(comment?.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default CommentsPage