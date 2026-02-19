"use client"
import { useEffect } from "react"
import { fetchQuotes } from "../store/qoutesSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import styles from "./Qoutes.module.css"

export default function QuotesPage() {
  const dispatch = useAppDispatch()
  const { quotes, loading, error } = useAppSelector(
    (state) => state.quotes
  )

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <h2 className={styles.title}>Quotes</h2>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {quotes.map((q) => (
          <div key={q.id} className={styles.quoteCard}>
            <p className={styles.quoteText}>"{q.quote}"</p>
            <small className={styles.author}>- {q.author}</small>
          </div>
        ))}
      </div>
    </div>
  )
}