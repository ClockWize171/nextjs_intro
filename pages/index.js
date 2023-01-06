import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home = () => {
  const { data: session, status} = useSession()
  console.log(session)
  const router = useRouter()

  const handleClick = () => {
    router.push('/product')
    alert('Placing your order')
  }

  return (
    <div><br />
      <div style={{ display: "inline" }}>
        {session === null ?
          <Link href='/api/auth/signin'>
            <button
              disabled={status === 'loading' ? true : false}
              onClick={e => {
                e.preventDefault()
                signIn('github')
              }}>Sign in (GitHub)</button>
          </Link>
          : <Link href='/api/auth/signout'>
            <button onClick={e => {
              e.preventDefault()
              signOut()
            }}>Sign out</button>
          </Link>}


      </div>
      {status === 'authenticated' ?
        <p>Signed in as <i>{session.user.name}</i></p>
        :
        <p>Your are a <i>Guest</i></p>
      }
      <h1>
        Home Page
      </h1>
      <div>
        <Link href='/blog'>Blog</Link><br />
        <Link href='/about'>About</Link><br />
        <Link href='/product'>Product</Link><br />
        <Link href='/profile'>Profile</Link><br />
        <Link href='/docs'>Docs</Link><br />
        <Link href='/users'>Users</Link><br />
        <Link href='/posts'>Posts</Link><br />
        <Link href='/news'>News</Link><br />
        <Link href='/dashboard'>Dashboard</Link><br />
        <Link href='/dashboard-swr'>DashboardSWR</Link><br />
        <Link href='/comments'>Comments api route</Link><br />
        <Link href='/pets'>Next Image</Link><br />
      </div>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}

export default Home