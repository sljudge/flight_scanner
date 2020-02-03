import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { LoadingResults } from '../Loading'
import Flight from '../Flight'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '20rem',
        padding: '2rem'
    },
})

const Results = props => {
    const { loading, flights } = { ...props }
    return (
        <div className={css(styles.container)}>
            {loading === true && <LoadingResults />}
            {loading === false &&
                flights.map(x => (
                    <Flight
                        key={x.id}
                        dTime={x.dTime}
                        aTime={x.aTime}
                        flyFrom={x.flightFrom}
                        flyTo={x.flightTo}
                        cityFrom={x.cityFrom}
                        cityTo={x.cityTo}
                        countryFrom={x.countryFrom.code}
                        countryTo={x.countryTo.code}
                        price={x.price}
                        availability={x.availability}
                        routes={x.routes}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.results.loading.isLoading,
        flights: state.results.flights
    }
}
const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({

    }, dispatch)
}
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return { ...propsFromState, ...propsFromDispatch, ...ownProps }
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Results)