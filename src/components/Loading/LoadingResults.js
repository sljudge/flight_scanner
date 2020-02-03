import React, { useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setRotateForSpinner } from '../../actions/search'

const styles = StyleSheet.create({
    loadingIcon: {
        fontSize: '6rem',
        color: 'rgba(0,0,0,0.5)'
    }
})

let rotateInterval
const LoadingResults = props => {
    const { setRotateForSpinner, rotate } = { ...props }

    const animate = () => {
        setRotateForSpinner()
    }

    useEffect(() => {
        rotateInterval = setInterval(() => {
            animate()
        }, 5)
        return () => {
            clearInterval(rotateInterval)
        }
    })

    return (
        <div className={css(styles.loadingIcon)} style={{ transform: `rotate(${rotate}deg)` }}><i className="far fa-compass"></i></div>
    )
}

const mapStateToProps = (state) => {
    return {
        active: state.results.loading.isLoading,
        rotate: state.results.loading.rotate
    }
}
const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        setRotateForSpinner
    }, dispatch)
}
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return { ...propsFromState, ...propsFromDispatch, ...ownProps }
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(LoadingResults)