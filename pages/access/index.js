import React, { useCallback, useState } from 'react'
import { ContentCard } from '../../components/content-card'
import { Phone, Mail, Facebook } from '../../components/icons'

export default function Access() {
  const [email, setEmail] = useState(null)
  const showEmail = useCallback(() => {
    setEmail(atob("em9leW91NTIwNTIwQGdtYWlsLmNvbQ=="))
    return false;
  })

  return (
    <div className="content">
      <ContentCard className="pd-2">
        <div className="lanes">
          <div className="lane">
            <Phone style={{ width: '10%', backgroundColor: "lightpink" }} className="circled" />
            <div style={{ fontWeight: 'bold' }}>
              電話
            </div>
            <div style={{ fontSize: '1.5rem', color: 'lightpink' }}>
              +886-2-8672-1163
            </div>
            <div>
              月～五 8:00～19:00
            </div>
          </div>
          <div className="lane">
            <Facebook style={{ width: '10%', backgroundColor: "steelblue" }} className="circled" />
            <div style={{ fontWeight: 'bold' }}>
              Facebook
            </div>
            <a href="https://www.facebook.com/thechildrensacademy" target="_blank" style={{ fontSize: '1.5rem' }}>
              thechildrensacademy
            </a>
          </div>
          <div className="lane">
            <Mail style={{ width: '10%', backgroundColor: "skyblue" }} className="circled" />
            <div style={{ fontWeight: 'bold' }}>
              电邮
            </div>
            {
              email
                ? <div style={{ fontSize: '1.5rem', color: 'skyblue' }}>{email}</div>
                : <a href="javascript:void(0)" style={{ fontSize: '1.5rem' }} onClick={showEmail}>
                  show
                </a>
            }

          </div>
        </div>
      </ContentCard>
      <ContentCard>
        <div className="card-header">Testing</div>
        <div className="card-list">
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
      </ContentCard>

      <ContentCard>
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
      </ContentCard>

      <ContentCard id="mail">
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
      </ContentCard>

      <ContentCard id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8716355248675!2d121.37314051500438!3d24.936442484018137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681bf3146730b7%3A0xa6380687c2ab87a0!2sNo.%2046%2C%20Minsheng%20St%2C%20Sanxia%20District%2C%20New%20Taipei%20City%2C%20Taiwan%20237!5e0!3m2!1sen!2sus!4v1645055943503!5m2!1sen!2sus"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </ContentCard>
    </div>
  )
}
