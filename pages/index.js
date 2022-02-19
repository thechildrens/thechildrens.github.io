import { ContentCard } from '../components/content-card'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className="content">
      <div className={styles.title}>
        The Children's Academy
        <div>
          國際領袖班 / 小班制教學
        </div>
      </div>

      {/* <div className={`section-head ${styles.notices}`}>
        通知
        <div className="translation">Notices</div>
      </div> */}

      {/* <div className={`section-head ${styles.about}`}>
        關於
        <div className="translation">About</div>
      </div> */}

      <ContentCard id="contact" className={`pd-2 ${styles.motto}`}>
        <div className="lanes">
          <div className="lane">
            Let kiddos be kiddos
            <div className="translation">讓孩子做孩子。</div>

          </div>
          <div className="lane">
            Self-awareness development
            <div className="translation">自我覺知發展。</div>
          </div>
          <div className="lane">
            Resilience, Strength and Weakness Balance
            <div className="translation">心理韌性 / 優缺勢平衡。</div>
          </div>
        </div>
      </ContentCard>

      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fthechildrensacademy%2Fvideos%2F686376336077263%2F&show_text=false&width=560&t=0"
        width="560"
        height="314"
        style={{
          border: 'none',
          borderRadius: '1rem',
          overflow: 'hidden',
          marginBottom: '2rem',
        }}
        scrolling="no"
        frameborder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </div>
  )
}
