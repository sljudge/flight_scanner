import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        minWidth: '100vw',
        maxWidth: '100vw',
        minHeight: '100vh',
        paddingBottom: '5rem',
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',

    }
})

const Container = props => {
    return (
        <div className={css(styles.container)}>
            {props.children}
        </div>
    )
}

export default Container