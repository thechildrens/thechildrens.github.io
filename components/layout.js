import Head from "next/head";
import Link from 'next/link'
import { useRouter } from "next/router";
import Script from "next/script";

function ActiveLink({ href, children }) {
  const router = useRouter()

  return (
    <div className={router.asPath.startsWith(href) ? "active" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>The Children's</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        window.fbAsyncInit = function() {
          FB.init({
            appId            : '364109158600424',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v13.0'
          });
        };
        `
        }}
      />
      <Script strategy="lazyOnload" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" />

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
          <ActiveLink href="/access">Access</ActiveLink>
          <a href="/access#mail">
            <div className="mail">
              <img src="/message.png"></img>
            </div>
          </a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <div className="fb-customerchat"
        page_id="106227510986123">
      </div>
      <footer>
        <div>The Children's Academy</div>
        <div>電話: +886 2 8672 1163</div>
        <div>地址:
          {' '}
          <a href="/access#location">
            237新北市三峽區民生街46號
          </a>
        </div>
      </footer>
    </div>
  )
}