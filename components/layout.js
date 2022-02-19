import Head from "next/head";
import Link from 'next/link'
import { useRouter } from "next/router";
import Script from "next/script";
import { useCallback, useState } from "react";
import { Bars } from "./icons";

function ActiveLink({ href, children, translation }) {
  const router = useRouter()

  return (
    <div className={router.asPath.startsWith(href) ? "active" : ""}>
      <div><Link href={href}>{children}</Link></div>
      <Link href={href}>
        <div className="translation">{translation}</div>
      </Link>
    </div>
  )
}

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = useCallback(() => {
    setMenuOpen(x => !x)
  }, [setMenuOpen])

  return (
    <div className="container">
      <Head>
        <title>The Children's</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
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
      <Script strategy="lazyOnload" crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js" />

      <header>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <Bars />
        </div>
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" width="auto" height="auto" />
          </Link>
        </div>
        <div className="logo-name">孩子們的國際學堂</div>
        <nav className="navbar">
          <ActiveLink href="/about" translation="About">關於</ActiveLink>
          {/* <ActiveLink href="/features">Features</ActiveLink> */}
          <ActiveLink href="/curriculum" translation="Curriculum">课表</ActiveLink>
          <ActiveLink href="/information" translation="Info">信息</ActiveLink>
          <a href="/about#contact">
            <div className="mail">
              <img src="/message.png"></img>
            </div>
          </a>
        </nav>
        <nav className="navbar mobile-navbar">
          <div></div>
          <div className="mobile-logo">
            <Link href="/">
              <img src="/logo.png" width="auto" height="auto" />
            </Link>
          </div>
          <a href="/about#contact">
            <div className="mail">
              <img src="/message.png"></img>
            </div>
          </a>
        </nav>
      </header>
      <main>
        {children}
        {menuOpen &&
          <nav className="mobile-menu">
            <div className="logo">
              <Link href="/">
                <img src="/logo.png" width="auto" height="auto" />
              </Link>
            </div>
            <div className="menu-toggle" onClick={handleMenuToggle}>
              <Bars />
            </div>
            <div className="footer">
              <div>
                電話:
                {' '}
                <a href="/about#contact">
                  +886 2 8672 1163
                </a>
              </div>
              <div>
                地址:
                {' '}
                <a href="/about#location">
                  237新北市三峽區民生街46號
                </a>
              </div>
            </div>
          </nav>
        }
      </main>
      <div className="fb-customerchat"
        page_id="106227510986123">
      </div>
      <footer>
        <div>The Children's Academy</div>
        <div>電話:
          {' '}
          <a href="/about#contact">
            +886 2 8672 1163
          </a>
        </div>
        <div>地址:
          {' '}
          <a href="/about#location">
            237新北市三峽區民生街46號
          </a>
        </div>
      </footer>
    </div>
  )
}