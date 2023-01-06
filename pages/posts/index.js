import React from 'react'
import Link from 'next/link'

const PostLists = ({ posts }) => {
    return (
        <div>
            <h1>Lists of Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`}>
                        <h2>
                            {post.id} {post.title}
                        </h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    return {
        props: {
            posts: data.slice(0, 3),
        }
    }
}

export default PostLists