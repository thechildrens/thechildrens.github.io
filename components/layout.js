import Head from "next/head";
import Link from 'next/link'
import { useRouter } from "next/router";

function ActiveLink({ href, children }) {
  const router = useRouter()

  return (
    <div className={router.asPath === href ? "active" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      <header>
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" width="auto" height="auto" />
          </Link>
        </div>
        <div className="logo-name">孩子們的國際學堂</div>
        <nav id="navbar">
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/features">Features</ActiveLink>
          <ActiveLink href="/curriculum">Curriculum</ActiveLink>
          <ActiveLink href="/questions">Questions</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
          <ActiveLink href="#">
            <img src="/message.png"></img>
          </ActiveLink>
        </nav>
      </header>
      <main>
        {children}
      </main>

      <footer>
        <div>The Children's Academy</div>
        <div>電話: +886 2 8672 1163</div>
        <div>地址: 237新北市三峽區民生街46號</div>
      </footer>
    </div>
  )
}