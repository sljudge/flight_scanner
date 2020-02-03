import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { DateTime } from 'luxon';
// DateTime.fromMillis(datetimeFromREST * 1000).toFormat('hh:mm')

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'space-around',
        alignItems: "center",
        width: '100%',
        padding: '1rem',
        // backgroundColor: 'rgba(30,30,30,0.4)',
        backgroundImage: 'linear-gradient(4deg, rgba(0,0,0,0.05) 6%, rgba(30,30,30,0.1) 95%)',
        color: 'rgba(30,30,30,0.9)',
        boxShadow: 'inset 2px 1px 7px -1px rgba(30,30,30,0.49)'
    },
    table: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        padding: '1rem'
    },
    providerInfo: {
        fontSize: '1.5rem'
    },
    timesRow: {
        fontSize: '2rem',
    },
    toArrow: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    times: {
        fontWeight: '700'
    },
    price: {
        fontSize: '2.5rem',
        fontWeight: '700',
        backgroundColor: 'rgba(256,256,256,0.05)',
    },
    planeIcon: {
        fontSize: '5rem'
    }
})

const Flight = props => {
    const {
        dTime,
        aTime,
        flyFrom,
        flyTo,
        cityFrom,
        cityTo,
        countryFrom,
        countryTo,
        price,
        availability,
        airlines,
        routes
    } = { ...props }
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.planeIcon)}><i className="fas fa-plane"></i></div>
            <div className={css(styles.price)}>£180</div>
            <table className={css(styles.table)}>
                <tbody>
                    <tr className={css(styles.timesRow)}>
                        <td className={css(styles.times)}>18:00</td>
                        <td />
                        <td className={css(styles.toArrow)}><i className="fas fa-arrow-right" /></td>
                        <td />
                        <td className={css(styles.times)}>21:00</td>
                    </tr>
                    <tr>
                        <td>LGW</td>
                        <td />
                        <td />
                        <td />
                        <td>PRG</td>
                    </tr>
                    <tr>
                        <td>London</td>
                        <td />
                        <td />
                        <td />
                        <td>Prague</td>
                    </tr>
                </tbody>
            </table>
            <table className={css(styles.table, styles.providerInfo)}>
                <tbody>
                    <tr>
                        <td>EasyJet</td>
                    </tr>
                    <tr>
                        <td>10 seats left</td>
                    </tr>
                    <tr>
                        <td>Direct</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Flight