import React from 'react'
import ButtonsBooking from '../Buttons/ButtonsBooking'
import styles from './QuoteCards.module.css'

const QuoteCards = () => {
    return (
        <div className={styles.containerQuote}>
            <div className={styles.containerTextQuote}>
                <p className={styles.text}>
                    Whether you&apos;re a beginner looking to explore
                    expressive movement or an advanced dancer ready to
                    refine your technique, we have classes for you!
                </p>
                <ButtonsBooking title={"Reserve your spot"} />
            </div>
        </div>

    )
}

export default QuoteCards