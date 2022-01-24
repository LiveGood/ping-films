import styles from '../styles/quote.module.css'

export const Quote = () => {
    return (
        <div className={styles.quoteContainer}>
            <div className={styles.quoteText}>
                “A film is never really good unless the camera is an eye in the head of a poet.”
            </div>
            <div className={styles.quoteAuthor}>
                Orson Welles
            </div>
        </div>
    )
}