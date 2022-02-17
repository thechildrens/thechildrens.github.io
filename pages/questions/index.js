import React from 'react'
import { ContentCard } from '../../components/content-card'
import styles from './index.module.css'

function Question() {
  return (
    <div className={styles.question}>
      <div className={styles.question_q}>
        <div className={styles.question_icon}>Q</div>
        <span>Send tree pay?</span>
      </div>
      <div className={styles.question_a}>
        <div className={styles.answer_icon}>A</div>
        <span>No</span>
      </div>
    </div>
  )
}

export default function Questions() {
  return (
    <div className="content">
      <div className="section-head">
        Q&A
      </div>
      <section>
        <Question></Question>
      </section>
    </div>
  )
}
