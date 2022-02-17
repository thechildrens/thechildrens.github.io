import React from 'react'

export default function Contact() {
  return (
    <div className="content">
      <div className="content-card">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8716355248675!2d121.37314051500438!3d24.936442484018137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681bf3146730b7%3A0xa6380687c2ab87a0!2sNo.%2046%2C%20Minsheng%20St%2C%20Sanxia%20District%2C%20New%20Taipei%20City%2C%20Taiwan%20237!5e0!3m2!1sen!2sus!4v1645055943503!5m2!1sen!2sus"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        />
      </div>
    </div>
  )
}
