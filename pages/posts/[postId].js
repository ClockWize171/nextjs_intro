import React from 'react'

const PostDetail = ({ post }) => {
    return (
        <div>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await response.json()
    // const paths = data.map(posts => {
    //     return {
    //         params: {
    //             postId: `${posts.id}`
    //         }
    //     }
    // })
    // console.log(paths)
    return {
        // paths: paths,
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    console.log(context)
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            post: data,
        }
    }
}

export default PostDetail