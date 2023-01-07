import React from 'react'
import { getSession, useSession } from 'next-auth/react'

const Blog = ({ data }) => {
  const { data: session } = useSession();
  return (
    <h1>Blog Home Page - {data}</h1>
  )
}

export default Blog

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  console.log(session)

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      }
    }
  }
  
  return {
    props: {
      data: session ? `List of 100 ${session.user.name} blogs` : 'List of free blogs'
    }
  }
}