import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '5rem',
        padding: '0.5rem 5rem 0.5rem 0.5rem',
        backgroundColor: 'rgba(30,30,30,0.1)',
        color: '#1e1e1e'
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '1rem',
        fontSize: '3rem'
    }
})

const Nav = props => {
    return (
        <div className={css(styles.nav)}>
            <div className={css(styles.logo)}><i className="fas fa-compass"></i></div>
            <h1>Flight Scanner</h1>
        </div>
    )
}

export default Nav