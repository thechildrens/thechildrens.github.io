import Image from 'next/image'
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
        <span>No. No send tree pay.</span>
      </div>
    </div>
  )
}

export default function Information() {
  return (
    <div className="content">
      <div className="section-head">
        問答
        <div className="translation">Q&A</div>
      </div>
      <section>
        <Question></Question>
        <Question></Question>
      </section>
    </div>
  )
}
