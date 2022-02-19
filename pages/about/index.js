import React, { useEffect, useState } from 'react'
import { ContentCard } from '../../components/content-card'
import { Phone, Mail, Facebook } from '../../components/icons'

export default function About() {
  const [email, setEmail] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmail(atob("em9leW91NTIwNTIwQGdtYWlsLmNvbQ=="))
    }, 2000)
    return () => clearTimeout(timer)
  }, [setEmail])

  return (
    <div className="content">
      <div className="section-head">
        關於
        <div className="translation">About</div>
      </div>

      <div className="section-head">
        聯繫信息
        <div className="translation">Contact Information</div>
      </div>
      <ContentCard id="contact" className="pd-2">
        <div className="lanes">
          <div className="lane">
            <div className="circled" style={{ width: '2rem', height: '2rem', backgroundColor: "lightpink" }}>
              <Phone />
            </div>
            <div style={{ fontSize: '1.2rem' }}>
              電話
            </div>
            <div style={{ fontSize: '1.5rem', color: 'lightpink' }}>
              +886-2-8672-1163
            </div>
            <div>
              9:00～19:00
            </div>
          </div>
          <div className="lane">
            <div className="circled" style={{ width: '2rem', height: '2rem', backgroundColor: "steelblue" }}>
              <Facebook />
            </div>
            <div style={{ fontSize: '1.2rem' }}>
              Facebook
            </div>
            <a href="https://www.facebook.com/thechildrensacademy" target="_blank" style={{ fontSize: '1.5rem' }}>
              thechildrensacademy
            </a>
          </div>
          <div className="lane">
            <div className="circled" style={{ width: '2rem', height: '2rem', backgroundColor: "skyblue" }}>
              <Mail />
            </div>
            <div style={{ fontSize: '1.2rem' }}>
              電郵
            </div>
            <div style={{ fontSize: '1.5rem', color: 'skyblue' }}>{email ? email : '-'}</div>
          </div>
        </div>
      </ContentCard>

      <div className="section-head">
        訪問
        <div className="translation">Access</div>
      </div>

      <ContentCard id="location">
        <div className="card-header">
          營業時間
          <span className="translation"> ( Business Hours )</span>
        </div>
        <div className="card-list">
          <div className="card-item">
            <div className="card-item-key">學生容量 Capacity</div>
            <div className="card-item-value">20</div>
          </div>
          <div className="card-item">
            <div className="card-item-key">開門時間 Hours</div>
            <div className="card-item-value">
              星期一 (Mon): 9:00～19:00
              <br />
              星期二 (Tue): 12:00～19:00
              <br />
              星期三 (Wed): 9:00～19:00
              <br />
              星期四 (Thu): 9:00～19:00
              <br />
              星期五 (Fri): 9:00～19:00
              <br />
              星期六 (Sat): 10:00～19:00
            </div>
          </div>
          <div className="card-item">
            <div className="card-item-key">位置 Location</div>
            <div className="card-item-value">237新北市三峽區民生街46號</div>
          </div>
        </div>
      </ContentCard>

      {/* <ContentCard>
        <div className="card-header">Testing</div>
        <div className="card-body">
          <div className="card-list w-50">
            <div className="card-item">
              <div className="card-item-key">Test</div>
              <div className="card-item-value">Test</div>
            </div>
            <div className="card-item">
              <div className="card-item-key">Test</div>
              <div className="card-item-value">Test</div>
            </div>
            <div className="card-item">
              <div className="card-item-key">Test</div>
              <div className="card-item-value">Test</div>
            </div>
          </div>
          <div className="card-list w-50">
            <div className="card-item">
              <div className="card-item-key">Test</div>
              <div className="card-item-value">Test<br />Test</div>
            </div>
            <div className="card-item">
              <div className="card-item-key">Test</div>
              <div className="card-item-value">Test</div>
            </div>
          </div>
        </div>
      </ContentCard> */}

      < ContentCard >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8716355248675!2d121.37314051500438!3d24.936442484018137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681bf3146730b7%3A0xa6380687c2ab87a0!2sNo.%2046%2C%20Minsheng%20St%2C%20Sanxia%20District%2C%20New%20Taipei%20City%2C%20Taiwan%20237!5e0!3m2!1sen!2sus!4v1645055943503!5m2!1sen!2sus"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </ContentCard >
    </div >
  )
}
