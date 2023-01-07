import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
    const { data: session, status } = useSession();
    return (
        <div className='layout-header'>NextJS 13
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
    )
}

export default Header