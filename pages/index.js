import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/product')
    alert('Placing your order')
  }

  return (
    <div>
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