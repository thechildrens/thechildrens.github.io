import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="logo">
          <img src="/logo.png" width="auto" height="auto" />
        </div>
        <div className="logo-name">孩子們的國際學堂</div>
        <nav id="navbar">
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/features">Features</Link>
          </div>
          <div>
            <Link href="/curriculum">Curriculum</Link>
          </div>
          <div>
            <Link href="/questions">Questions</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <Link href="/contact">Access</Link>
          </div>
          <div>
            <Link href="#">MAIL</Link>
          </div>
        </nav>
      </header>
      <main>

      </main>

      <footer>
        <div>The Children's Academy</div>
        <div>電話: +886 2 8672 1163</div>
        <div>地址: 237新北市三峽區民生街46號</div>
      </footer>
    </div>
  )
}
