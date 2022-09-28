import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Tech Curve Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Link href="/profile/edit" className="btn">
          <a className='btn'>Edit Profile</a>
        </Link>
      </main>
    </div>
  )
}
