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
    </div>
  )
}
